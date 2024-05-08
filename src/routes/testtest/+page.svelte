<script>
  import ModalError from "../../lib/components/ModalError.svelte";

  let modalVisible = false;

  function openModal() {
    modalVisible = true;
  }

  function closeModal() {
    modalVisible = false;
    const backdrop = document.querySelector(".backdrop");
    backdrop.style.opacity = "0"; // Set opacity to 0 to make it invisible
    setTimeout(() => {
      backdrop.remove(); // Remove the backdrop from the DOM after a short delay
    }, 300); // Adjust the delay as needed to match the modal closing animation duration
  }
</script>

{#if modalVisible}
  <div
    class="backdrop fixed top-0 left-0 w-screen h-screen backdrop-blur-sm"
    style="z-index: 1000000;"
    on:click={closeModal}
  ></div>
  <ModalError on:close={closeModal} />
{/if}

<button on:click={openModal}>click me</button>
