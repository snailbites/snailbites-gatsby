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
        cy.visit('/');
        cy.get('nav').click();
        cy.wait(1500);
        cy.get('nav ul li').contains('Home').should('be.visible');
        cy.get('nav ul li').contains('Work').should('be.visible');
        cy.get('nav ul li').contains('Blog').should('be.visible');
        cy.get('nav ul li').contains('CV').should('be.visible');

        cy.get('nav').click();
        cy.wait(1500);
        cy.get('nav ul li').contains('Home').should('not.be.visible');
        cy.get('nav ul li').contains('Work').should('not.be.visible');
        cy.get('nav ul li').contains('Blog').should('not.be.visible');
        cy.get('nav ul li').contains('CV').should('not.be.visible');
    })

    it('should navigate to cv from home', () => {
        cy.visit('/');
        cy.get('nav').click();
        
        cy.get('nav li').contains('CV').click();
        cy.url().should('include', '/cv')
        cy.get('nav li').contains('CV').should('not.be.visible');
    })
    
    it('should navigate to work from blog', () => {
        cy.visit('/blog');
        cy.get('nav').click();
        cy.wait(1500);
        cy.get('nav li').contains('Work').click();
        cy.wait(5000);
        cy.url().should('include', '/')        
        cy.isInViewport('#work')        
    })
});

describe('Blog', () => {
    it('should click through to a post from /blog', () => {
        cy.visit('/blog');

        cy.get('main h1 a')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
                cy.url().should('include', href)
            })        
    });
});