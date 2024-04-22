<script lang="ts">
  export let label: string;
  export let value: string | number;
  export let name: string;
  export let action: Function = ()=>{};
  export let checked: boolean = false;

  let selected = false; // Assuming a boolean, adjust as needed
</script>

<label class="checkbox-wrapper">
  <input type="checkbox" {value} {name} {checked} on:change={() => action(name, value)}/>
  <span class="checkmark"></span>
  {label}
</label>

<style>
  .checkbox-wrapper {
    position: relative;
    display: block;
    cursor: pointer;
    padding-left: 35px; /* Space for the custom checkbox */
    margin-bottom: 12px; /* Space between checkboxes */
    font-size: 16px; /* Label text size */
    user-select: none; /* Prevent text selection */
  }

  .checkbox-wrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #eee;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .checkbox-wrapper:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .checkbox-wrapper input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-wrapper input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox-wrapper .checkmark:after {
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
</style>
