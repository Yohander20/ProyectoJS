function iniciarJuego(){
    let botonMascotaJugador=document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    let SpanMascotaJugador=document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        SpanMascotaJugador.innerHTML='Hipodoge'
        alert("Has seleccionado hipodoge")
    }else if(inputCapipepo.checked){
        alert("Has seleccionado capipepo")
        SpanMascotaJugador.innerHTML='Capipepo'
    }else if(inputRatigueya.checked){
        SpanMascotaJugador.innerHTML='Ratigueya'
        alert("Has seleccionado Ratigueya") 
    }else{
        alert("Debes seleccionar una mascota")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){

}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener('load',iniciarJuego)

