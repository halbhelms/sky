<script lang="ts">
  import type { View } from '$lib/types/view.ts';
  import Radio from '$lib/components/ui/radio-fancy.svelte';
  import TextInput from '$lib/components/ui/text-input.svelte';
  
  export let views: View[] = [];
  export let clickAction = (view: View) => {}
  export let newViewAction = () => {}
</script>


<section class="views">
  <section class="view-creation">
    <!-- Save the current configuration as a new view -->
    <p>Save the current configuration as a view</p> 
    <TextInput name="new-value" label="New View" />
    <button on:click={newViewAction}>Save</button>
  </section>
  
  <section class="view-selection">
    <p>Select a view</p>
    {#each views as view}
      <div class="view">
        <Radio label={view.name} name="selected-view" value={view.id} action={() => clickAction(view)} />
      </div>
    {/each}
  </section>
</section>

<style>
  .views {
    background-color: hsl(0, 0%, 98%);
  }

  .view-selection {
    margin: 0 0 1rem 1rem;
    color: #202020;
    font-size: 0.75rem;
  }

  .view-creation {
    margin: 0 0 1rem 1rem;
    color: #202020;
    font-size: 0.75rem;
  }



  .views {
    color: #202020;
    font-size: 0.75rem;
  }

  .view {
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .view > p {
    margin-top: 0.5rem;
    font-size: 0.65rem;
  }

  
  p {
    font-size: 0.75rem;
    color: #606060;
    margin-bottom: 0.5rem;
  }
  
  p.active {
    color: blue;
    font-weight: 600;
  }
</style>