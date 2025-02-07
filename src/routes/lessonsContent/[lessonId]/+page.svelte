<script>
  import { onMount } from "svelte";
  export let data;

  let editableRow = null;
  let updatedDetails = {};
  let showModal = false;
  let newItem = {};
  let selectedTable = "";

  const { infoCards, examples, tests, questions, error } = data;

  const editRow = (index, item) => {
    editableRow = index;
    updatedDetails = { ...item };
  };

  const submitRow = async (index, table) => {
    console.log(`Updating ${table}:`, updatedDetails);

    const response = await fetch(window.location.pathname, {
      method: "POST",
      body: JSON.stringify({ table, updatedDetails }),
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

  const openModal = (table, fields) => {
    selectedTable = table;
    newItem = fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {});
    showModal = true;
  };

  const addRow = async () => {
    const response = await fetch(window.location.pathname, {
      method: "POST",
      body: JSON.stringify({ table: selectedTable.toLowerCase(), updatedDetails: newItem }),
    });

    if (response.ok) {
      console.log("Row added successfully");
      showModal = false;
      window.location.reload();
    } else {
      console.error("Failed to add row");
    }
  };
</script>

{#if error}
  <div class="text-red-500 font-bold">Error: {error}</div>
{:else}
  <div class="tables-container">
    {#each [
      { data: infoCards, name: "InfoCards", fields: ["id", "informationHeader", "informationBody", "lessonId"] },
      { data: examples, name: "Examples", fields: ["id", "exampleHeader", "exampleALB", "exampleENG"] },
      { data: tests, name: "Tests", fields: ["id", "testInfo", "questionCount", "lessonId"] },
      { data: questions, name: "Questions", fields: ["id", "questionInfo", "op1", "op2", "op3", "op4", "ans", "testId"] }
    ] as { data, name, fields }}
      <div class="table-container mb-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-bold text-xl">{name}</h2>
          <button
            on:click={() => openModal(name, fields)}
            class="bg-cd-red text-white px-4 py-2 rounded"
          >
            Add New {name}
          </button>
        </div>

        <table class="table-auto w-full border-collapse border border-gray-300">
          <thead class="bg-cd-red text-white uppercase text-sm font-semibold">
            <tr>
              {#each fields as field}
                <th class="border border-gray-300 px-4 py-2">{field}</th>
              {/each}
              <th class="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            {#each data as item, index}
              <tr class="even:bg-gray-100 hover:bg-gray-200 transition-colors">
                {#each fields as field}
                  <td class="border border-gray-300 px-4 py-2">
                    {#if editableRow === index}
                      <input
                        type="text"
                        bind:value={updatedDetails[field]}
                        class="border border-gray-300 px-2 py-1 w-full"
                      />
                    {:else}
                      {item[field]}
                    {/if}
                  </td>
                {/each}
                <td class="border border-gray-300 px-4 py-2">
                  <div class="flex space-x-2">
                    {#if editableRow === index}
                      <button
                        on:click={() => submitRow(index, name.toLowerCase())}
                        class="bg-cd-red text-white px-4 py-2 rounded"
                      >
                        Submit
                      </button>
                    {:else}
                      <button
                        on:click={() => editRow(index, item)}
                        class="bg-cd-red text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>
                    {/if}
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/each}
  </div>
{/if}

{#if showModal}
  <div class="modal">
    <div class="modal-content">
      <h2 class="text-xl font-bold mb-4">Add New {selectedTable}</h2>
      {#each Object.keys(newItem) as field}
        <div class="mb-2">
          <label class="block font-semibold">{field}</label>
          <input type="text" bind:value={newItem[field]} class="border px-2 py-1 w-full" />
        </div>
      {/each}
      <div class="flex space-x-4 mt-4">
        <button on:click={addRow} class="bg-cd-red text-white px-4 py-2 rounded">Submit</button>
        <button on:click={() => (showModal = false)} class="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 5px;
    width: 400px;
  }
</style>
