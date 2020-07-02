function countdown() {

    //Checks if the user left the date input empty
    if (!document.getElementById("date").value) {

        alert("Informe uma Data.");

    } 
    
    else {
        //Function that will deliver our input value, to the next page, trhu the URL.
        var passaValor = function(valor) {
            
           window.location = "contador.html?minhaVariavel="+valor;
        }

        //Getting the value to be delivered
        var d = document.getElementById("date").value;

        var valorQueEuQueroPassar = d;
        
        //Delivering 
        passaValor(valorQueEuQueroPassar);
    }

}

