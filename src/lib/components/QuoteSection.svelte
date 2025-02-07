<script>
  import { fade, fly } from 'svelte/transition';
</script>

<section
  class="relative min-h-[600px] overflow-hidden bg-cover bg-center bg-no-repeat"
  style="background-image: url('graphics/words_of_the_day.jpg')"
>
  <!-- Simple Dark Overlay -->
  <div class="absolute inset-0 bg-black/75"></div>

  <!-- Main Content -->
  <div
    class="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center"
    transition:fade={{ duration: 800 }}
  >
    <div transition:fly={{ y: 20, duration: 800, delay: 200 }}>
      <h2 class="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
        Word of the Day
      </h2>

      <p class="text-xl md:text-2xl text-gray-200 max-w-xl mx-auto mb-12">
        Join the <span class="text-red-400 font-semibold">SpeakShqip</span> community and elevate your Albanian.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="/learn"
          class="bg-red-600 text-white py-3 px-6 rounded-md text-base shadow-lg hover:bg-red-700 transition"
        >
          Try for free
          <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </a>

        <a
          href="/about"
          class="inline-flex items-center px-6 py-3 bg-red-200 text-red-800 font-medium rounded-lg shadow-lg hover:bg-rose-700 hover:text-white transition-colors duration-200"
        >
          Learn More
          <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  :global(body) {
    @apply antialiased;
  }
</style>