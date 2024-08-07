<script>
  export let option;
</script>

<div
  class=" w-w-95/100 mr-auto ml-auto mb-5 flex flex-col md:w-w-60/100 lg:w-w-50/100"
>
  <h1 class=" m-2 text-5xl font-bold">What is the correct answer?</h1>
  <div class=" md:w-full md:flex">
    <div
      class=" bg-cd-red h-48 rounded-md flex justify-center items-center text-white m-2 cursor-pointer transition-all hover:opacity-95 md:w-1/2"
    >
      {option}
    </div>
    <div
      class=" bg-cd-black h-48 rounded-md flex justify-center items-center text-white m-2 cursor-pointer transition-all hover:opacity-95 md:w-1/2"
    >
      {option}
    </div>
  </div>
  <div class=" md:w-full md:flex">
    <div
      class=" bg-cd-black h-48 rounded-md flex justify-center items-center text-white m-2 cursor-pointer transition-all hover:opacity-95 md:w-1/2"
    >
      {option}
    </div>
    <div
      class=" bg-cd-red h-48 rounded-md flex justify-center items-center text-white m-2 cursor-pointer transition-all hover:opacity-95 md:w-1/2"
    >
      {option}
    </div>
  </div>
</div>
