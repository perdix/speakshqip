<script lang="js">
  import { slide } from "svelte/transition";
  import LessonRow from "../../lib/components/LessonRow.svelte";
  import SidebarLessons from "../../lib/components/SidebarLessons.svelte";
  import LessonRowInfo from "../../lib/components/LessonRowInfo.svelte";
  import LearnHeader from "../../lib/components/LearnHeader.svelte";
  import LockedLessonRow from "../../lib/components/LockedLesson.svelte";
  export let data;

  let selectedLessonId = null;

  function toggleLesson(id) {
    selectedLessonId = id === selectedLessonId ? null : id;
  }

  let isPulsing = false;
  function handleClick() {
    isPulsing = true;
    setTimeout(() => (isPulsing = false), 200);
  }

  // Helper to get only lessons for a specific unit
  function lessonsForUnit(unitId) {
    return data.lesson.filter(lesson => lesson.unitId === unitId);
  }
</script>

<h1 class="text-6xl font-bold m-9 text-cd-black text-center">
  Learn <i class="fa-brands fa-leanpub ml-2 text-cd-red"></i>
</h1>

{#each data.unit as unit}
  <div class="p-4 ml-auto mr-auto w-full flex justify-center items-center">
    <LearnHeader unitDescription={unit.desc} unitName={unit.name} />
  </div>

  <div class="flex flex-col h-full rounded-md p-4">
    {#each lessonsForUnit(unit.id) as lesson}
      {#if lesson.count <= data.lastCompletedCount + 1}
        <div on:click={() => toggleLesson(lesson.id)}>
          <a href="#{lesson.id}">
            <SidebarLessons lessonName={lesson.name} />
          </a>
        </div>

        {#if selectedLessonId === lesson.id}
          <div class="md:w-w-95/100 md:ml-3 md:flex md:justify-between md:items-center">
            <a
              href="lessons/{lesson.id}"
              on:click={handleClick}
              class="md:flex md:justify-between md:items-center md:w-full overflow-hidden {isPulsing ? 'pulse' : ''}"
              transition:slide={{ y: -50, duration: 300 }}
            >
              <LessonRow image={lesson.image} />
              <LessonRowInfo
                title={lesson.name}
                description={lesson.description}
                id={lesson.id}
                xp={lesson.xp}
              />
            </a>
          </div>
        {/if}
      {:else}
        <LockedLessonRow lessonName={lesson.name} />
      {/if}
    {/each}
  </div>
{/each}

<style>
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.99);
    }
  }

  .pulse {
    animation: pulse 0.15s ease-in-out;
  }
</style>
