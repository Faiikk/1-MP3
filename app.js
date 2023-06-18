document.addEventListener("scroll", function(){
    var horloge = document.getElementById("horloge");

    if (window.scrollY>800){
        horloge.innerHTML=8;  
        }

    if (window.scrollY>1000){
        console.log(window.scrollY)
        horloge.innerHTML=9;
        }

    if (window.scrollY>1200){
        horloge.innerHTML=10;
    }

    if (window.scrollY>1400){
        horloge.innerHTML=11;
    }

    if (window.scrollY>1600){
        horloge.innerHTML=12;
    }
     
    if (window.scrollY>1800){
        horloge.innerHTML=13;
    }

    if (window.scrollY>2000){
        horloge.innerHTML=14;
    }

    if (window.scrollY>2200){
        horloge.innerHTML=15;
    }

    if (window.scrollY>2400){
        horloge.innerHTML=16;
    }

    if (window.scrollY>2600){
        horloge.innerHTML=17;
    }

    if (window.scrollY>2800){
        horloge.innerHTML=18;
    }

    if (window.scrollY>3000){
        horloge.innerHTML=19;
    }

    if (window.scrollY>4000){
        horloge.innerHTML;
    }


})

