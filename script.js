function carregar() {
const msg = window.document.getElementById('msg')
const img = window.document.getElementById('imagem')
const data = new Date()
const hora = data.getHours()
const minutos = data.getMinutes()

msg.innerHTML = `Agora são ${hora} hora(s) e ${minutos} minuto(s).`

if (hora >= 0 && hora < 12){
//Bom dia!

img.src='img/manha.png' 
document.body.style.background = '#d6c5b2'
} else if (hora >= 12 && hora <= 18 ) {
// Boa tarde!

img.scr='img/tarde.png'
document.body.style.background = '#658699' 
} else {

//Boa tarde!
img.src='img/noite.png'
document.body.style.background = '#001043' 
}

}
