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
</script>

<table class="table-auto w-full border-collapse border border-gray-300">
    <TableHeadLessons/>
    <tbody class="bg-white">
    {#each data.lessons as lesson}
        <tr class="even:bg-gray-100 hover:bg-gray-200 transition-colors">
            <td class="border border-gray-300 px-4 py-2">{lesson.name}</td>
            <td class="border border-gray-300 px-4 py-2">{lesson.desc}</td>
            <td class="border border-gray-300 px-4 py-2">{lesson.count}</td>
            <td class="border border-gray-300 px-4 py-2">{lesson.xp}</td>
            <td class="border border-gray-300 px-4 py-2"><img src={lesson.image} class=" md:h-48" alt="image"></td>
        </tr>
    {/each}
    </tbody>    
</table>

<div class="pagination-controls flex justify-center items-center mt-4 space-x-2">
    <button 
      on:click={() => goToPage(currentPage - 1)} 
      class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={currentPage === 1}>
      Previous
    </button>
  
    {#each Array(totalPages).fill(0).map((_, i) => i + 1) as page}
      <button 
        class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all {currentPage === page ? 'bg-red-500 text-white' : 'bg-white'}" 
        on:click={() => goToPage(page)}>
        {page}
      </button>
    {/each}
  
    <button 
      on:click={() => goToPage(currentPage + 1)} 
      class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={currentPage === totalPages}>
      Next
    </button>
</div>
