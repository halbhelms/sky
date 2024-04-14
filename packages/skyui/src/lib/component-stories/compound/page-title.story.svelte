<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import PageTitle from '$lib/components/ui/compound/page-title.svelte';

  export let Hst: Hst;
  let title: string = 'Page Title';
  let add: boolean = false;
  let action: any = () => console.log('Action');
</script>

<Hst.Story title="PageTitle">
  <svelte:fragment slot="controls">
    <Hst.Text title="PageTitle" bind:value={title} />
    <!-- <Hst.Select title="Color" bind:value={color} options={['black', 'red', 'green']}/> -->
    <Hst.Checkbox title="Add icon" bind:value={add} />
  </svelte:fragment>
  <PageTitle {title} {add} {action}/>
</Hst.Story>
