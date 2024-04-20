<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region: TS -->
<script lang="ts">
  import Radio from '$lib/components/ui/radio-fancy.svelte';
</script>
<!-- #endregion -->


<!-- #region: HTML -->
<section>
  <Radio label="Last 7 days" value="last-7" name="selected-range" action={() => console.log('selected')}/>
  <Radio label="This month" value="this-month" name="selected-range" action={() => console.log('selected')}/>
  <Radio label="Last month" value="last-month" name="selected-range" action={() => console.log('selected')}/>
  <Radio label="Current QTD" value="current-qtd" name="selected-range" action={() => console.log('selected')}/>
  <Radio label="Previous QTD" value="previous-qtd" name="selected-range" action={() => console.log('selected')}/>
  <Radio label="YTD" value="ytd" name="selected-range" action={() => console.log('selected')}/>
</section>
<!-- #endregion -->


<!-- #region: CSS -->
<style>
  section {
    display: grid;
    row-gap: 0.75rem;
    font-size: 0.75rem;
    grid-auto-rows: 1rem;
    padding: 1rem;
    background-color: hsl(0, 0%, 98%);
    color: #202020;
  }

  label {
    font-size: 1rem;
    font-weight: 500;
    margin-left: 1rem;
    user-select: none;
  }

  input{
    margin-right: 0.5rem;
    width: 0.8rem;
    height: 0.8rem;
  }
</style>
<!-- #endregion -->