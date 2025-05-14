describe('Página principal', () => {
    beforeEach(() => {
        cy.visit('https://pesquisa-emissao-co2.azurewebsites.net/index.html');
    });

    it('Deve clicar em dados e se redirecionar à página dados e então clicar em sobre (pagina Dados)', () => {
        cy.contains('Dados').click();
        cy.contains('Sobre').click();
    });

    it('Deve clicar em sobre e se direcionar à página sobre', () => {
        cy.contains('Sobre').click();
    });
});

describe("Página dados", () => {
    beforeEach (() => {
        cy.visit('https://pesquisa-emissao-co2.azurewebsites.net/data.html');
    });
 
    it('Deve filtrar modo de locomoção por carro', () => {
        cy.get('input[type=search]').type('Carro');
        cy.get('table tbody tr');
    });

        it('Deve filtrar modo de locomoção por transporte Público', () => {
        cy.get('input[type=search]').type('Transporte Público');
        cy.get('table tbody tr');
    });

    it('Deve filtrar modo de locomoção por moto', () => {
        cy.get('input[type=search]').type('Moto');
        cy.get('table tbody tr');
    });
})
