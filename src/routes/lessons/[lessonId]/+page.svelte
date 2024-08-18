<script lang="js">
  export let data;

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