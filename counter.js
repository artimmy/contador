// function that reads the querystring

function queryString(parameter) {

    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");


    for (i = 0; i < params.length; i++) {

        param_name = params[i].substring(0,params[i].indexOf('='));
        
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=')+1);
        }
    }

    if (param_value) {

        // Set the date we're counting down to by getting the value from the input sent here by the url
        var countDownDate = new Date(param_value).getTime();
        
        // Update the count down every 1 second
        var x = setInterval( function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now ;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Output the result in each element 
            document.getElementById("day").innerHTML = days; 
            document.getElementById("hou").innerHTML = hours;
            document.getElementById("min").innerHTML = minutes;
            document.getElementById("sec").innerHTML = seconds; 

            // If the count down is over, write some text 
            if (distance < 0) {

                clearInterval(x);
                document.getElementById("day").innerHTML = "00"; 
                document.getElementById("hou").innerHTML = "00";
                document.getElementById("min").innerHTML = "00";
                document.getElementById("sec").innerHTML = "00"; 
                //When time reaches 00 param_value goes back to false
                param_value = false;
            }
        }, 1000);

        // acresentar aqui algo para fazer quando o tempo acabar como trocar de pagina

    } else {
        console.log("date not found, or something else");
    }

}

var variavel = queryString("minhaVariavel");

//When the button restart is pressed it goes back to index
function reiniciar() {
    window.location = "index.html";
}

