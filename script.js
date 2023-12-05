function carregar() {
  const msg = window.document.getElementById("msg");
  const img = window.document.getElementById("imagem");
  let data = new Date();
  const hora = data.getHours();
  const minutos = data.getMinutes();
  msg.innerHTML = `Agora são ${hora} hora(s) e ${minutos} minuto(s).`;

  switch (true) {
    case hora >= 0 && hora < 12:
      img.src = "img/manha.png";
      document.body.style.background = "#d6c5b2";
      break;
    case hora >= 12 && hora <= 18:
      img.scr = "img/tarde.png";
      document.body.style.background = "#658699";
      break;
    default:
      img.src = "img/noite.png";
      document.body.style.background = "#001043";
  }
}

setInterval(() => carregar(), 1000 * 10);
