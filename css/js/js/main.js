document.getElementById('form-presente').addEventListener('submit', function (event) {
  event.preventDefault();

  const foto = document.getElementById('foto').files[0];
  const musica = document.getElementById('musica').files[0];
  const emocao = document.getElementById('emocao').value;
  const data = document.getElementById('data').value;

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
});

function gerarLinkPresente(presente) {
  const base64 = btoa(JSON.stringify(presente));
  return `https://seusite.vercel.app/presente/${base64}`;
}