let randomNumber = Math.floor(Math.random()*100)+1;
//Obtener los elementos
let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let resetBtn = document.getElementById("resetBtn")
let message = document.getElementById("message")

function checkGuess(){
    let guess = parseInt(guessInput.value);
    if(guess === randomNumber){
        message.innerText ="¡Felicidades es Correcto!";
        message.className = "correct";
        guessInput.disabled = true;
        guessBtn.disabled = true;
    }else if(guess < randomNumber){
        message.innerText = "El numero es demaciado bajo vuelve a intentar";
        message.className = "incorrect";
    }else{
        message.innerText = "El numero es demaciado alto, intenta de nuevo";
        message.className = "incorrect";
    }
    guessInput.value = "";
}
// FUNCION REINICIO DE JUEGO
function resetGame(){
    randomNumber = Math.floor(Math.random()*100)+1;
    message.innerText = "";
    message.className = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
}
//Asignamos los botones
guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);