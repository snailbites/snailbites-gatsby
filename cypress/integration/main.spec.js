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

describe('Navigation', () => {
    it('should open and close', () => {
        cy.get('nav').click();
        cy.wait(1000);

        cy.get('nav li').contains('Home').should('be.visible');
        cy.get('nav li').contains('Work').should('be.visible');
        cy.get('nav li').contains('Blog').should('be.visible');
        cy.get('nav li').contains('CV').should('be.visible');

        cy.get('nav').click();
        cy.wait(1000);

        cy.get('nav li').contains('Home').should('not.be.visible');
        cy.get('nav li').contains('Work').should('not.be.visible');
        cy.get('nav li').contains('Blog').should('not.be.visible');
        cy.get('nav li').contains('CV').should('not.be.visible');
    })

    it('should navigate to the blog', () => {
        cy.get('nav').click();
        cy.wait(1000);

        cy.get('nav li').contains('Blog').click();
        cy.url().should('include', '/blog')
        cy.get('nav li').contains('Blog').should('not.be.visible');

        cy.get('main h1 a').click()
        cy.url().should('include', '/blog')

    })    
});
