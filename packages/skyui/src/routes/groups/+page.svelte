<script lang="ts">
  import NewGroupForm from '$lib/components/ui/new-group-form.svelte';
  import TextInput from '$lib/components/ui/text-input.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import PageTitle from '$lib/components/ui/page-title.svelte';
  
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

  const { locations, groups } = data;
  
</script>

<section class="filename-component">
  <PageTitle title="Groups" />
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {#each data.groups as group}
        <tr>
          <td>{group.name}</td>
          <td>{group.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <!-- <NewGroupForm  /> -->
</section>
<style>
  .flex {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-top: 1rem;
    margin-left: 1rem;
  } 
</style>
