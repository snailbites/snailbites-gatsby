describe('Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
        cy.get('h1').contains('Vincent Nalupta', { matchCase: false })
        cy.get('button').contains('Read the Blog', { matchCase: false })
        cy.get('p.lead').contains('Blog Posts')
    })

    it('should navigate to the blog', () => {
        cy.visit('/');    
        cy.get('button')
            .contains('Read the Blog', { matchCase: false })
            .click();
        
        cy.url().should('include', '/blog')
    });
    
    
})