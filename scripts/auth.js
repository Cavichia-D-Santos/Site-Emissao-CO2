const dominio = 'emissaoco2-backend.azurewebsites.net '

// Login
async function login() {
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

// Cadastro de Usuário - CONFERIR CODIGO
async function register() {
  const novoUsuario = {
    email: document.getElementById("signupEmail").value,
    password: document.getElementById("signupPassword").value,
    nome: document.getElementById("signupNome").value
  }

  try {
    const response = await fetch(`${dominio}/auth/register`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(novoUsuario)
    })

    if (!response.ok) {
      document.getElementById("signupMsg").textContent = "Erro ao cadastrar!"
      return
    }

    document.getElementById("signupMsg").className = "text-success"
    document.getElementById("signupMsg").textContent = "Cadastrado com sucesso!"

    setTimeout(() => {
      const modal = bootstrap.Modal.getInstance(document.getElementById("signupModal"))
      modal.hide()
    }, 1000)

  } catch (error) {
    console.log(error)
  }
}