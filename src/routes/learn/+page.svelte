<script lang="js">
  import LessonRow from "../../lib/components/LessonRow.svelte";
  import SidebarLessons from "../../lib/components/SidebarLessons.svelte";
  export let data;

  let selectedLessonId = null;

  function toggleLesson(id) {
    selectedLessonId = id === selectedLessonId ? null : id;
  }
</script>

<h1 class="text-6xl font-bold m-9 text-cd-black">Learn</h1>
{#each data.unit as unit}
  <h1 class="text-3xl font-semibold m-9 text-cd-black">{unit.name}</h1>
  <h1 class="text-1xl font-semibold m-9 text-cd-black">{unit.desc}</h1>

  <div class="flex flex-col h-full rounded-md p-4">
    {#each data.lesson as lesson}
      <div on:click={() => toggleLesson(lesson.id)}>
        <a href="#{lesson.id}"><SidebarLessons lessonName={lesson.name} /></a>
      </div>
      {#if lesson.unitId == unit.id && selectedLessonId === lesson.id}
        <div class="mt-4">
          <LessonRow lessonDescription={lesson.desc} lessonID={lesson.id} />
        </div>
      {/if}
    {/each}
  </div>
{/each}
