<script lang="ts">
  import SvgIcon from "./svg-icon.svelte";
</script>


<div class="waiting-component">
  <div class="waiting-spinner">
    <SvgIcon iconName="spinner" width="48" height="48" />
  </div>
</div>

<style>
  .waiting-component {
    width: 50px;
    height: 50px;
    background-color: red;
    position: relative;
    animation: circular-motion 2s infinite ease-in-out;
  }

  @keyframes circular-motion {
    0%, 100% {
      transform: translate(0, -6px);
    }
    5% {
      transform: translate(1.5px, -5.5px);
    }
    10% {
      transform: translate(3px, -5.2px);
    }
    15% {
      transform: translate(4.5px, -4.5px);
    }
    20% {
      transform: translate(5.2px, -3px);
    }
    25% {
      transform: translate(5.5px, -1.5px);
    }
    30% {
      transform: translate(6px, 0);
    }
    35% {
      transform: translate(5.5px, 1.5px);
    }
    40% {
      transform: translate(5.2px, 3px);
    }
    45% {
      transform: translate(4.5px, 4.5px);
    }
    50% {
      transform: translate(3px, 5.2px);
    }
    55% {
      transform: translate(1.5px, 5.5px);
    }
    60% {
      transform: translate(0, 6px);
    }
    65% {
      transform: translate(-1.5px, 5.5px);
    }
    70% {
      transform: translate(-3px, 5.2px);
    }
    75% {
      transform: translate(-4.5px, 4.5px);
    }
    80% {
      transform: translate(-5.2px, 3px);
    }
    85% {
      transform: translate(-5.5px, 1.5px);
    }
    90% {
      transform: translate(-6px, 0);
    }
    95% {
      transform: translate(-4px, -4px);
    }
  }


</style>