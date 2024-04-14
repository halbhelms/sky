<script lang="ts">
  export let text: string = `Button`;
type ExclusiveProps = {
      primary: boolean;
      danger: false;
      warning: false;
  } | {
      primary: false;
      danger: boolean;
      warning: false;
  } | {
      primary: false;
      danger: false;
      warning: boolean;
  } | {
      primary: false;
      danger: false;
      warning: false;
  };

  // Use the defined type for the component props
  export let primary: ExclusiveProps['primary'] = false;
  export let danger: ExclusiveProps['danger'] = false;
  export let warning: ExclusiveProps['warning'] = false;
</script>

<button class="button-component" class:primary class:danger class:warning>
  {text}
</button>

<style>
  .primary {
    background-color: #007bff;
    color: white;
  }

  .danger {
    background-color: #dc3545;
    color: white;
  }

  .warning {
    background-color: #ffc107;
    color: white;
  }
</style>