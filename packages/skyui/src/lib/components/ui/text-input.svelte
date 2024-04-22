<script lang="ts">
  export let label: string
  export let name: string
  export let width: string = '100%'
  export let placeholder: string = ''

  import { HSLColor } from '$lib/types/hsl-color.js';

  let style: string = `width: ${width};`
  
  function highlightAction(element: HTMLInputElement) {
    element.addEventListener('focus', (event: FocusEvent) => {
      element.style.backgroundColor = new HSLColor(218, 85, 92).toString() as string;
      const label = element.nextElementSibling as HTMLDivElement;
      label.style.backgroundColor = new HSLColor(218, 85, 43).toString() as string;
      label.style.color = 'white';
    });

    element.addEventListener('blur', (event: FocusEvent) => {
      const label = element.nextElementSibling as HTMLDivElement;
      if (!element.value) {
        element.style.backgroundColor = 'white';
        label.style.backgroundColor = 'white';
        label.style.color = 'black';
      }
    });
  }
</script>

<div class="input-text-component">
  <div class="form-control">
    <input {style} type="text" name={name} {placeholder} use:highlightAction />
    <div class="label">{label}</div>
  </div>
</div>



<style>
  .input-text-component {
    /* margin-bottom: 2rem; */
  } 

  .label {
    font-size: 0.6rem;
    position: absolute;
    background-color: white;
    top: -14px;
    left: 12px;
    padding: 0 12px 0 12px;
    border: 2px solid hsl(218, 85%, 43%);
    border-radius: 4px;
    color: hsl(218, 85%, 43%);
  }

  input {
    /* height: 2rem; */
    width: 400px;
    border: 2px solid hsl(218, 85%, 43%);
    border-radius: 8px;
    padding: 0 12px 0 12px;
    font-size: .85rem;
  }

  input::placeholder {
    color: hsl(218, 85%, 80%);
  }

  
  .form-control {
    position: relative;
    /* margin-bottom: 1rem; */
    /* min-height: 2rem; */
    min-width: 100%;
  }

  
</style>
