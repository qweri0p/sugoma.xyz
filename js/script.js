var array = [
    'content/gex.jpeg', 
    'content/ranno.png',
    'content/sumoga.jpg',
    'content/yosus.png',
    'content/sus-monokuma.png',
    'content/sauce-game.png',
    'content/mario-hill.png'
];
console.log(array)
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
var shuffled_images = shuffle(array);
console.log(shuffled_images)

