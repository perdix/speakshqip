<script>
    export let data;
  
    let editableRow = null;
    let updatedDetails = {};
    const { infoCards, examples, tests, questions, error } = data;
  
    const editRow = (index, item) => {
      editableRow = index;
      updatedDetails = { ...item };
    };
  
    const submitRow = async (index, table) => {
      console.log(`Updated Details for ${table}:`, updatedDetails);
  
      const response = await fetch(`/${table}editor`, {
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
  
  {#if error}
    <div class="text-red-500 font-bold">Error: {error}</div>
  {:else}
    <div class="tables-container">
      {#each [
        { data: infoCards, name: "InfoCards", fields: ["id", "informationHeader", "informationBody", "lessonId"] },
        { data: examples, name: "Examples", fields: ["id", "exampleHeader", "exampleALB", "exampleENG"] },
        { data: tests, name: "Tests", fields: ["id", "testInfo","questionCount", "lessonId"] },
        { data: questions, name: "Questions", fields: ["id", "questionInfo","op1","op2","op3","op4","ans", "testId"] }
      ] as { data, name, fields }}
        <div class="table-container mb-8">
          <h2 class="font-bold text-xl mb-4">{name}</h2>
          <table class="table-auto w-full border-collapse border border-gray-300">
            <thead class="bg-cd-red">
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
                          class="bg-green-500 text-white px-4 py-2 rounded"
                        >
                          Submit
                        </button>
                      {:else}
                        <button
                          on:click={() => editRow(index, item)}
                          class="bg-blue-500 text-white px-4 py-2 rounded"
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
  
  <style>
    .tables-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  
    .table-container {
      margin-bottom: 2rem;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
  
    th, td {
      border: 1px solid #ddd;
      padding: 0.75rem;
      text-align: left;
    }
  
    th {
      background-color: #f9fafb;
      font-weight: bold;
      text-transform: capitalize;
    }
  
    tr:hover {
      background-color: #f5f5f5;
    }
  
    button {
      background-color: #ef4444;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: 0.875rem;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #dc2626;
    }
  
    button:disabled {
      background-color: #e5e5e5;
      color: #9ca3af;
      cursor: not-allowed;
    }
  
    .pagination-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
    }
  
    .pagination-controls button {
      margin: 0 0.25rem;
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      background-color: white;
      border-radius: 0.25rem;
      font-size: 0.875rem;
    }
  
    .pagination-controls button:hover {
      background-color: #f3f4f6;
    }
  
    .pagination-controls button:disabled {
      background-color: #e5e5e5;
      color: #9ca3af;
      cursor: not-allowed;
    }
  
    .pagination-controls button.active {
      background-color: #ef4444;
      color: white;
      border-color: #ef4444;
    }
  </style>
  