<script>
  import { enhance } from "$app/forms";
  import TableHead from "../../lib/components/TableHead.svelte";

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

  const editRow = (index, details) => {
    editableRow = index;
    updatedDetails = { ...details };
  };

  const submitRow = async (index) => {
    console.log("Updated Details:", updatedDetails);

    const response = await fetch("/usereditor", {
      method: "POST",
      body: JSON.stringify({ updatedDetails }),
    });
    console.log(JSON.stringify({ updatedDetails }));

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
    User Editor
    <i class="fas fa-users mr-2 ml-2 text-cd-red"></i>
  </h1>
  <p class=" text-xl md:text-2xl md:font-bold mt-9">
    Edit the details of the users in the system.
  </p>
</div>

<table
  class="table-auto w-full border-collapse border border-gray-300 m-3 shadow-lg rounded-lg overflow-hidden"
>
  <TableHead />
  <tbody class="bg-white">
    {#each data.userDetails as details, index}
      {#if details.username != null}
        <tr class="even:bg-gray-100 hover:bg-gray-200 transition-colors">
          <td class="border border-gray-300 px-4 py-2">
            {#if editableRow === index}
              <input
                type="text"
                bind:value={updatedDetails.username}
                class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            {:else}
              {details.username}
            {/if}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {#if editableRow === index}
              <input
                type="text"
                bind:value={updatedDetails.bio}
                class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            {:else}
              {details.bio}
            {/if}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {#if editableRow === index}
              <input
                type="number"
                bind:value={updatedDetails.age}
                class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            {:else}
              {details.age}
            {/if}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {#if editableRow === index}
              <input
                type="text"
                bind:value={updatedDetails.nationality}
                class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            {:else}
              {details.nationality}
            {/if}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {#if editableRow === index}
              <input
                type="text"
                bind:value={updatedDetails.level}
                class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            {:else}
              {details.level}
            {/if}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {#if editableRow === index}
              <input
                type="text"
                bind:value={updatedDetails.role}
                class="border border-gray-300 px-2 py-1 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            {:else}
              {details.role}
            {/if}
          </td>
          <td class="border border-gray-300 p-1 pr-0">
            {#if editableRow === index}
              <button
                on:click={() => submitRow(index)}
                class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
              >
                Submit
              </button>
            {:else}
              <button
                on:click={() => editRow(index, details)}
                class="bg-cd-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Edit
              </button>
            {/if}
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>

<div
  class="pagination-controls flex justify-center items-center mt-4 space-x-2 mb-4"
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
    class="  px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition duration-200"
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
