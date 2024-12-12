<script>
    import Alphabet from "../../lib/components/Alphabet.svelte";

    export let data;
</script>

<div class="flex justify-center items-center min-h-screen py-10">
  <div class="grid grid-cols-9 gap-2">
    {#each data.alphabetData as alphabet}
      <Alphabet letterUpperCase={alphabet.uppercase_letter} letterLowerCase={alphabet.lowercase_letter} />
    {/each}
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
