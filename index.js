 function fatorial(){
    var numero = document.getElementById("numero").value;
    var input = document.getElementById("numero").value;
    
    while (input > 1) {
        input--;
        numero *= input;
    }
    return document.getElementById('Racumulador').innerHTML = numero
}