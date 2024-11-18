<script>
  export let lessonDescription;
  export let lessonID;
  export let image;
</script>

<div
  class="w-w-95/100 ml-3 bg-zinc-800 text-white pb-7 flex justify-center items-center rounded-lg cursor-pointer flex-col mb-5 transition-all hover:opacity-95"
  style="background-image: url(graphics/{image});"
>
  <div class="banner mt-0 w-full">
    <div class=" h-60 w-full bg-cd-red rounded-md"></div>
    <div>
      <div class=" mt-3">
        <p class=" mb-6 ml-3 w-2/3">
          {lessonDescription}
        </p>
        <a
          class=" p-3 ml-3 h-7 w-32 bg-cd-red rounded-md text-white font-semibold"
          href="/lessons/{lessonID}">Start</a
        >
      </div>
    </div>
  </div>
</div>
