const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const msg = document.getElementById("msg");
const timeOut = setInterval(updateTime, 1000);

function addZero(numero) {
  return numero < 10 ? "0" + numero : numero;
}

function updateTime() {
  let data = new Date();
  let hr = addZero(data.getHours());
  let min = addZero(data.getMinutes());
  let sec = addZero(data.getSeconds());

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;

  if (hr >= 0 && hr < 12) {
    msg.innerHTML = `<div class="msg-icon"> Bom Dia <img src="assets/manha.svg"/></div>`;
  } else if (hr >= 12 && hr <= 18) {
    msg.innerHTML = `<div class="msg-icon"> Boa Tarde <img src="assets/tarde.svg"/></div>`;
  } else {
    msg.innerHTML = `<div class="msg-icon"> Boa Noite <img src="assets/noite.svg"/></div>`;
  }
}
updateTime() 