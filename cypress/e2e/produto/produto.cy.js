
// ordenar produto de A a Z
// ordenar produto do mais barato ao mais alto 
// ordenar produto do mais alto ao mais barato 

describe('Produto', () => {
  
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()    
    })

    it('CT06 - Ordenar produtos de Z a A', () => {
        cy.ordenarProduto('Name (Z to A)', 'Test.allTheThings() T-Shirt (Red)')
    })

    it('CT07 - Ordenar produtos do mais barato ao mais caro', () => {
        cy.ordenarProduto('Price (low to high)', 'Sauce Labs Onesie')
    })

    it('CT08 - Ordenar produtos do mais alto ao mais barato', () => {
        cy.ordenarProduto('Price (high to low)', 'Sauce Labs Fleece Jacket')
    })

    it('CT09 - Adicionar um produto no carrinho', () => {
        cy.selecionaProduto('sauce-labs-backpack')
    })

    it('CT10 - Remover um produto do carrinho', () => {
        cy.selecionaProduto('sauce-labs-backpack')
        cy.removerProduto('sauce-labs-backpack')
    })
})