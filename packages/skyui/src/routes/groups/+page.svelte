<script lang="ts">
  import NewGroupForm from '$lib/components/ui/new-group-form.svelte';
  import TextInput from '$lib/components/ui/text-input.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import PageTitle from '$lib/components/ui/page-title.svelte';
  
  type Group = {
    id: number;
    name: string;
    locations: string[];
  };

  type Location = {
    id: number;
    name: string;
  };
  export let data: {
    locations: Location[];
    groups: Group[];
  }

  let selectedGroupId: number = 0;
  $: locations = data.locations;
  $: groups = [{ id: 0, name: '', description: '', locations: [] }, ...(data.groups || [])];
  $: selectedGroup = groups.find(group => group.id === selectedGroupId) as Group;
  
  function selectGroupHandler(groupId: number) {
    selectedGroupId = groupId;
  }
</script>

<section class="filename-component">
  <PageTitle title="Groups" />
  <section class="main">
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {#each data.groups as group}
          <tr class:selected={group.id == selectedGroupId} class="group-item" on:click={() => selectGroupHandler(group.id)}>
            <td>{group.name}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  
    <NewGroupForm group={selectedGroup} locations={locations} action={selectGroupHandler} />
  </section>
</section>
<style>


  .group-item {
    cursor: pointer; 
  }

  .selected {
    color: hsl(218, 97%, 57%);
    font-weight: bold;
  }
  .main {
    display: grid;
    grid-template-columns: 520px 1fr;
    column-gap: 1rem;
    margin-left: 1rem;
  }

  th {
    text-align: left;
  }
</style>
