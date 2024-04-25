<script>
    import { enhance } from "$app/forms";
    export let data;
    export let form;
</script>

<h1>Test</h1>

{data.session.user.id}

<form method="POST" action="?/saveWord" use:enhance>
    <input type="text" name="word_en" placeholder="Word in English" />
    <input type="text" name="word_al" placeholder="Word in Albanian" />
    <input type="hidden" name="user_id" value={data.session.user.id} />
    <button type="submit">Save</button>
</form>

{#if form?.success}
    {form.message}
{/if}
