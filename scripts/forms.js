const dominio = 'emissaoco2-backend.azurewebsites.net'
//const dominio = 'http://localhost:3001'

async function createForm(){
  const token = localStorage.getItem("token-api");
  if (!token){
    alert("Realize o login para enviar um formulário.");
    return;
  }

  const novoForm = {
    idade: document.getElementById("idade").value,
    transporte: document.getElementById("transporte").value,
    quilometragem: document.getElementById("km").value,
    transportePublico: document.getElementById("transportePublico").value,
    carne: document.getElementById("carne").value,
    co2: 0 //será calculado futuramente
  };

  try {
    const response = await fetch(`${dominio}/form`, {
      method: "POST",
      headers: { "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
      body: JSON.stringify(novoForm),
    });

    if (!response.ok) {
      const erroTexto = await response.text();
      console.error("Erro no envio:", erroTexto);
      document.getElementById("formMsg").textContent = "Erro ao enviar o formulário.";
      document.getElementById("formMsg").className = "text-danger fw-semibold text-center";
      return false;
    }

    console.log("Formulário enviado com sucesso!");
    document.querySelector("form").reset();
    document.getElementById("formMsg").textContent = "Resposta enviada com sucesso!";
    document.getElementById("formMsg").className = "text-success fw-semibold text-center";
    setTimeout(() => { document.getElementById("formMsg").textContent = ""; }, 3000);
    return true;
  } catch (error) {
    console.error("Erro no envio:", error);
    return false;
  }
}

function calcularCo2(km, carne) {
  let total = 0;
  if (km && !isNaN(km)){
    total += km * 7 * 0.12;
  } 
  if (carne && !isNaN(carne)){
    total += carne * 6;
  } 
  return total > 0 ? total.toFixed(2) : "Dados insuficientes";
}

async function carregarDados() {
  try {
    const response = await fetch(`${dominio}/form`);
    const dados = await response.json();

    const tbody = document.getElementById("tbodyRespostas");
    if (!tbody) return;

    tbody.innerHTML = "";

    dados.forEach(item => {
      const emissao = calcularCo2(item.quilometragem, item.carne);

      tbody.innerHTML += `
        <tr>
          <td>${item.idade ?? "-"}</td>
          <td>${item.transporte ?? "-"}</td>
          <td>${item.quilometragem ?? "-"}</td>
          <td>${item.transportePublico ?? "-"}</td>
          <td>${item.carne ?? "-"}</td>
          <td>${emissao}</td>
        </tr>
      `;
    });

    // ✅ Inicializa DataTable após adicionar dados
    $("#TabelaRespostas").DataTable({
      destroy: true,
      pageLength: 5,
      language: {
        decimal: ",",
        thousands: ".",
        info: "Mostrando _START_ até _END_ de _TOTAL_ registros",
        lengthMenu: "Mostrar _MENU_ registros",
        zeroRecords: "Nenhum resultado encontrado",
        search: "Buscar:",
        paginate: {
          first: "Primeiro",
          last: "Último",
          next: "Próximo",
          previous: "Anterior"
        }
      }
    });

  } catch (error) {
    console.error("Erro ao carregar dados:", error);
  }
}

/** ✅ Executa apenas onde for necessário */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("btnEnviarForm")) {
    document.getElementById("btnEnviarForm").addEventListener("click", async (event) => {
      event.preventDefault();
      await createForm();
    });
  }

  if (document.getElementById("TabelaRespostas")) {
    carregarDados();
  }
});