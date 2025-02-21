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
  <h1 class="text-3xl font-bold text-gray-900 mb-8">Welcome, {user}</h1>

  <div class="grid grid-cols-2 gap-4">
    <a href="/vocabulary" class="block group">
      <div class="h-full border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center transition-all hover:bg-gray-50 hover:shadow-md hover:border-gray-300">
        <i class="fas fa-book text-3xl text-gray-400 group-hover:text-red-500 transition-colors mb-3"></i>
        <h3 class="font-semibold text-gray-700 group-hover:text-gray-900">Vocabulary</h3>
        <p class="text-sm text-gray-400 mt-1">Click to view</p>
      </div>
    </a>

    <a href="/learn" class="block group">
      <div class="h-full border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center transition-all hover:bg-gray-50 hover:shadow-md hover:border-gray-300">
        <i class="fas fa-book-open text-3xl text-gray-400 group-hover:text-red-500 transition-colors mb-3"></i>
        <h3 class="font-semibold text-gray-700 group-hover:text-gray-900">Units</h3>
        <p class="text-sm text-gray-400 mt-1">Click to view</p>
      </div>
    </a>

    <a href="/alphabet" class="block group">
      <div class="h-full border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center transition-all hover:bg-gray-50 hover:shadow-md hover:border-gray-300">
        <i class="fas fa-font text-3xl text-gray-400 group-hover:text-red-500 transition-colors mb-3"></i>
        <h3 class="font-semibold text-gray-700 group-hover:text-gray-900">Alphabet</h3>
        <p class="text-sm text-gray-400 mt-1">Click to view</p>
      </div>
    </a>

    <a href="/numbers" class="block group">
      <div class="h-full border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center transition-all hover:bg-gray-50 hover:shadow-md hover:border-gray-300">
        <i class="fas fa-arrow-up-9-1 text-3xl text-gray-400 group-hover:text-red-500 transition-colors mb-3"></i>
        <h3 class="font-semibold text-gray-700 group-hover:text-gray-900">Numbers</h3>
        <p class="text-sm text-gray-400 mt-1">Click to view</p>
      </div>
    </a>
  </div>

  <div class="mt-5 p-6 border-2 border-gray-300 bg-white rounded-lg">
    <h2 class="text-xl font-bold mb-3 text-gray-800">
      Your Journey in <span class="text-red-600">SpeakShqip</span>
    </h2>

    <h2 class="text-lg font-semibold mb-3 text-red-600">
      Unit {count}: {unitName}
    </h2>

    <p class="text-sm text-gray-700">{description}</p>

    <div class="relative flex items-center mt-3">
      <div class="absolute top-1/2 left-0 w-full h-1 rounded bg-gray-300 -translate-y-1/2"></div>
      <div class="absolute top-1/2 left-0 rounded h-1 bg-red-600 -translate-y-1/2"
           style="width: {(completedLessons / totalLessons) * 100}%">
      </div>
      {#each Array(totalLessons).fill(0) as _, i}
        <div
          class="relative z-10 flex items-center justify-center w-5 h-5 rounded-full border-2 mx-2"
          class:bg-red-600={i < completedLessons}
          class:border-red-600={i < completedLessons}
          class:bg-gray-200={i >= completedLessons}
          class:border-gray-400={i >= completedLessons}>
        </div>
      {/each}
    </div>

    <p class="text-sm text-gray-700 font-medium mt-2">
      You have completed <span class="text-red-600 font-bold">{progress}%</span> of your current unit.
    </p>

    <p class="text-sm text-gray-700 mt-2">
      <span class="text-red-600 font-bold">{completedLessons}</span> out of 
      <span class="text-red-600 font-bold">{totalLessons}</span> lessons completed.
    </p>

    <p class="text-sm font-semibold mt-3 text-gray-800">
      <span class="text-red-600">{getProgressMessage(progress)}</span>
    </p>
  </div>
</div>
