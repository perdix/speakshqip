<script>
  export let lessonName;
  export let lessonDescription;
  export let lessonID;
</script>

<div
  class="flex justify-start items-center ml-5 mr-5 mt-6 mb-6 rounded-lg cursor-pointer flex-col p-5 transition-all hover:bg-zinc-50 md:flex-row focus:scale-50"
>
  <div class="banner w-full md:w-96">
    <div class=" h-60 w-full bg-cd-red rounded-lg">Thumbnail</div>
    <h1 class=" font-bold mt-3">Lesson: {lessonName}</h1>
  </div>
  <div class="description mt-9 md:-mt-12 md:ml-5">
    <p>
      {lessonDescription}
    </p>
    <a href="/lessons/{lessonID}">Play</a>
  </div>
</div>
