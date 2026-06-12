// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goHome", () => {
  cy.visit("/");
  cy.contains("Swag Labs").should("be.visible")
})

Cypress.Commands.add("doLogin", () => {
  cy.login('standard_user', 'secret_sauce')
})

Cypress.Commands.add("login", (username, password) => {
  if (username) {
    cy.get("#user-name").type(username)
  }

  if (password) {
    cy.get("#password").type(password)
  }

  cy.get("#login-button").click();
})

Cypress.Commands.add("noticeHave", (text) => {
  cy.get('[data-test="error"]')
  .should("be.visible")
  .and("have.text", text)
})

Cypress.Commands.add("selecionaMenu", (menu) => {
  cy.get("#react-burger-menu-btn").click()
  cy.contains(menu)
    .should("be.visible")
  cy.get("#logout_sidebar_link").click()
})

Cypress.Commands.add("selecionaProduto", (produto) => {
  cy.get(`button[data-test="add-to-cart-${produto}"]`).click()
  cy.contains("Remove").should("be.visible")
})

Cypress.Commands.add("removerProduto", (produto) => {
  cy.get(`button[data-test="remove-${produto}"]`).click()
  cy.contains("Add to cart").should("be.visible")
})

Cypress.Commands.add("ordenarProduto", (opcao, produto) => {
  cy.get('.product_sort_container').select(opcao)
  cy.get('.inventory_item_name')
      .first()
      .should('have.text', produto)
})