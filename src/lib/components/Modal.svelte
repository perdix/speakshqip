<script>
    export let show = false;
    export let onClose = () => {};
  </script>
  
  {#if show}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-5 max-w-md w-full">
        <button class="absolute top-2 right-2 text-gray-500" on:click={onClose}>×</button>
        <slot />
      </div>
    </div>
  {/if}
  