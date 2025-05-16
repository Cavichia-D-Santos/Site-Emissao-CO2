describe("Filtros na tabela", () => {
    beforeEach (() => {
        cy.visit('https://pesquisa-emissao-co2.azurewebsites.net/data.html');
    });
 
    it('Deve filtrar modo de locomoção por carro', () => {
        cy.get('input[type=search]').type('Carro');
        cy.get('table tbody tr');
        cy.get('table').contains('td', 'Carro');
    });

        it('Deve filtrar modo de locomoção por transporte Público', () => {
        cy.get('input[type=search]').type('Transporte Público');
        cy.get('table tbody tr');
        cy.get('table').contains('td', 'Transporte Público');
    });

    it('Deve filtrar modo de locomoção por moto', () => {
        cy.get('input[type=search]').type('Moto');
        cy.get('table tbody tr');
        cy.get('table').contains('td', 'Moto');
    });
})
//teste