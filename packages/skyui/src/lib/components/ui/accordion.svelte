<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  export let title: string
  
  let open: boolean = false

  function toggleItem() {
      open = !open
  }
</script>
<!-- #endregion -->


<!-- #region HTML -->
<div class="accordion">
  <div class="item">
    <div class="title" on:click={() => toggleItem()}>
      {title}
    </div>
    
    <div id="content" class={`${open ? 'open' : ''}`}>
      <slot></slot>
    </div>
  </div>
</div>


<style>
    .accordion {
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .title {
        padding: 10px;
        background: #f0f0f0;
        cursor: pointer;
        user-select: none;
    }
    
    /* .open {
        display: block;
    } */

    #content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-in-out;
    }

    #content.open {
      max-height: 500px;
    }

    .closed {
        display: none;
    }
</style>
