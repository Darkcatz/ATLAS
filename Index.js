
var slideNumber = 1

function slide1(){
    document.body.style.backgroundImage = "url('/imgs/Scenery.png')"
}
function slide2(){
    document.body.style.backgroundImage = "url('/imgs/scene2.png')"
}
function slide3(){
    document.body.style.backgroundImage = "url('/imgs/scene3.png')"
}
function slide4(){
    document.body.style.backgroundImage = "url('/imgs/scene4.png')"
}

function background(){

    if (slideNumber == 1){
        slide1();
    } else if(slideNumber == 2){
        slide2();
    } else if(slideNumber == 3){
        slide3();
    } else if(slideNumber == 4){
        slide4();
    }
}

function back(){
    if(slideNumber == 4){
        slideNumber = slideNumber - 3
    } else {
        slideNumber = slideNumber + 1
    }
    background();
    setTimeout(back, 5000);   
}

back();