<script>
  import { enhance } from "$app/forms";
  import TableHeadLessons from "../../lib/components/TableHeadLessons.svelte";

  export let data;

  let currentPage = data.page;
  const totalPages = Math.ceil(data.total / data.limit);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("page", page);
      window.location.search = searchParams.toString();
    }
  };

  let editableRow = null;
  let updatedDetails = {};

  const editRow = (index, lesson) => {
    editableRow = index;
    updatedDetails = { ...lesson };
  };

  const submitRow = async (index) => {
    console.log("Updated Details:", updatedDetails);

    const response = await fetch("/lessonseditor", {
      method: "POST",
      body: JSON.stringify({ updatedDetails }),
    });

    if (response.ok) {
      console.log("Update successful");
      window.location.reload();
    } else {
      console.error("Update failed");
    }

    editableRow = null;
    updatedDetails = {};
  };
</script>

<div class="m-3">
  <h1 class="text-4xl md:text-6xl font-bold mt-9 text-cd-black">
    Lessons Editor
    <i class="fas fa-book mr-2 ml-2 text-cd-red"></i>
  </h1>
  <p class="text-xl md:text-2xl md:font-bold mt-9">
    Edit the details of the lessons in the system.
  </p>
</div>

<table
  class="table-auto w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden m-3"
>
  <TableHeadLessons />
  <tbody class="bg-white">
    {#each data.lessons as lesson, index}
      <tr class="even:bg-gray-100 hover:bg-gray-200 transition-colors">
        <td class="border border-gray-300 px-4 py-2">
          {#if editableRow === index}
            <input
              type="text"
              bind:value={updatedDetails.name}
              class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          {:else}
            {lesson.name}
          {/if}
        </td>
        <td class="border border-gray-300 px-4 py-2">
          {#if editableRow === index}
            <input
              type="text"
              bind:value={updatedDetails.desc}
              class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          {:else}
            {lesson.desc}
          {/if}
        </td>
        <td class="border border-gray-300 px-4 py-2">
          {#if editableRow === index}
            <input
              type="number"
              bind:value={updatedDetails.count}
              class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          {:else}
            {lesson.count}
          {/if}
        </td>
        <td class="border border-gray-300 px-4 py-2">
          {#if editableRow === index}
            <input
              type="number"
              bind:value={updatedDetails.xp}
              class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          {:else}
            {lesson.xp}
          {/if}
        </td>
        <td class="border border-gray-300 px-4 py-2">
          {#if editableRow === index}
            <input
              type="text"
              bind:value={updatedDetails.image}
              class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          {:else}
            <img
              src={lesson.image}
              class="md:h-48 rounded-lg shadow-sm"
              alt="image"
            />
          {/if}
        </td>
        <td class="border border-gray-300 px-4 py-2">
          <div class="flex space-x-2">
            {#if editableRow === index}
              <button
                on:click={() => submitRow(index)}
                class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 shadow-md"
              >
                Submit
              </button>
            {:else}
              <button
                on:click={() => editRow(index, lesson)}
                class="bg-cd-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 shadow-md"
              >
                Edit Details
              </button>
            {/if}
            <button
              class="bg-cd-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 shadow-md"
            >
              <a href="/lessonsContent/{lesson.id}"> Edit Content </a>
            </button>
          </div>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<div
  class="pagination-controls flex justify-center items-center mt-4 space-x-2 mb-3"
>
  <button
    on:click={() => goToPage(currentPage - 1)}
    class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition duration-200"
    disabled={currentPage === 1}
  >
    Previous
  </button>

  {#each Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1) as page}
    <button
      class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all shadow-md duration-200 {currentPage ===
      page
        ? 'bg-cd-red text-white'
        : 'bg-white'}"
      on:click={() => goToPage(page)}
    >
      {page}
    </button>
  {/each}

  <button
    on:click={() => goToPage(currentPage + 1)}
    class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition duration-200"
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
