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
     
})

