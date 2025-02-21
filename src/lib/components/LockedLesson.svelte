<script>
  export let lessonName;

  let isClicked = false;

  function toggleOpen() {
    isClicked = !isClicked;
  }
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div
  class=" w-w-95/100 h-14 bg-zinc-300 rounded-md ml-3 mt-1 flex justify-between items-center p-3 cursor-pointer hover:opacity-85 transition-all"
  on:click={toggleOpen}
>
  <h1 class="text-zinc-500">{lessonName}</h1>
  <i
    class="fa-solid fa-lock text-zinc-500 mr-6 transition-transform duration-300"
  ></i>
</div>
