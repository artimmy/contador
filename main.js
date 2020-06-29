function countdown() {

    
    // Set the date we're counting down to by getting the value from the input 
    var d = document.getElementById("date").value;

    var countDownDate = new Date(d).getTime();
    

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
        }
    }, 1000);

}


// acresentar aqui algo para fazer quando o tempo acabar como trocar de pagina alem de zerar o relogio
