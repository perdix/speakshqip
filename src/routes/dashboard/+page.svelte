<script>
  import DashboardCart from "../../lib/components/DashboardCart.svelte";

  export let data;

  console.log(data);
</script>

<!-- <h1>My dashboard</h1>

<h2>Hello {data.session.user.email}</h2>

<hr />

{#each data.words as word}
    <p>{word.word_en}</p>
{/each} -->

<div class="flex justify-center">
  <div class=" w-3/5 bg-red-300"></div>

  <div
    class="rounded-3xl border-2 border-cd-red mt-9 w-w-65/100"
    style="height: 450px;"
  ></div>
</div>

<div
  class="flex justify-center items-center flex-col mr-14 ml-14 mb-14 sm:flex-row sm:flex-wrap"
  style="width: 1fr;"
>
  {#each Array(3) as _, i}
    <DashboardCart key={i} />
  {/each}
</div>
