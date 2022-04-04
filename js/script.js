const array = [
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
    'content/hackerman.jpg',
    'content/omori.jpg',
    'content/hit.jpg',
    'content/put.jpg',
    'content/cacodemon.jpg',
    'content/sonk.jpg',
    'content/kirby.jpg',
    'content/garfield.jpg',
    'content/tf2.jpg',
    'content/shodan.jpg',
    'content/rick.jpg',
    'content/ultrak.jpg',
    'content/deusex.jpg',
    'content/hl.jpg',
    'content/ross.jpg',
    'content/dk.jpg',
    'content/chung.jpg',
    'content/postal.jpg',
    'content/pika.jpg',
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
const shuffled_images = shuffle(array);
console.log(shuffled_images)