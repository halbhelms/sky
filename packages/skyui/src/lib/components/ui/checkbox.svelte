<script lang="ts">
  export let title: string
  export let value: string
  export let name: string
  export let action: Function
  export let checked: boolean = false

  let selected = false; // Assuming a boolean, adjust as needed
</script>



<section class="checkbox-component">
  <label>
    <input type="checkbox" {name} {value} {checked} on:change={action(value)} />
    <span>{title}</span>
  </label>
</section>

<style>
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input[type="checkbox"] {
    height: 0.75rem;
    width: 0.75rem;
  }
</style>


