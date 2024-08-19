document.getElementById("btn-exibir").addEventListener("click", function() {
    // Captura os valores dos campos de texto
    const nome = document.getElementById("campo-nome").value;
    const email = document.getElementById("campo-email").value;
  
    // Exibe os valores na tela
    document.getElementById("resultado").innerHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;
  });
  