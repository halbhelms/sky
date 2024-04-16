<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- #region TS -->
<script lang="ts">
  import type { ContextMenuAction } from "$lib/types/context-menu-action.ts";
  import SvgIcon from "$lib/components/ui/svg-icon.svelte";

  export let actions: ContextMenuAction[];
  export let id: number;

  let visible = false;
  function showContextMenu() {
    console.log("showContextMenu firing");
    visible = true;
  }


  function closeIfOutside(node: HTMLElement) {
    function handleOutsideClick(event: MouseEvent) {
      if (!node.contains(event.target as Node)) {
        visible = false;
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return {
      destroy() {
        document.removeEventListener("click", handleOutsideClick);
      },
    };
  }

  function clickOnItem(id: number, fnc: Function) {
    fnc(id);
    visible = false;
    console.log("should have set visible to false");
  }
</script>

<!-- #endregion -->

<!-- #region HTML -->
<section class="context-menu-component" use:closeIfOutside>
  <div id="opener" on:click={showContextMenu}>
    ...
    <div class="menu" class:visible>
      {#each actions as { label, icon, fnc }, i}
        <div
          class="item"
          on:click={(e) => {
            e.stopPropagation();
            clickOnItem(id, fnc);
            visible = false;
          }}
        >
          <div class="label">{label}</div>
          {#if icon}
            <SvgIcon iconName={icon} width="16" height="16" fill="#202020" />
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- #endregion -->

<!-- #region CSS -->
<style>
  .menu {
    position: absolute;
    display: none;
    top: 1rem;
    left: 1rem;
    width: 180px;
    background-color: #f4f4f6;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 0.5rem;
  }

  #opener {
    cursor: pointer;
  }

  .item {
    display: grid;
    grid-template-columns: 1fr 30px;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
  }

  .item:hover {
    background-color: #e5e5e5;
  }

  .visible {
    display: block;
  }
</style>
<!-- #endregion -->
