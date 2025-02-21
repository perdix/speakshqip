<script>
  export let progress;
  export let totalLessons;
  export let count;
  export let unitName;
  export let description;
  export let user;
  function getProgressMessage(progress) {
    if (progress < 25) return "Just getting started! Keep going! 🚀";
    if (progress < 50) return "Great job! You're making progress! 👏";
    if (progress < 75) return "You're more than halfway there! 🔥";
    if (progress < 100) return "Almost there! Keep pushing! 💪";
    return "Congratulations! You've completed this unit! 🎉";
  }
  let completedLessons = Math.floor((progress / 100) * totalLessons);
</script>

<div class="w-full mt-3 lg:mt-0 rounded-lg lg:ml-3 flex flex-col justify-start">
  <div class="text-4xl font-bold mb-6">Welcome, {user}</div>

  <div class="grid grid-cols-2 gap-3 mt-5">
    <a href="/vocabulary" class="h-full">
      <button
        class="w-full h-full border-2 rounded-lg flex justify-center p-7 items-center flex-col transition-all hover:bg-zinc-200"
      >
        <i class="fa-solid fa-book text-3xl text-zinc-400"></i>
        <p class="font-semibold text-zinc-400">Vocabulary</p>
        <p class="font-thin text-sm text-zinc-400">Click to view</p>
      </button>
    </a>
    <a href="/learn" class="h-full">
      <button
        class="w-full h-full border-2 rounded-lg flex justify-center p-7 items-center flex-col transition-all hover:bg-zinc-200"
      >
        <i class="fa-solid fa-book-open text-3xl text-zinc-400"></i>
        <p class="font-semibold text-zinc-400">Units</p>
        <p class="font-thin text-sm text-zinc-400">Click to view</p>
      </button>
    </a>
    <a href="/alphabet" class="h-full">
      <button
        class="w-full h-full border-2 rounded-lg flex justify-center p-7 items-center flex-col transition-all hover:bg-zinc-200"
      >
        <i class="fa-solid fa-font text-3xl text-zinc-400"></i>
        <p class="font-semibold text-zinc-400">Alphabet</p>
        <p class="font-thin text-sm text-zinc-400">Click to view</p>
      </button>
    </a>
    <a href="/numbers" class="h-full">
      <button
        class="w-full h-full border-2 rounded-lg flex justify-center p-7 items-center flex-col transition-all hover:bg-zinc-200"
      >
        <i class="fa-solid fa-arrow-up-9-1 text-3xl text-zinc-400"></i>
        <p class="font-semibold text-zinc-400">Numbers</p>
        <p class="font-thin text-sm text-zinc-400">Click to view</p>
      </button>
    </a>
  </div>
  <div class="mt-5 p-6 border-2 border-gray-300 bg-white rounded-lg">
    <div class=" flex flex-col md:justify-between md:items-center md:flex-row">
      <h2 class="text-xl font-bold mb-3 text-gray-800">
        Your Journey in <span class="text-cd-red">SpeakShqip</span>
      </h2>
      <a href="#" class="bg-cd-red text-white rounded-md text-center p-2"
        >Keep going</a
      >
    </div>

    <h2 class="text-lg font-semibold mb-3 text-red-600">
      Unit {count}: {unitName}
    </h2>

    <div class="relative flex items-center mt-3">
      <div
        class="absolute top-1/2 left-0 w-full h-1 rounded bg-gray-300 -translate-y-1/2"
      ></div>

      <div
        class="absolute top-1/2 left-0 rounded h-1 bg-red-600 -translate-y-1/2"
        style="width: {(completedLessons / totalLessons) * 100}%"
      ></div>
      {#each Array(totalLessons).fill(0) as _, i}
        <div
          class="relative z-10 flex items-center justify-center w-5 h-5 rounded-full border-2 mx-2"
          class:bg-red-600={i < completedLessons}
          class:border-red-600={i < completedLessons}
          class:bg-gray-200={i >= completedLessons}
          class:border-gray-400={i >= completedLessons}
        ></div>
      {/each}
    </div>
    <p class="text-sm text-gray-700 font-medium mt-2">
      You have completed <span class="text-red-600 font-bold">{progress}%</span>
      of your current unit.
    </p>

    <p class="text-sm text-gray-700 mt-2">
      <span class="text-red-600 font-bold"
        >{Math.floor((progress / 100) * totalLessons)}</span
      >
      out of <span class="text-red-600 font-bold">{totalLessons}</span> lessons completed.
    </p>

    <p class="text-sm font-semibold mt-3 text-gray-800">
      <span class="text-red-600">{getProgressMessage(progress)}</span>
    </p>
  </div>
</div>
