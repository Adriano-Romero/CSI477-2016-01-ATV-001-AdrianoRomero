/*
Primeiro arquivo javascript/jquery
*/

/*
window.onload = function() {

    alert("Seja bem-vindo(a) !");

}
*/
// Também é possível escrever como $ function () {} a linha abaixo.

$(document).ready(function() {
    console.log("Documento pronto!");
    // Ao clicar em algum lin, é exibindo esse alerta

    });

   


function exibir() {
    var obj = document.cadastro.cidades;
    window.alert("Total de cidades: " + obj.length);
    for (var i = 0; i < obj.length; i++) {
        if (obj.options[i].selected) {
            window.alert("Opção escolhida: " + obj.options[i].value);
        }
    }
}

function escala() {
    var amplitude = document.getElementById("amplitude").value;
    var tempo = document.getElementById("tempo").value;
    var res = Math.log10(amplitude) + (3 * Math.log10(8 * tempo)) - 2.92;
    document.ritcher.resultado.value = res;
    if (res < 3.5) {
        document.getElementById("tipoRitcher").innerHTML = "<div  class='alert alert-success' role='alert'>" +
            "<strong>Terremoto fraco!</strong> Geralmente nao sentido, mas gravado.</div>"
    } else if (res < 5.5) {
        document.getElementById("tipoRitcher").innerHTML =  "<div class='alert alert-success' role='alert'>"+
         " <strong>Terremoto fraco!</strong>As vezes sentido, mas raramente causa dano..</div>"

    } else if (res < 6.1) {
        document.getElementById("tipoRitcher").innerHTML = "<div class='alert alert-info' role='alert'>" +
           " <strong>Cuidado!</strong> No máximo causa danos a prédios bem contruídos, " +
           "mas pode seriamente danificar casas mal construidasnas regiões próximas.</div>"
    } else if (res < 7) {
        document.getElementById("tipoRitcher").innerHTML = "<div class='alert alert-info' role='alert'>"+
          "<strong>Cuidado!</strong> Pode ser destrutivo em áreas em torno de até 100km  do epicentro. </div>"
    } else if (res < 8) {
        document.getElementById("tipoRitcher").innerHTML = "<div class='alert alert-warning' role='alert'>" +
          "<strong>Atenção!</strong> Grande terremoto. Pode causar sérios danos numa grande faixa.. </div>"
    } else {
        document.getElementById("tipoRitcher").innerHTML = "<div class='alert alert-danger' role='alert'> " +
         " <strong>Se salve!</strong> Enorme terremoto. Pode causar graves danos em muitas áreas mesmo que estejam a centenas de quilômetros..</div>"
    }


}


