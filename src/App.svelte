<script>
  import Viewer from "./components/Viewer.svelte";
</script>

<main>
  <Viewer />
</main>

<style>
  :root {
    font-family: monospace;
  }

  :global(body) {
    background-color: #242424;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    width: 100%;
    height: 100vh;
    max-width: 100%;
    max-height: 100vh;
    display: block;
  }
</style>
