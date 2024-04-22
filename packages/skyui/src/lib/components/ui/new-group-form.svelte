<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  import TextInput from '$lib/components/ui/text-input.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import Checkbox from '$lib/components/ui/checkbox-fancy.svelte'
  

  type Group = {
    id: number;
    name: string;
    locations: string[];
  };
  
  type Location = {
    id: number;
    name: string;
  };
  
  export let group: Group;
  export let locations: Location[];
  export let action: Function;

  function reset() {
    action(0)
  }
</script>
<!-- #endregion -->


<!-- #region HTML -->
<section class="new-group-form-component">
  <TextInput label="Name" name="new-group" width="30ch" value={group.name}/>
  <!-- locations for this group -->
  <div class="group-locations">
    {#each locations as location}
    <Checkbox label={location.name} name='locations-selected' value={String(location.id)} checked={group.locations.some(element => String(element).includes(String(location.id)))} />
    {/each}
  </div>
  <div class="buttons">
    <Button text="Reset" action={reset} --bg-color='silver' --text-color='black'/>
    <Button text={group.id? 'Update' : 'Create'} action={() => console.log('new group form')} />
  </div>
</section>
<!-- #endregion -->


<!-- #region CSS -->
<style>
  .group-locations {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  .buttons {

    display: flex;
    justify-content: start;
    column-gap: 1rem;
    margin-top: 1rem;
  }
</style>
<!-- #endregion -->