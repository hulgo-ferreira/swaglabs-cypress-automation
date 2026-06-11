describe('Login', () => {

    beforeEach(() => {
        cy.goHome()
    })

  it('CT01 - Login com credenciais válidas (positivo)', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.contains('Products')
      .should('be.visible')
  })

  it('CT02 - Login com usuário inválido (negativo)', () => {
    cy.login('usuario_invalido', 'secret_sauce')
    cy.noticeHave('Epic sadface: Username and password do not match any user in this service')
  })

  it('CT03 - Login com senha inválida (negativo)', () => {
    cy.login('standard_user', 'senha_invalida')
    cy.noticeHave('Epic sadface: Username and password do not match any user in this service')
  })

  it('CT04 - Login com campos vazios (negativo)', () => {
    cy.login('', '')
    cy.noticeHave('Epic sadface: Username is required')
  })
})