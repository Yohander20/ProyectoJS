
let ataqueJugador
let ataqueEnemigo2

function iniciarJuego(){
    let botonMascotaJugador=document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador,seleccionarMascotaEnemigo)

    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    
    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonAgua=document.getElementById('boton-agua') 
    botonAgua.addEventListener('click',ataqueAgua)
   
    
}

function ataqueEnemigo(){
    let ataqueAleatorioEne=aleatorio(1,3)
    let spanAtaqueEnemigo1=document.getElementById('ataque-enemigo')
    
    if(ataqueAleatorioEne==1){
        spanAtaqueEnemigo1.innerHTML='FUEGO'
        ataqueEnemigo2='FUEGO'
    } else if(ataqueAleatorioEne==2){
        spanAtaqueEnemigo1.innerHTML='AGUA'
        ataqueEnemigo2='AGUA'
    }else if(ataqueAleatorioEne==3){
        spanAtaqueEnemigo1.innerHTML='TIERRA'
        ataqueEnemigo2='TIERRA'
    }
}

function ataqueFuego(){
    let SpanAtaqueJugador=document.getElementById('ataque-jugador')
    SpanAtaqueJugador.innerHTML='FUEGO'
    ataqueJugador='FUEGO'
    ataqueEnemigo()
    alert(ataqueJugador)
}
function ataqueAgua(){
    let SpanAtaqueJugador=document.getElementById('ataque-jugador')
    SpanAtaqueJugador.innerHTML='Agua'
    ataqueJugador='AGUA'
    ataqueEnemigo()
    alert(ataqueJugador)
}
function ataqueTierra(){
    let SpanAtaqueJugador=document.getElementById('ataque-jugador')
    SpanAtaqueJugador.innerHTML='Tierra'
    ataqueJugador='TIERRA'
    ataqueEnemigo()
    alert(ataqueJugador)
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
    let mascotaAleatorio=aleatorio(1,3)
    let spanMacotaEnemigo=document.getElementById('mascota-enemigo')
    if(mascotaAleatorio==1){
        spanMacotaEnemigo.innerHTML='Hipodoge'
    }else if(mascotaAleatorio==2){
        spanMacotaEnemigo.innerHTML='Capipepo'
    }else{
        spanMacotaEnemigo.innerHTML='Ratigueya'
    }

}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener('load',iniciarJuego)

