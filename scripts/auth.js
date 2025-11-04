//const dominio = 'emissaoco2-backend.azurewebsites.net'
const dominio = "http://localhost:3001";

// Login
async function login() {
  const credenciais = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch(`${dominio}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credenciais),
    });

    if (!response.ok) {
      const erro = await response.text();
      console.error("Erro no login:", erro);
      alert("E-mail ou senha incorretos!");
      return;
    }

    const tokenResponse = await response.json();
    const token = tokenResponse.token;

    localStorage.setItem("token-api", token);
    console.log("Login bem-sucedido");
    window.location.reload();
  } catch (error) {
    console.log("Erro: ", error);
    alert("Falha ao conectar com o servidor.");
  }
}

// Cadastro de Usuário
async function register() {
  const novoUsuario = {
    nome: document.getElementById("signupNome").value,
    email: document.getElementById("signupEmail").value,
    password: document.getElementById("signupPassword").value,
  };

  try {
    const response = await fetch(`${dominio}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoUsuario),
    });

    if (!response.ok) {
      const erroTexto = await response.text();
      console.error("Erro no registro:", erroTexto);
      return false;
    }

    console.log("Cadastro bem-sucedido!");
    return true;
  } catch (error) {
    console.error("Erro de conexão no register:", error);
    return false;
  }
}