function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = 'img/bomdia.jpg'
        document.body.style.background = '#b9b3a4'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/boatarde.jpg'
        document.body.style.background = '#655738'
    } else {
        img.src = 'img/boanoite.jpg'
        document.body.style.background = '#2a2a20'
    }
}

