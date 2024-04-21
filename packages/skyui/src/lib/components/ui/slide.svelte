<script lang="ts">
  export let label: string
  export let checked: boolean = false

  function toggler(element: HTMLDivElement) {
    const handleClick = () => {
      const slide = element.querySelector('.slide') as HTMLDivElement
      slide.classList.toggle('on')
      const dot = element.querySelector('.dot')
      dot && dot.classList.toggle('on')
    }
    element.addEventListener('click', handleClick)
    return {
      destroy() {
        element.removeEventListener('click', handleClick)
      }
    }
  }
</script>

<div class="slide-component" use:toggler>
  <div class="slide on" class:on={checked}>
    <div class="dot on" class:on={checked}></div>
  </div>
  <span>{label}</span>
</div>

<style>
  .slide-component {
    display: flex; /* Use flexbox to align children horizontally */
    align-items: center; /* Center-align items vertically */
    gap: 8px; /* Add space between elements */
    cursor: pointer; /* Change cursor to pointer on hover */
  }

  span {
    min-width: auto;
  }

  .slide {
    display: inline-block;
    width: 62px;
    /* background-color: silver; */
    background-color: var(--bg-color, #eee);
    height: 28px;
    border-radius: 14px;
    border: 1px solid #202020;
    transition: background-color 0.3s ease; /* Smooth transition for background color */
  }
  .slide.on {
    background-color: var(--bg-color, #2196f3);
  }

  .slide:hover {
    background-color: #ccc;
  }

  .dot {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 12px;
    border: 1px solid silver;
    margin: 2px;
    position: relative; /* Change to relative positioning */
    left: 3px; /* Start position */
    transition: left 0.3s ease; /* Smooth transition for movement */
  }

  .dot.on {
    left: calc(100% - 30px); /* Move to the right, accounting for dot size and margin */
  }

  .dot.on::after {
    content: '✓'; /* Check mark character */
    color: #202020; /* Check mark color */
    font-size: 20px; /* Adjust size to fit inside the dot */
    font-weight: bold;
    position: absolute; /* Position absolutely within the dot */
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust for exact centering */
    pointer-events: none; /* Ignore pointer events */
  }
</style>