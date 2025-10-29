const dominio = 'http://localhost:3001'

async function login(){
    debugger;
    const credenciais = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    try {
        const response = await fetch(`${dominio}/auth/login`, {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(credenciais)
        })

        const tokenResponse = await response.json();
        const token = tokenResponse.token;

        localStorage.setItem('token-api', token)
    } catch (error) {
        console.log("Erro: ", error)
    }
}

async function listarAlunos() {
    debugger;
    const token = localStorage.getItem('token-api');

    const response = await fetch(`${dominio}/aluno`, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${token}`}
    });

    const alunos = await response.json();
    const tabelaAlunos = document.getElementById("tabela-alunos")

    tabelaAlunos.innerHTML = "";
    tabelaAlunos.innerHTML = alunos.map(a => `
        <tr>
            <td>${a.ra}</td>
            <td>${a.nome}</td>
            <td>${a.email}</td>
        <tr>
        `).join("")
}