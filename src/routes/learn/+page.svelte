<script lang="js">
  import { slide } from "svelte/transition";
  import LessonRow from "../../lib/components/LessonRow.svelte";
  import SidebarLessons from "../../lib/components/SidebarLessons.svelte";
  import LessonRowInfo from "../../lib/components/LessonRowInfo.svelte";
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
</script>

<h1 class="text-6xl font-bold m-9 text-cd-black">Learn</h1>
{#each data.unit as unit}
  <h1 class="text-3xl font-semibold m-9 text-cd-black">{unit.name}</h1>
  <h1 class="text-1xl font-semibold m-9 text-cd-black">{unit.desc}</h1>

  <div class="flex flex-col h-full rounded-md p-4">
    {#each data.lesson.sort((a, b) => a.count - b.count) as lesson}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={() => toggleLesson(lesson.id)}>
        <a href="#{lesson.id}">
          <SidebarLessons lessonName={lesson.name} />
        </a>
      </div>
      {#if lesson.unitId == unit.id && selectedLessonId === lesson.id}
        <div
          class=" md:w-w-95/100 md:ml-3 md:flex md:justify-between md:items-center"
        >
          <a
            href="lessons/{lesson.id}"
            on:click={handleClick}
            class=" md:flex md:justify-between md:items-center md:w-full overflow-hidden {isPulsing
              ? 'pulse'
              : ''}"
            transition:slide={{ y: -50, duration: 300 }}
          >
            <LessonRow image={lesson.image} />
            <LessonRowInfo
              title={lesson.name}
              description={lesson.desc}
              id={lesson.id}
              xp={lesson.xp}
            />
          </a>
        </div>
      {/if}
    {/each}
  </div>
{/each}

<style>
  @keyframes pulse {
    0%,
    100% {
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
