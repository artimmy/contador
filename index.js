function countdown() {

    var passaValor = function(valor)
    {
        window.location = "contador.html?minhaVariavel="+valor;
    }

    var d = document.getElementById("date").value;

    var valorQueEuQueroPassar = d;
    
    passaValor(valorQueEuQueroPassar);

}

