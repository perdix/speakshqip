<script>
    export let data
</script>

{#each data.userDetails as user}
    <p>{user.username}</p>
    <p>{user.bio}</p>
    <p>{user.level}</p>
    <p>{user.xp}</p>
    <p>{user.age}</p>
    <p>{user.nationality}</p>





{/each}