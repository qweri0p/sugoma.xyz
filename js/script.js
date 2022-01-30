var array = [
    'content/gex.jpg',
    'content/ranno.png',
    'content/sumoga.jpg',
    'content/yosus.png',
    'content/sus-monokuma.png',
    'content/sauce-game.png',
    'content/mario-hill.png',
    'content/obama.png',
];
console.log(array)
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }  
    return array;
  }
var shuffled_images = shuffle(array);
console.log(shuffled_images)