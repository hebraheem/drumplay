// LOOP THROUGH ALL BUTTONS 
let button = document.querySelectorAll(".drum");
let numberOfButton =button.length
for (let i= 0; i< numberOfButton; i++){
    button[i].addEventListener("click", clickHandler);
    function clickHandler(){
        let buttonInnerhtml = this.innerHTML;
        makesound(buttonInnerhtml);
        buttonAnimation(buttonInnerhtml);
    
    }
}
// BUTTON FUNCTIOM
let keypress = document.addEventListener("keypress", keyHandler);
function keyHandler(event) {
    makesound(event.key);
    buttonAnimation(event.key);
}

// GENERAL FUNTION TO MAKE SOUND
function makesound(key) {
    switch (key) {
        case "w":
            let audio = new Audio("../sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            let audioa = new Audio("../sounds/tom-2.mp3");
            audioa.play();
            break;
        case "s":
            let audios = new Audio("../sounds/tom-3.mp3");
            audios.play();
            break;
        case "d":
            let audiod = new Audio("../sounds/tom-4.mp3");
            audiod.play();
            break;
        case "j":
            let audioj = new Audio("../sounds/snare.mp3");
            audioj.play();
            break;
        case "k":
            let audiow = new Audio("../sounds/crash.mp3");
            audiow.play();
            break;
    
        case "l":     
            let audiok = new Audio("../sounds/kick-bass.mp3");
            audiok.play();
            break;
        default:
            // document.querySelector(".gameover").classList.add("gameover");
            // setTimeout(() => {
            // document.querySelector(".gameover").classList.remove("gameover");
            // }, 1000);
             
       
    }
}

function buttonAnimation(currentkey) {
    let activeBtn = document.querySelector("." + currentkey);
    activeBtn.classList.add("pressed");
    setTimeout(() => {
        activeBtn.classList.remove("pressed")
    }, 100);
}





