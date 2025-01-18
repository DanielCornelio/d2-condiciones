const image = document.getElementById('border-img');

image.addEventListener('click', toggleBorder);

function toggleBorder(){
    console.log(image.classList)
    if(image.classList.contains('borderToggle')){
        image.classList.remove('borderToggle')
    }else{
        image.classList.add('borderToggle')
    }
}

//####################################################

const sticker1 = document.getElementById('sticker1');
const sticker2 = document.getElementById('sticker2');
const sticker3 = document.getElementById('sticker3');
const mensaje = document.querySelector('.mensaje');
const verificar = document.querySelector('.verificar');


verificar.addEventListener('click', verificarStickers);

function verificarStickers(){
    const total = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value)
    if(total > 10){
        mensaje.textContent = `llevas demasiados sticker`
    }else if(total > 0 && total <= 10){
        mensaje.textContent = `Llevas ${total} stickers`
    }else{
        mensaje.textContent = `Debes ingresar un valor valido`
    }
}

//#####################################################
const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const valor3 = document.querySelector('#valor3');
const msg = document.querySelector('#msg');
const ingresarBtn = document.querySelector('#ingresar');

ingresarBtn.addEventListener("click", comprobarPwd) 

function comprobarPwd() {
    let password = valor1.value + valor2.value + valor3.value;
  
    if (password === "911") {
        msg.innerHTML = "Password 1 correcto";
        msg.style.color = "green";
    } else if (password === "714") {
        msg.innerHTML = "Password 2 correcto";
        msg.style.color = "green";
    } else {
        msg.innerHTML = "Password incorrecto";
        msg.style.color = "red";
    }
  };