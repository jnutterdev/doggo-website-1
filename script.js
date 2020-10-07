fetch('https://dog.ceo/api/breeds/list')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let breeds = data.message;
        console.log(breeds);
        let breedList = document.getElementById('breed-list');
        breeds.forEach(function(breed) {
            let breedElement = document.createElement('option');
            breedElement.setAttribute('value', breed);
            breedElement.innerHTML = breed;
            breedList.appendChild(breedElement);
        });
    })

let dogSelector = document.getElementById("breed-list");

dogSelector.addEventListener("change", function() {
    let breedName = this.value;
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            let breedImage = document.createElement('img');
            breedImage.setAttribute('src', data.message);
            document.body.appendChild(breedImage);

        })

})

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
            button.innerHTML = "Random doggo is a go";
        })
})