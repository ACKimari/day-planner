let currentTime = new Date()
console.log(currentTime);

document.getElementById("currentDay").innerHTML = currentTime

var textAreaInput = document.querySelector('#textArea');
var saveBtn = document.querySelector('#saveButton');
var savedText = localStorage.getItem('text');

// renderLastRegistered();

function displayMessage() {
    textAreaInput.textContent = savedText;
}

saveBtn.addEventListener("click", function(event){
    event.preventDefault()

    var textAreaInput = document.querySelector('#textArea').nodeValue;
    localStorage.setItem("event", textAreaInput);

    // renderLastRegistered();
});

