import { useState, useEffect } from "react";

/**
 * @param {*} ref 
 * @param {*} settings 
 * @example
 * 
 * const [inView, ratio] = useIntersectionObserver(footerRef, {
 *   threshold: 0
 * }) 
 * 
 * useEffect(() => {
 *  // perform action
 * }, [inView]);
 * 
 */
export const useIntersectionObserver = (
    ref,
    { threshold, root, rootMargin }
) => {
    const [state, setIntersection] = useState({
        inView: false,
        triggered: false,
        ratio: undefined,
        entry: undefined
    })

    function buildThresholdList() {
        let thresholds = [];
        let numSteps = 20;
      
        for (let i = 1.0; i <= numSteps; i++) {
          let ratio = i / numSteps;
          thresholds.push(ratio);
        }
      
        thresholds.push(0);
        return thresholds;
    }    

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {                
                        setIntersection({
                            inView: true,
                            triggered: true,     
                            ratio: entry.intersectionRatio,                   
                            entry: observerInstance
                        })
                    } 
    
                    if (entry.intersectionRatio > .7) {                   
                        observerInstance.unobserve(ref.current);
                    }
                })
    
                return;
            }, {
                threshold: buildThresholdList(),
                root: root || null,
                rootMargin: rootMargin || "0%"
            }
        )

        if(ref.current && !state.triggered) {
            observer.observe(ref.current);
        }
    })

    return [state.inView, state.ratio, state.entry]
}