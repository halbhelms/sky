<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  import { formatLargeNumber } from "$lib/utils.js";
  export let title: string;
  export let numberNow: number;
  export let numberThen: number;
  export let currency: boolean;
  export let comparedTo: string;
  // percent difference between numberNow and numberThen
  const delta: number = Math.round(((numberNow - numberThen) / numberThen) * 100);
  const direction: string = delta > 0 ? "up" : "down";
  const deltaColor: string = delta > 0 ? "green" : "red";
  const arrow: string =
    direction === "up"
      ? "bi-arrow-up-circle-fill"
      : "bi-arrow-down-circle-fill";
  const monetary: string = currency ? "$" : "";
</script>
<!-- #endregion -->


<!-- #region HTML markup -->
<div class="info-card-component">
  <div class="top title">{title}</div>

  <div class="bottom">
    <div class="left numbers">
      {monetary} <span>{formatLargeNumber(numberNow)}</span>
    </div>

    <div class="right {deltaColor}">
      <div class="right-top {deltaColor}"><i class="{arrow}"></i>{delta}%</div>
      <div class="right-bottom">v. {comparedTo}</div>
    </div>
  </div>
</div>
<!-- #endregion -->


<!-- #region style -->
<style>
  :root {
    --sky-color: #638ff7;
  }

  .info-card-component {
    max-height: 100%;
    min-height: 100%;
    max-width: 100%;
    min-width: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr;
    border: 2px solid var(--sky-color);
    border-radius: 0.75rem;
    padding: 0.5rem;
  }

  .title {
    font-size: clamp(1vw, 1.5vw, 2vw);
    font-weight: 600;
  }

  .numbers {
    font-size: clamp(1.25vw, 2.5vw, 2.5vw);
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  .green {
    color: green;
  }

  .red {
    color: red;
  }

  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .left {
    border-right: 1px solid grey;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.75rem;
  }

  .right-top {
    font-size: clamp(1vw, 1.5vw, 2.5vw);
    font-weight: 500;
    padding-bottom: 0.5rem;
  }

  i {
    padding-right: 0.75rem;
  }
</style>
<!-- #endregion -->