<script lang="js">
  export let data;

  let questions = [
    {
      question: "ii",
      options: ["si je", "mirembrema", "cfare po ben", "ahaha"],
      answer: "si je",
    },
    {
      question: "How is Enio?",
      options: ["very good", "very bad", "ignore", "ahaha"],
      answer: "very good",
    },
    {
      question: "How is he?",
      options: ["Si eshte ajo", "Si eshte ai", "Prit", "ahaha"],
      answer: "Si eshte ai",
    },
    {
      question: "Who is he",
      options: ["Kush eshte ajo", "Kush eshte ai", "Prit", "ahaha"],
      answer: "Kush eshte ai",
    },
  ];

  let currentQuestionIndex = 0;
  let userAnswer = null;
  let showNextQuestion = false;
  let correctAnswerClicked = false;

  function checkQuizAnwer(option) {
    userAnswer = option;
    if (option === questions[currentQuestionIndex].answer) {
      correctAnswerClicked = true;
      showNextQuestion = true;
    } else {
      alert("Wrong!");
    }
  }
</script>

<div class="flex flex-col md:w-3/5 ml-auto mr-auto">
  {#if currentQuestionIndex < questions.length}
    <h2 class="text-4xl font-semibold m-3">
      {questions[currentQuestionIndex].question}
    </h2>
    <div class="m-3 grid gap-2 md:grid-cols-2">
      {#each questions[currentQuestionIndex].options as option}
        <div on:click={() => checkQuizAnwer(option)}>
          <div
            class={`${
              option === questions[currentQuestionIndex].answer &&
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
      <button
        class="bg-red-500 w-40 h-11 m-3 text-white rounded-md"
        on:click={() => {
          currentQuestionIndex++;
          userAnswer = null;
          showNextQuestion = false;
          correctAnswerClicked = false;
        }}>Next Question</button
      >
    {/if}
  {:else}
    <h2 class="m-96">Quiz Complete</h2>
  {/if}
</div>
