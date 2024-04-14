<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import Meow from '$lib/components/meow.svelte';
  export let Hst: Hst;
  let name = 'Cody';
  let color = 'black';
  let active = false;
</script>


<Hst.Story title="🐱 Meow">
  <svelte:fragment slot="controls">
    <Hst.Text title="Cat Name" bind:value={name} />
    <Hst.Select title="Color" bind:value={color} options={['black', 'red', 'green']}/>
    <Hst.Checkbox title="Active" bind:value={active} />
  </svelte:fragment>
  <Meow {name} {color} {active}/>
</Hst.Story>
