const dominio = "emissaoco2-backend.azurewebsites.net";
//const dominio = "http://localhost:3001";

async function getComments() {
  try {
    const response = await fetch(`${dominio}/comment`);
    if (!response.ok) throw new Error("Erro ao buscar comentários");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Erro no getComments:", err);
    return [];
  }
}

async function postComment() {
  const token = localStorage.getItem("token-api");

  if (!token) {
    alert("Você precisa estar logado para comentar.");
    return;
  }

  const body = {
    body: document.getElementById("textoComentario").value,
    nome: document.getElementById("nomeComentario").value || "Anônimo",
  };

  try {
    const response = await fetch(`${dominio}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const erro = await response.text();
      console.error("Erro no comentário:", erro);
      alert("Erro ao enviar o comentário. Verifique se está logado.");
      return;
    }

    alert("Comentário enviado com sucesso!");
    document.getElementById("textoComentario").value = "";
  } catch (error) {
    console.error("Erro: ", error);
    alert("Falha ao conectar com o servidor.");
  }
}

async function deleteComment(id) {
  const token = localStorage.getItem("token-api");

  if (!token) {
    alert("Você precisa estar logado para excluir.");
    return;
  }

  if (!confirm("Tem certeza que deseja excluir este comentário?")) return;

  try {
    const response = await fetch(`${dominio}/comment/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error("Erro ao excluir comentário");

    alert("Comentário excluído com sucesso!");
  } catch (err) {
    console.error("Erro no deleteComment:", err);
    alert("Erro ao excluir comentário.");
  }
}
