<script lang="ts">
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
  import { data } from "./data";
  import Meme from "./Meme.svelte";
  const funnydata = shuffleArray(data);
</script>

<canvas id="c"></canvas>
<div id="header">
  <h1>WELCOME TO <a href="https://sugoma.xyz">SUGOMA.XYZ</a></h1>
  <h3>THE SUSSIEST PLACE ON THE INTERNET.</h3>
</div>
<div id="content">
  {#each funnydata as image}
    <Meme {image}></Meme>
  {/each}
</div>

<style>
  #content {
    display: flex;
    flex-wrap: wrap;
    flex: auto;
    padding: 10px;
  }
  #header {
    text-align: center;
    font-size: 25px;
  }
  h1 {
    display: block;
  }
</style>
