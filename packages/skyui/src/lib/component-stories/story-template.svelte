<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  // import __componentName from '$lib/components/ui/__component-name.svelte';
  
  export let Hst: Hst;
  let __prop: string = 'Prop';
</script>


<Hst.Story title="__storyTitle">
  <svelte:fragment slot="controls">
    <Hst.Text title="PageTitle" bind:value={__prop} />
    <!-- <Hst.Select title="Color" bind:value={color} options={['black', 'red', 'green']}/> -->
    <!-- <Hst.Checkbox title="Active" bind:value={active} /> -->
  </svelte:fragment>
  <__componentName __prop={__prop}/>
</Hst.Story>
