<script lang="ts">
  // import type { PageData } from "./$types.ts";
  
  import PageTitle from "$lib/components/ui/page-title.svelte";
  import TextInput from "$lib/components/ui/text-input.svelte";
  import Button from "$lib/components/ui/button.svelte";
  import Slide from "$lib/components/ui/slide.svelte";
  
  export let data: any
  const { columns, rows } = data;
  console.log('columns', columns)
  console.log('rows', rows)

  function inviteMember() {
    console.log("invite member");
  }
</script>

<PageTitle title="Members" />
<TextInput label="New Member Email" name="invitation-email" />
<Button text="Invite" action={inviteMember}/>
<table>
  <thead>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Active</th>
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        <td class:suspended={row.status == 'suspended'} class:invited={row.status == 'invited'}>{row.name}</td>
        <td class:suspended={row.status == 'suspended'} class:invited={row.status == 'invited'}>{row.email}</td>
        <td class:suspended={row.status == 'suspended'} class:invited={row.status == 'invited'}><Slide checked={row.status!=='suspended'} label="" /></td>
        
      </tr>
    {/each} 
</table>

<style>
  td {
    padding-right: 1.5rem;
  }

  th {
    text-align: left;
  }

  .suspended {
    color: silver;
  }

  .invited {
    color: green;
    font-style: italic;
  }
</style>


