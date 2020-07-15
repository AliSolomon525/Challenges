// const section = document.querySelector('.randomDiv'); 
// console.log(section);

let url = 'https://rickandmortyapi.com/api/character/';

fetch(url)
.then(function(result){ 
    return result.json() 
})
.then(function(data) {
    //console.log(data); 
    displayResults(data);
})
.catch(err => console.error({error: err}));

function displayResults(pic) {
    console.log(pic);
    console.log("2", pic.results);
    console.log(pic.results[0]);

    let rickImage = document.createElement("img");
    let mortyImage = document.createElement("img");

    rickImage.src = pic.results[0].image;

    section.appendChild(rickImage);
    
}


