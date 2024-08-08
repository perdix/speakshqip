<script>
  export let unitName;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<div
  class="unitComponent cursor-pointer flex flex-col h-96 w-full transition-all mr-auto ml-auto md:w-auto hover:bg-slate-100 p-2 rounded-2xl"
>
  <div class="bg-slate-500 h-full w-full rounded-xl"></div>
  <div class="flex justify-between mt-3 mb-3">
    <h4>{unitName}</h4>
    <p class="font-light text-zinc-600 cursor-pointer">
      View <i class="fa-solid fa-arrow-right font-light"></i>
    </p>
  </div>
</div>
