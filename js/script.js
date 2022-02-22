var array = [
    'content/gex.jpg',
    'content/ranno.jpg',
    'content/sumoga.jpg',
    'content/yosus.jpg',
    'content/sus-monokuma.jpg',
    'content/mario-hill.jpg',
    'content/obamium.jpg',
    'content/trump.jpg',
    'content/kimju.jpg',
    'content/heheheha.jpg',
    'content/hackerman.jpg'
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