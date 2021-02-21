describe('When navigating to lichess', () => {
    it('opens the board explorer', () => {
        cy.viewport('macbook-16')
        cy.visit("https://lichess.org/study/agFXZQnB")
        cy.get('[title = "Menu"]').click()
        cy.get('.action-menu__tools > [data-icon="B"]').click()
    })
    it('clicks through sicilian', () => {
        for (let index = 0; index < 1000; index++) {
            cy.viewport('macbook-16')
            cy.get('.autoplay > :nth-child(1)').click()
            cy.get('[title = "Menu"]').click()
            cy.wait(1000)
        }
    })
})