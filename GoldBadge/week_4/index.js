//console.log("my files are connected!");

//let url = "https://adventure-time-quote-api.glitch.me/api/random"; //pulled from the documentation provided

const section = document.querySelector(".randomDiv"); //use a . to call the class, or you can do getElementById and use the id tag in ()
    console.log(section);

const charPic = { //this is a literal - it's hard-coded
    finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
    "tart toter" : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
    lady : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
    marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
    "lumpy space princess" : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
    lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
    "duke of nuts" : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
    fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
    "princess bubblegum" : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
    "ice king" : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
    bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
    "jake the dog": "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"
};

//BASIC SETUP/SYNTAX FOR FETCH
// fetch(url)
// .then(function(result){ //result is a parameter, you want to return not console.log
//     return result.json() //json means that the data is zipped into a string, then needs reformatted so it's useable (like WonkaTV)
// })
// .then(function(data) {
//     console.log(data); //console.log means that it shows up in your console
//     //invoke a function that displays our results
// })
// .catch(err => console.error({error: err})); //there in case the promise is broken - we can add some info to help if it doesn't work (like a prenup!)

let url = "https://adventure-time-quote-api.glitch.me/api/random"; //pulled from the documentation provided

fetch(url)
.then(function(result){ //result is a parameter, you want to return not console.log - a promise
    return result.json() //json means that the data is zipped into a string, then needs reformatted so it's useable (like WonkaTV)
}) //if the first one is successful, run the next .then
.then(function(data) { //data's value changes depending on the info/database you get back from the fetch/API - dynamic!
    console.log(data); //console.log means that it shows up in your console
    displayResults(data); //invoke a function that displays results
})
.catch(err => console.error({error: err})); //there in case the promise is broken - we can add some info to help if it doesn't work (like a prenup!)

function displayResults(quote){ //quote is a parameter
    console.log(quote);
    console.log(`QUOTE RESULT ==> ${quote}`);

    let heading = document.createElement("h2"); //it doesn't live in the HTML, but you can console.log here and it works
    let image = document.createElement("img");

    //PARENT.appendChild(CHILDELEMENT)
    section.appendChild(heading); //you're writing this because the data isn't hard coded in HTML, it's coming from a database, but it can be readable at some point
    section.appendChild(image);

    heading.textContent = quote.split(":")[1]; //you use [] because the colon splits it into an array - it looks at the second part of the array (the quote)
                                               //now it shows up on your browser!!
    console.log(heading);
    
    let character = quote.split(":")[0].toLowerCase(); //you had to make them all lowercase otherwise they don't match the keys above (finn, marceline, etc.)
    console.log (character);

    for(pic in charPic) {
        console.log("character", character); //character is the character from the API
        console.log("pic", pic); //represents each character in our charPic object
        if(character === pic) { //you had to go back and make some of the names a string/spell it out in the object above so it matches 
                                // the QUOTE RESULT character from the API has to match the object (like a vlookup) (ex: lsp vs. lumpy space princess)
            image.src = charPic[pic] //pic is a placeholder variable, not hard coded - grab from database
        }
    }

    heading.style.textAlign = "center";
    
    
}