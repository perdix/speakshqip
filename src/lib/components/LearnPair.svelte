<script>
  export let word;
  export let translation;
</script>

<div class=" flex justify-between items-center w-80 mt-4">
  <h1 class=" p-2 bg-slate-500 rounded-md text-white">{word}</h1>
  <div class=" p-1 rounded-md w-28 bg-slate-500"></div>
  <p class=" p-2 bg-slate-500 rounded-md text-white">{translation}</p>
</div>
