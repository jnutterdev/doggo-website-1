let button = document.getElementById("generate");

button.addEventListener("click", function() {
    button.innerHTML = "Generating Doggo...";
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let dogImage = document.createElement('img');
            dogImage.setAttribute('src', data.message);
            document.body.appendChild(dogImage);
            button.innerHTML = "Generate Doggo";
        })
})


