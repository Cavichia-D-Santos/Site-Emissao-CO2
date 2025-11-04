//const dominio = 'emissaoco2-backend.azurewebsites.net'
const dominio = 'http://localhost:3001'

async function createForm(){
    const novoForm = {
    idade: document.getElementById("idade").value,
    transporte: document.getElementById("transporte").value,
    km: document.getElementById("km").value,
    transportePublico: document.getElementById("transportePublico").value,
    carne: document.getElementById("carne").value,
  };

  try {
    const response = await fetch(`${dominio}/form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoForm),
    });

    if (!response.ok) {
      const erroTexto = await response.text();
      console.error("Erro no registro:", erroTexto);
      return false;
    }

    console.log("Registro bem-sucedido!");
    return true;
  } catch (error) {
    console.error("Erro no registro:", error);
    return false;
  }
}

async function checkForm(){

}

async function listForm(){

}