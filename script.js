function selectValues(num) {
     
    var numbers = document.getElementById('text-box').innerHTML;
     document.getElementById('text-box').innerHTML = numbers + num;

 }

 function clean() {
     document.getElementById('text-box').innerHTML = "";

 }

 function calcular() {

    var resultado = document.getElementById('text-box').innerHTML;

    if(resultado) {
        document.getElementById('text-box').innerHTML = eval(resultado);

    }

 }

