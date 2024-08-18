<script>
  import QuizOptionTest from "../../lib/components/QuizOptionTest.svelte";

  let questions = [
    {
      question: "How are you?",
      options: ["si je", "mirembrema", "cfare po ben"],
      answer: "si je",
    },
    {
      question: "How is Enio?",
      options: ["very good", "very bad", "ignore"],
      answer: "very good",
    },
    {
      question: "How is he?",
      options: ["Si eshte ajo", "Si eshte ai", "Prit o ***"],
      answer: "Si eshte ai",
    },
  ];

  let currentQuestionIndex = 0;
  let userAnswer = null;
  let showNextQuestion = false;

  function checkQuizAnwer(option) {
    userAnswer = option;
    if (option === questions[currentQuestionIndex].answer) {
      showNextQuestion = true;
    } else {
      alert("Wrong!");
    }

    /* function nextQuestion() {
      currentQuestionIndex++;
      userAnswer = null;
      showNextQuestion = false;
    }
    */
  }
</script>

<!--
<div>
  <div
    class="p-8 bg-cd-red w-8 m-3 rounded-full cursor-pointer border-white border-2"
    id="pfp"
    on:click={toggleMenu}
  ></div>

  <div
    class="m-3 w-40 rounded-lg h-40 bg-slate-600 flex justify-start items-center"
    id="dropdownOptions"
  >
    <ul
      class="h-full w-full flex justify-around items-start flex-col transition-all"
    >
      <li
        class="hover:bg-slate-400 hover:cursor-pointer hover:transition-all h-1/3 w-full p-2 text-white relative flex justify-start items-center rounded-t-lg"
      >
        <a href="#" class="w-full h-full flex items-center">Test</a>
      </li>
      <li
        class="hover:bg-slate-400 hover:cursor-pointer hover:transition-all h-1/3 w-full p-2 text-white relative flex justify-start items-center"
      >
        <a href="#" class="w-full h-full flex items-center">Test</a>
      </li>
      <li
        class="hover:bg-slate-400 hover:cursor-pointer hover:transition-all h-1/3 w-full p-2 text-white relative flex justify-start items-center rounded-b-lg"
      >
        <a href="#" class="w-full h-full flex items-center">Log Out</a>
      </li>
    </ul>
  </div>
</div>
-->

<div>
  {#if currentQuestionIndex < questions.length}
    <h2 class="text-2xl m-3">{questions[currentQuestionIndex].question}</h2>
    <div>
      {#each questions[currentQuestionIndex].options as option}
        <div on:click={() => checkQuizAnwer(option)} class=" md:w-full md:flex">
          <div
            class=" bg-cd-red h-48 rounded-md flex justify-center items-center text-white m-2 cursor-pointer transition-all hover:opacity-95 md:w-1/2"
          >
            {option}
          </div>
        </div>
      {/each}
    </div>
    {#if showNextQuestion}
      <button
        on:click={() => {
          currentQuestionIndex++;
          userAnswer = null;
          showNextQuestion = false;
        }}>Next Question</button
      >
    {/if}
  {:else}
    <h2>Quiz Complete</h2>
  {/if}
</div>
