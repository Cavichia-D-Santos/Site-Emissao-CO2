<p width="100%" align="center">
    <img src="Devops.png" width="200px">
</p>

<h1 id = "projectDescription" align="center">Pipeline CI/CD</h1>

<p>Este projeto tem como objetivo demonstrar a implementação de uma pipeline de Integração Contínua (CI) e Entrega Contínua (CD) utilizando práticas de DevOps. </p>


## Sumário

<ul>
    <li><a href = "#run">Descrição do projeto</a></li>
    <li><a href = "#while">Objetivo do site</a></li>
    <li><a href = "#for">Link do site</a></li>
    
</ul>

<br>
<h2 id="run">Descrição do projeto</h2>
<p>O projeto se baseia em tecnicas de DevOps para realizar, de forma, automatizada, os testes e deploy do site html.</p>
<p>O primeiro pipeline a ser executado é o chamado teste de integração, que é ativado automaticamente sempre que houver um push na branch dev. Neste projeto, utilizamos o SonarQube para realizar uma análise estática do código, verificando possíveis vulnerabilidades de segurança, quebra de padrões de codificação e trechos duplicados.</p>
<p>O segundo pipeline a ser executado é o de deploy. Imaginemos um cenário em que todas as branches de feature já foram integradas à branch dev. No momento em que é aberto um pull request da branch dev para a main, o pipeline de deploy é acionado. Nessa etapa, uma imagem Docker é gerada com todas as dependências necessárias para o funcionamento do site. Em seguida, essa imagem é enviada e executada na infraestrutura da Azure. Após o deploy, entram em ação os testes end-to-end, que são responsáveis por validar funcionalidades específicas da aplicação, utilizando o Cypress como ferramenta de teste automatizado.</p>

<h2 id="while">Objetivo do site</h2> 
<p>O site desenvolvido neste projeto é um esforço do Grupo 8 para demonstrar a importância da conscientização sobre a preservação do meio ambiente. O conteúdo apresentado foi construído com base em dados coletados por meio de uma pesquisa realizada pelos integrantes do grupo no dia 6 de abril de 2025 no parque da cidade, Jundiaí. As perguntas da pesquisa foram elaboradas com foco no ODS 15 (Objetivo de Desenvolvimento Sustentável), que trata da proteção da vida terrestre e do desenvolvimento sustentável. As respostas obtidas foram organizadas em formato tabular e cálculos relacionados à emissão de CO₂, com o objetivo de evidenciar o impacto ambiental de determinadas práticas cotidianas.
 </p>


<h2 id="for">Link do site</h2>
<p>This code requests five inputs from the user to compute their respective factorials. The variable used to store the value is assigned to one every time the loop begins. I chose one because this number is the neutral element of multiplication.</p> 




