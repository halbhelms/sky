<script lang="ts">
  // import type { PageData } from "./$types.ts";
  
  import PageTitle from "$lib/components/ui/page-title.svelte";
  import TextInput from "$lib/components/ui/text-input.svelte";
  import Button from "$lib/components/ui/button.svelte";
  import Table from "$lib/components/ui/table.svelte";
  
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
    <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td style="text-align:right">{row.status}</td>
      </tr>
    {/each} 
</table>


