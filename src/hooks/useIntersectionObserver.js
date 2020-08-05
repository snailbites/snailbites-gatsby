import { useState, useEffect } from "react";

/**
 * @param {*} ref 
 * @param {*} settings 
 * @example
 * 
 * const [inView] = useIntersectionObserver(footerRef, {
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
    const [state, setState] = useState({
        inView: false,
        triggered: false,
        entry: undefined
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                if (entries[0].intersectionRatio > 0) {                
                    setState({
                        inView: true,
                        triggered: true,
                        entry: observerInstance
                    })
                    observerInstance.unobserve(ref.current);
                }
    
                return;
            }, {
                threshold: threshold || 0,
                root: root || null,
                rootMargin: rootMargin || "0%"
            }
        )

        if(ref.current && !state.triggered) {
            observer.observe(ref.current);
        }
    })

    return [state.inView, state.entry]
}