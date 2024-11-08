<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";

  export let errorMessage;
  console.log("modal started");
  function closeModal() {
    console.log("modal started");

    document.getElementById("modal").style.display = "none"; 
  }
</script>
<div id="modal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
<div
  
  class=" z-50h-64 w-80 ml-auto mr-auto border-2 border-t-cd-red rounded-lg bg-white text-cd-black m-6 flex flex-col justify-center items-center relative transition-all"
  style="border-top-width: 12px; z-index: 1;"
>
  <div class="flex justify-center items-center flex-col">
    <i class="fa-regular fa-circle-xmark text-6xl mb-3 text-cd-red mt-3"></i>
    <h1 class="font-bold text-3xl mb-8 text-cd-red text-center">
      An error occurred!
    </h1>
    <p class="text-center w-64 mb-3">{errorMessage}</p>
  </div>

  <button
    class="absolute top-1 right-1 mr-4 mt-4 fa-solid fa-xmark text-lg cursor-pointer"
    on:click={ closeModal }
  ></button>
</div>
</div>