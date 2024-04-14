<script lang="ts">
  export let name: string = `Meow`;
  export let color: string = `black`;
  export let active = false
  $: style = `color: ${color}`
</script>

<section class="meow-component" style={style}>
  <h1 class:active={active}>{name}</h1>

  <p>This is all about {name}</p>
</section>

<style>

  .active {
    border: 1px solid red;
  }
  .meow-component {
    font-size: 2rem;
    color: #202020;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: #202020;
    border: 1px solid navy;
  }
</style>