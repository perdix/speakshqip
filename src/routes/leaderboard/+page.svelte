<script>
    export let data;
  </script>
  
  <div>
    <h1>Leaderboard</h1>
      <ul>
        {#each data.leaderboard as user, index}
          <li>
            <strong>{index + 1}. {user.username}</strong> - {user.xp} XP
          </li>
        {/each}
      </ul>

  </div>
  