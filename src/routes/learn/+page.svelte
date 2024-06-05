<script lang='js'>
  import LessonRow from "../../lib/components/LessonRow.svelte";
  export let data;

</script>

<h1 class="text-6xl font-bold m-9 text-cd-black">Learn</h1>
{#each data.unit as unit}
  <h1 class="text-3xl font-semibold m-9 text-cd-black">{unit.name}</h1>
  <h1 class="text-1xl font-semibold m-9 text-cd-black">{unit.desc}</h1>
  {#each data.lesson as lesson}
  
  <p></p>
    {#if lesson.unitId == unit.id}
  <LessonRow key={lesson.id} lessonName={lesson.name} lessonDescription={lesson.desc} lessonID = {lesson.id}/>
    {/if}
  {/each}
{/each}

