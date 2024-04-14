<!-- #region HTML -->
<section class="date-range-component">
  <label><input type="radio" name="date-range" value="last-7"> Last 7 days</label>
  
  <label><input type="radio" name="date-range" value="this-month"> This month</label>
  
  <label><input type="radio" name="date-range" value="last-month"> Last month</label>
  
  <label><input type="radio" name="date-range" value="current-qtd"> Current QTD</label>
  
  <label><input type="radio" name="date-range" value="last-qtd"> Last QTD</label>
  
  <label><input type="radio" name="date-range" value="ytd"> YTD</label>
</section>
<!-- #endregion -->

<!-- #region CSS -->
<style>
  section.date-range-component {
    display: grid;
    row-gap: 0.75rem;
    font-size: 0.75rem;
    grid-auto-rows: 1rem;
    padding: 1rem;
    background-color: #E6EAEC;
    color: #202020;
  }

  input{
    margin-right: 0.5rem;
    width: 0.8rem;
    height: 0.8rem;
  }
</style>
<!-- #endregion -->