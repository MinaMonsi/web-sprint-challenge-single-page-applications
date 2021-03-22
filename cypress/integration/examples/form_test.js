describe('My First Test', function (){
    it('Does not do much', function(){
        expect(true).to.equal(true);
    })
})

describe('Visits the website', function (){
    it('Visits a new site', function(){
        cy.visit("http://localhost:3000/");
    })
})

describe('Accepts text input', function(){
    it('Takes input', function(){
       cy.get([placeholder="name"]).type('Marina').should('exist')
    })
})

describe('Accepts multiple checks', function(){
    it('Accepts multiple selections', function(){
        cy.get('.checkBox').check()
    })
})

describe('Form submits', function(){
    it('Submits input', function(){
        cy.get('form').submit()
    })
})