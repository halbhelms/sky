<script>
  import Stub from '$lib/app-ui/studly-stub.svelte';
  export let data;
  const { title, tasks, stubImage } = data;
</script>

<Stub {title} {tasks} {stubImage}/>