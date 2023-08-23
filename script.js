function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("img");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora <= 5){
        // Boa madrugada!
        msg.innerHTML += "<p><strong>Boa Madrugada!</strong></p>";
        img.src = 'Madrugada.png';
        document.body.style.background = '#210455';
    } else if(hora >= 6 && hora <=12) {
        // Bom Dia!
        msg.innerHTML += "<p><strong>Bom Dia!</strong></p>";
        img.src = 'Manha.png';
        document.body.style.background = '#c3e627';
    } else if (hora >= 13 && hora <= 17){
        // Boa Tarde!
        msg.innerHTML += "<p><strong>Boa Tarde!</strong></p>";
        img.src = 'Tarde.png';
        document.body.style.background = '#efa804';
    } else if (hora >= 18 && hora <= 23){
        // Boa Noite!
        msg.innerHTML += "<p><strong>Boa Noite!</strong></p>";
        img.src = 'Noite.png';
        document.body.style.background = '#101629';
    }
}