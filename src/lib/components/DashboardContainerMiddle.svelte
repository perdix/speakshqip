<script>
  export let user;
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
  </div>