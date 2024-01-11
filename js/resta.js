function restar(){
    var v1 = parseInt(document.getElementsById("valor1").value);
    var v2 = parseInt(document.getElementsById("valor2").value);
    var resultado = v1 - v2;
    document.getElementsById("resultado").value=resultado;
}