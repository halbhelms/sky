<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  export let text: string;
  export let action: Function = () => console.log('Button clicked');
</script>
<!-- #endregion -->

<!-- #region: HTML -->
<section class="button-component">
  <button on:click={() => action()}>{text}</button>
</section>
<!-- #endregion -->

<!-- #region: CSS -->
<style>
  button {
    padding: 7px 20px;
    background-color: var(--bg-color, hsl(218, 97%, 57%));
    color: var(--text-color, White);
    border: none;
    border-radius: 5px; /* Rounded corners */
    cursor: pointer;
    font-size: 16px; /* Larger text */
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    transition:
      background-color 0.3s,
      transform 0.2s; /* Smooth transition for background and transform */
  }

  button:hover {
    background-color: hsl(218, 100%, 38%);
    transform: scale(1.05); /* Slightly larger on hover */
  }

  button:active {
    transform: scale(0.95); /* Slightly smaller when pressed */
  }
</style>
<!-- #endregion -->