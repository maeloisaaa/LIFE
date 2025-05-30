function criarPresente() {
  const foto = document.querySelector('input[type="file"][accept="image/*"]').files[0];
  const musica = document.querySelector('input[type="file"][accept="audio/*"]').files[0];
  const emocao = document.querySelector('textarea').value;
  const data = document.querySelector('input[type="date"]').value;

  if (!foto || !musica || !emocao || !data) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const presente = {
    foto: URL.createObjectURL(foto),
    musica: URL.createObjectURL(musica),
    emocao,
    data
  };

  const link = gerarLinkPresente(presente);
  alert(`Presente criado com sucesso! Compartilhe o link: ${link}`);
}

function gerarLinkPresente(presente) {
  const base64 = btoa(JSON.stringify(presente));
  return `https://seusite.com/presente/${base64}`;
}
