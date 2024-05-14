<script>
  import LessonRow from "../../lib/components/LessonRow.svelte";

  let lessonCard = [
    { lessonName: "Less1" },
    { lessonName: "Less2" },
    { lessonName: "Less3" },
    { lessonName: "Less4" },
    { lessonName: "Less5" },
  ];
</script>

<h1 class="text-6xl font-bold m-9 text-cd-black">Lessons</h1>

{#each lessonCard as lesson, i}
  <LessonRow key={i} lessonName={lesson.lessonName} />
{/each}
