var array = [
    'content/gex.jpg',
    'content/ranno.jpg',
    'content/sumoga.jpg',
    'content/yosus.jpg',
    'content/sus-monokuma.jpg',
    'content/sauce-game.jpg',
    'content/mario-hill.jpg',
    'content/obama.jpg',
    'content/trump.jpg',
    'content/sus-monomi.jpg',
    'content/kimju.jpg',
    'content/heheheha.jpg'
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