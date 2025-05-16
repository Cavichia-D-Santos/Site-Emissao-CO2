describe('Formulário de Contato', () => {
  it('Deve enviar uma mensagem com dados válidos', () => {
    cy.visit('https://pesquisa-emissao-co2.azurewebsites.net/contato.html');

    cy.get('#nome').type('Teste Cypress');
    cy.get('#email').type('testecypress@email.com');
    cy.get('#mensagem').type('Teste de formulario.');
    cy.get('button[type=submit]').click();

    cy.get('#status-message', { timeout: 10000 })
      .should('contain', 'Mensagem enviada com sucesso!');
  });
});