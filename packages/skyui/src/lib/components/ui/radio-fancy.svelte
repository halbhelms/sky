<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  export let label: string
  export let name: string
  export let value: string | number
  export let checked: boolean = false
  export let action: Function
</script>
<!-- #endregion -->

<!-- #region: HTML -->
<label class="radio-wrapper">
  <input
    type="radio"
    {name}
    {value}
    {checked}
    on:change={() => action(name, value)}
  />
  <span class="radio-mark"></span>
  {label}
</label>
<!-- #endregion -->


<!-- #region: STYLE -->
<style>
  .radio-wrapper {
    position: relative;
    display: block;
    cursor: pointer;
    padding-left: 35px; /* Space for the custom radio */
    margin-bottom: 12px; /* Space between radio buttons */
    font-size: 16px; /* Label text size */
    user-select: none; /* Prevent text selection */
  }

  .radio-wrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .radio-mark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #eee;
    border-radius: 50%; /* Makes it round */
    transition: background-color 0.2s;
  }

  .radio-wrapper:hover input ~ .radio-mark {
    background-color: #ccc;
  }

  .radio-wrapper input:checked ~ .radio-mark {
    background-color: #2196f3;
  }

  .radio-mark:after {
    content: "";
    position: absolute;
    display: none;
    left: 7px;
    top: 7px;
    width: 10px;
    height: 10px;
    border-radius: 50%; /* Makes it round */
    background: white;
  }

  .radio-wrapper input:checked ~ .radio-mark:after {
    display: block;
  }
</style>
