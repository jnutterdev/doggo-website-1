let button = document.getElementById("generate");

button.addEventListener("click", function() {
    button.innerHTML = "Generating Doggo...";
    fetch('https://dog.ceo/api/breeds/image/random');
})