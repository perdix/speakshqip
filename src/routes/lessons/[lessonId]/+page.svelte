<script lang="js">
  import QuizOptionBox from "../../../lib/components/QuizOptionBox.svelte";

  export let data;

  let currentQuestionIndex = 0;
  let userAnswer = null;
  let showNextQuestion = false;
  let correctAnswerClicked = false;

  function checkQuizAnwer(option, correctAnswer) {
    userAnswer = option;
    if (option === correctAnswer) {
      correctAnswerClicked = true;
      showNextQuestion = true;
    } else {
      alert("Wrong!");
    }
  }
</script>

{#each data.infoCards as info}
  <h1>
    {info.informationHeader}
  </h1>
  <p>
    {info.informationBody}
  </p>
{/each}

{#each data.examples as examples}
  <h1>
    {examples.exampleHeader}
  </h1>
  <p>
    {examples.exampleALB}
    {examples.exampleENG}
  </p>
{/each}

{#each data.tests as tests}
  <p>
    {tests.testInfo}
  </p>
{/each}

{#each data.questions as questions}
  <h1>
    {questions.questionInfo}
  </h1>
  <p>
    {questions.op1}
    {questions.op2}
    {questions.op3}
    {questions.op4}
  </p>
{/each}

{#if currentQuestionIndex < data.questions.length}
  <h2 class="text-4xl font-semibold m-3">
    {data.questions[currentQuestionIndex].questionInfo}
  </h2>
  <div class="m-3 grid gap-2 md:grid-cols-2">
    {#each [data.questions[currentQuestionIndex].op1, data.questions[currentQuestionIndex].op2, data.questions[currentQuestionIndex].op3, data.questions[currentQuestionIndex].op4] as option}
      <div
        on:click={() =>
          checkQuizAnwer(
            option,
            data.questions[currentQuestionIndex].correctAnswer
          )}
      >
        <div
          class={`${
            option === data.questions[currentQuestionIndex].correctAnswer &&
            correctAnswerClicked
              ? "bg-green-300"
              : "bg-zinc-400"
          } font-semibold h-48 rounded-md flex justify-center items-center text-white cursor-pointer transition-all hover:opacity-95 md:flex-col md:w-full`}
        >
          {option}
        </div>
      </div>
    {/each}
  </div>
  {#if showNextQuestion}
    {#if currentQuestionIndex < data.questions.length - 1}
      <button
        class="bg-red-500 w-40 h-11 m-3 text-white rounded-md"
        on:click={() => {
          currentQuestionIndex++;
          userAnswer = null;
          showNextQuestion = false;
          correctAnswerClicked = false;
        }}
      >
        Next Question
      </button>
    {:else}
      <button class="bg-red-500 w-40 h-11 m-3 text-white rounded-md">
        Finish Quiz
      </button>
    {/if}
  {/if}
{:else}
  <h2 class="m-96">Quiz Complete</h2>
{/if}
