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
  import Josh from "./Josh.svelte";
  import Counter from "./Counter.svelte";
  const funnydata = shuffleArray(data);
</script>

<Josh />

<div id="header">
  <Counter /><br />
  <h1>WELCOME TO <a href="https://sugoma.xyz">SUGOMA.XYZ</a></h1>
  <h3>THE SUSSIEST PLACE ON THE INTERNET.</h3>
</div>
<div id="content">
  {#each funnydata as image}
    <Meme {image} />
  {/each}
</div>
<div id="footer">
  <p>
    <a href="https://sugoma.xyz">SUGOMA.XYZ</a> is a website dedicated to the
    worst amogus memes on the internet.
    <br />The source code is available on
    <a href="https://github.com/qweri0p/sugoma.xyz">GitHub</a>.
    <br />Feel free to suggest new amogus memes at the
    <a href="https://github.com/qweri0p/sugoma.xyz/issues">Github issues</a>
    page.
    <br />Don't forget to check out the
    <a href="https://steamcommunity.com/groups/sugoma-xyz"
      >Official Steam Group</a
    >.
    <br /><br />i use <a href="https://archlinux.org">arch</a> btw.
  </p>
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
    text-align: center;
  }
  #footer {
    text-align: center;
    font-size: 25px;
  }
</style>
