<script lang="js">
  export let data;

  let currentQuestionIndex = 0;
  let userAnswer = null;
  let showNextQuestion = false;

  /*
  function checkQuizAnwer(option, correctAnswer) {
    userAnswer = option;
    if (option === correctAnswer) {
      correctAnswerClicked = true;
      showNextQuestion = true;
    } else {
      alert("Wrong!");
    }
  }
  */
</script>

<!--Info Cards-->
<div
  class=" flex flex-col justify-center items-center mt-6 bg-red-100 w-w-85/100 ml-auto mr-auto relative md:flex-row"
>
  {#each data.infoCards as info}
    <div
      class=" flex flex-col justify-center items-start m-4 bg-zinc-800 h-48 rounded-md w-full p-6 text-white relative"
    >
      <div
        class=" bg-cd-red rounded-full h-14 w-14 absolute -left-5 -top-5 flex justify-center items-center"
      >
        <svg
          class=" h-5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 512"
          ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"
          /></svg
        >
      </div>
      <h1 class=" text-2xl font-semibold text-left">
        {info.informationHeader}
      </h1>
      <p class=" mt-3">
        {info.informationBody}
      </p>
    </div>
  {/each}
</div>

<!--Examples Card-->

<div
  class=" flex flex-col justify-center items-center mt-6 bg-red-100 w-w-85/100 ml-auto mr-auto relative md:flex-row"
>
  {#each data.examples as examples}
    <div
      class=" flex flex-col justify-center items-start m-4 bg-zinc-800 h-48 rounded-md w-full p-6 text-white relative"
    >
      <div
        class=" bg-cd-red rounded-full h-14 w-14 absolute -left-5 -top-5 flex justify-center items-center"
      >
        <svg
          class=" h-5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"
          /></svg
        >
      </div>
      <h1 class=" text-3xl font-semibold text-left">
        {examples.exampleHeader}
      </h1>
      <p class=" mt-3">
        {examples.exampleALB}
        <br />
        {examples.exampleENG}
      </p>
    </div>
    <div class=" flex w-full m-7">
      <div
        class="  flex flex-col justify-center items-center bg-zinc-800 h-48 rounded-md w-full cursor-pointer p-6 text-white relative"
      >
        <svg
          class=" fill-white h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
          /></svg
        >
      </div>
      <div
        class="cursor-pointer ml-2 fill-white flex flex-col justify-center items-center bg-zinc-800 h-48 rounded-md w-full p-6 text-white relative"
      >
        <svg
          class=" fill-white h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
          /></svg
        >
      </div>
    </div>
  {/each}
</div>

<!--Quiz-->
{#each data.tests as tests}
  <div
    class=" flex flex-col justify-center items-center mt-6 bg-red-100 w-w-85/100 ml-auto mr-auto relative md:w-w-60/100"
    id="quiz"
  >
    <h2 class="text-3xl font-semibold m-3">
      {tests.testInfo}
    </h2>
    {#if currentQuestionIndex < data.questions.length}
      <h2 class="text-xl font-semibold m-3">
        {data.questions[currentQuestionIndex].questionInfo}
      </h2>
      <div class=" w-full m-3 grid gap-2 md:grid-cols-2">
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
              userAnswer = null; // Reset user answer for the next question
              showNextQuestion = false; // Hide the next button for the new question
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
{/each}
