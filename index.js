// Store all buttons in var
let drumButtons = document.querySelectorAll("button");

// Iterate through each drum button and add listener
drumButtons.forEach(drum => {
    drum.addEventListener("click", function () {

        // Button text is whatever user clicks on
        let buttonInnerHTML = this.innerHTML;

        // Run the animation and drum sound effects when drums are clicked
        playDrumSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
});

// Whole page listens for keypress events from user
document.addEventListener("keydown", function (event) {

    // Pass key pressed into functions that use key to play sound & run animation
    playDrumSound(event.key);
    buttonAnimation(event.key);

});

// Determine what key was pressed and play corresponding drum sound
function playDrumSound(key) {

    // Check key (key)
    switch (key) {

        case "j":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
         
        // See what key was pressed within the console    
        default:
            console.log(key);
    }

};

// Add animation to drum image via a keyboard button press
function buttonAnimation(currentKey) {

    // Concatenate class name with the key pressed
    let activeButton = document.querySelector("." + currentKey);

    // Add the 'pressed' class from CSS stylesheet
    activeButton.classList.add("pressed");

    // Quickly remove the 'pressed' class from CSS stylesheet
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}