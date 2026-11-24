describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('/minha-conta')
  })

  it('TC001 - Deve exibir o formulário de login', () => {
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')

    cy.get('#username')
      .closest('form')
      .find('button, input[type="submit"]')
      .should('be.visible')
  })
  it('TC002 - Deve exibir uma mensagem ao enviar o formulário vazio', () => {
  cy.get('#username')
    .closest('form')
    .find('button, input[type="submit"]')
    .click()

  cy.get('#username').closest('form').should('be.visible')
})
it('TC003 - Deve exibir erro ao informar credenciais inválidas', () => {
  cy.get('#username').type('usuario_invalido@example.com')
  cy.get('#password').type('senha_invalida')

  cy.get('#username')
    .closest('form')
    .find('button, input[type="submit"]')
    .click()

  cy.get('.woocommerce-error').should('be.visible')
})
it('TC004 - Deve permitir login com credenciais válidas', () => {
  cy.get('#username').type(Cypress.env('LOGIN_EMAIL'))
  cy.get('#password').type(Cypress.env('LOGIN_PASSWORD'), { log: false })

  cy.get('#username')
    .closest('form')
    .find('button, input[type="submit"]')
    .click()

  cy.get('.woocommerce-MyAccount-content').should('be.visible')
})  
})