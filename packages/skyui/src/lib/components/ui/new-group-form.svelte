<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  import TextInput from '$lib/components/ui/text-input.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import Checkbox from '$lib/components/ui/checkbox-fancy.svelte'

  type Group = {
    id: string;
    name: string;
    description: string;
    locations: string[];
  };
  
  type Location = {
    id: string;
    name: string;
  };
  
  export let data: {
    locations: Location[];
    groups: Group[];
  }
  const{ locations, groups } = data;
</script>
<!-- #endregion -->


<!-- #region HTML -->
<section class="filename-component">
  <div class="flex">
    <TextInput label="Name" name="new-group" />
    <Button text="Create" action={() => console.log('new group form')} />
  </div>

</section>
<!-- #endregion -->


<!-- #region CSS -->
<style>
  .filename-component {

  }
</style>
<!-- #endregion -->