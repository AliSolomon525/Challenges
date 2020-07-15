let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
      season1: {
        numberOfEpisodes: 5,
        episodeInfo: [
          { episode: 1, episodeName: "Pilot" },
          { episode: 2, episodeName: "Flying" },
          { episode: 3, episodeName: "Tahani Al-Jamil" },
          { episode: 4, episodeName: "Jason Mendoza" },
          { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis" }
        ]
      },
      season2: {
        numberOfEpisodes: 6,
        episodeInfo: [
          { episode: 1, episodeName: "Everything is Great!" },
          { episode: 2, episodeName: "Dance Dance Resolution" },
          { episode: 3, episodeName: "Team Cockroach" },
          { episode: 4, episodeName: "Existential Crisis" },
          { episode: 5, episodeName: "The Trolley Problem" },
          { episode: 6, episodeName: "Janet and Michael" }
        ]
      },
      season3: {
        numberOfEpisodes: 5,
        episodeInfo: [
          { episode: 1, episodeName: "Everything Is Bonzer!" },
          { episode: 2, episodeName: "The Brainy Bunch" },
          { episode: 3, episodeName: "The Snowplow" },
          { episode: 4, episodeName: "Jeremy Bearimy" },
          { episode: 5, episodeName: "The Ballad of Donkey Doug" }
        ]
      }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
  };




//console.log the description
console.log(netflix.description); //dot notation!!!

//console.log name of episode 3 of season 2
console.log(netflix.seasonInfo.season2.episodeInfo[2].episodeName);

//console.log each episode name in season 3 using only one console.log
let episodes = netflix.seasonInfo.season3.episodeInfo;
//console.log(episodes);

//FOREACH
//you can also access the index with a forEach
episodes.forEach(episode => console.log(episode.episodeName));

//FOR OF LOOP
for (episode of episodes) {
    console.log(episode.episodeName);
}

//FUNCTIONS AND PARAMETERS CHALLENGE
function main() {
    let a = 1;
    let b = 2;
    let c = -3;
    mystery(a,b,c);
    mystery(c,4,a);
    mystery(a + b, b + c, c + a);
}

function mystery(w,z,y) { //w, z, y are just placeholders - the mystery function is still being invoked mutiple times
    console.log(`${y} + ${w} = ${z}`);
}

main();

//mystery 1
//(a, b, c) & (w, z, y) = 1, 2, -3
//y + w = z ===(-3 + 1 = 2)
//-3 + 1 = 2 (first mystery function)

//mystery 2
//(c, 4, a) & (w, z, y) = -3, 4, 1
// y + w = z === (1 + -3 = 4)
//1 + -3 = 4 (second mystery function)

//mystery 3
//(a + b, b + c, c + a) & (w + z, z + y, y + w) = 
//  (3,    -1,    -2)       (3,    -1,    -2)
//-2 + 3 = -1 (third mystery function)

//you're using string interpolation because otherwise the code would do the math for you
//also, the answers to the math aren't right... they are just numbers slotted in to display how functions work

// PALINDROME CHALLENGE
// Create a function that accepts a string as a parameter
// within the function write a conditional that checks if the word is the same forwards and backwards
// If it is the same both ways console.log 'The string is a palindrome'
// If it is not console.log 'It is not a palindrome'

let string = 'radar'
function checker (word) {
    let reverse = word.split("").reverse().join("") //using string.split
    //console.log(reverse);
    if(word === reverse){ //reverse is an array method that simply reverses the entire array
        console.log("This string is a palindrome");
    } else {
        console.log("This is not a palindrome");
    }
}

checker(string)
checker("radar");
checker("level");
checker("student");

let favMovie = {
  nameofMovie: "Pirates of the Caribbean: Curse of the Black Pearl",
  runTime: 143,
  genre: "Action",
  characters: [
      {name: "Captain Jack Sparrow", age: 28, items: [{itemOne:"pirate ship", itemTwo:"hat"}]},
      {name: "Elizabeth Swan", age: 27, items: [{itemOne:"corset", itemTwo:"sword"}]},
    ],
};

console.log(favMovie.nameofMovie);
console.log(favMovie.runTime);
console.log(favMovie.characters);
console.log(favMovie.characters[1].name);
console.log(favMovie.characters[1].items[0].itemOne);