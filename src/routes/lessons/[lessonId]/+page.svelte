<script lang="js">
  export let data;

  let currentInfoCardIndex = 0; // Tracks the current info card
  let currentExampleIndex = 0; // Tracks the current example
  let showExamples = false; // Controls when to show examples
  let showQuiz = false; // Controls when to show quiz
  let currentQuestionIndex = 0; // Tracks the current quiz question
  let userAnswer = null;
  let showNextQuestion = false;

  function showNextInfoCard() {
    if (currentInfoCardIndex < data.infoCards.length - 1) {
      currentInfoCardIndex++; // Move to next info card
    } else {
      showExamples = true; // When done with info cards, show examples
    }
  }

  function showNextExample() {
    if (currentExampleIndex < data.examples.length - 1) {
      currentExampleIndex++; // Move to next example
    } else {
      showQuiz = true; // When done with examples, show quiz
    }
  }
</script>

<!-- Info Cards -->
{#if !showExamples && !showQuiz}
  <div
    class=" flex flex-col justify-center items-center mt-6 bg-red-100 w-w-85/100 ml-auto mr-auto relative"
  >
    <div
      class="flex flex-col justify-center items-start m-4 bg-zinc-800 h-48 rounded-md w-full p-6 text-white relative md:h-96"
    >
      <div
        class=" bg-cd-red h-14 w-14 rounded-full absolute -left-5 -top-5 flex justify-center items-center"
      >
        <svg
          class=" fill-white h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 512"
          ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"
          /></svg
        >
      </div>

      <h1 class="text-2xl font-semibold text-left md:text-5xl">
        {data.infoCards[currentInfoCardIndex].informationHeader}
      </h1>
      <p class="mt-3 md:text-xl md:mt-10 md:w-w-80/100">
        {data.infoCards[currentInfoCardIndex].informationBody}
      </p>
    </div>
    <button
      class="bg-cd-red w-40 h-11 m-3 text-white rounded-md"
      on:click={showNextInfoCard}
    >
      {currentInfoCardIndex < data.infoCards.length - 1
        ? "Next Info"
        : "Go to Examples"}
    </button>
  </div>
{/if}

<!-- Examples Card -->
{#if showExamples && !showQuiz}
  <div
    class="flex flex-col justify-center items-center mt-6 bg-red-100 w-w-85/100 ml-auto mr-auto relative"
  >
    <div
      class="flex flex-col justify-center items-start m-4 bg-zinc-800 h-48 rounded-md w-full p-6 text-white relative md:h-96"
    >
      <div
        class=" bg-cd-red h-14 w-14 rounded-full absolute -left-5 -top-5 flex justify-center items-center"
      >
        <svg
          class=" fill-white h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
          /></svg
        >
      </div>
      <h1 class="text-3xl font-semibold text-left md:text-5xl">
        {data.examples[currentExampleIndex].exampleHeader}
      </h1>
      <p class="mt-3 md:text-xl md:mt-10 md:w-w-80/100">
        {data.examples[currentExampleIndex].exampleALB}
        <br />
        {data.examples[currentExampleIndex].exampleENG}
      </p>
    </div>
    <button
      class="bg-cd-red w-40 h-11 m-3 text-white rounded-md"
      on:click={showNextExample}
    >
      {currentExampleIndex < data.examples.length - 1
        ? "Next Example"
        : "Go to Quiz"}
    </button>
  </div>
{/if}

<!-- Quiz -->
{#if showQuiz}
  <div
    class="flex flex-col justify-center items-center mt-6 bg-red-100 w-w-85/100 ml-auto mr-auto relative md:w-w-60/100"
    id="quiz"
  >
    <h2 class="text-3xl font-semibold m-3">{data.tests[0].testInfo}</h2>
    {#if currentQuestionIndex < data.questions.length}
      <h2 class="text-xl font-semibold m-3">
        {data.questions[currentQuestionIndex].questionInfo}
      </h2>
      <div class="w-full m-3 grid gap-2 md:grid-cols-2">
        {#each [data.questions[currentQuestionIndex].op1, data.questions[currentQuestionIndex].op2, data.questions[currentQuestionIndex].op3, data.questions[currentQuestionIndex].op4] as option}
          <div
            on:click={() => {
              userAnswer = option;
              showNextQuestion = true;
            }}
          >
            <div
              class="bg-zinc-800 p-3 font-semibold h-48 w-full rounded-md flex justify-center items-center text-white cursor-pointer transition-all hover:opacity-95 md:flex-col md:w-full"
            >
              {option}
            </div>
          </div>
        {/each}
      </div>
      {#if showNextQuestion}
        {#if currentQuestionIndex < data.questions.length - 1}
          <button
            class="bg-cd-red w-40 h-11 m-3 text-white rounded-md"
            on:click={() => {
              currentQuestionIndex++;
              userAnswer = null;
              showNextQuestion = false;
            }}
          >
            Next Question
          </button>
        {:else}
          <button class="bg-cd-red w-40 h-11 m-3 text-white rounded-md">
            Finish Quiz
          </button>
        {/if}
      {/if}
    {:else}
      <h2 class="m-96">Quiz Complete</h2>
    {/if}
  </div>
{/if}
