<script lang="ts">
  export let title: string;
  export let tasks: string[] = [];
  export let stubImage: string | null = null
</script>

<h1>{title}</h1>
  
  {#if stubImage}
    <img src="/stub-images/{stubImage}.png" alt={title} />
  {/if} 
<ul>
  {#each tasks as task}
    <li>{task}</li>
  {/each}
</ul>

<style>
  h1 {
    margin-top: 1rem;
    color: #202020;
  }

  ul {
    list-style-type: disc;
    padding: 0;
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 0.65rem;
  }

  img {
    width: 80%;
    height: auto;
    margin-bottom: 1rem;
  }
</style>