<script>
  import InfoSection from "../lib/components/InfoSection.svelte";
  import QuoteSection from "../lib/components/QuoteSection.svelte";
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  export let data;
  let videoElement;
  let isVisible = false;

  onMount(() => {
    if (videoElement) {
      videoElement.play();
    }
    isVisible = true;
  });
</script>



<div class="relative min-h-screen w-full overflow-hidden">
  <!-- Video Background with Image Fallback -->
  <div class="absolute inset-0 w-full h-full">
    <!-- Background Image (fallback) -->
    <div 
      class="absolute inset-0 w-full h-full bg-cover bg-center"
      style="background-image: url('/graphics/hero_background.png');"
    ></div>
    
    <video
      bind:this={videoElement}
      class="absolute top-0 left-0 w-full h-full object-cover filter brightness-75"
      autoplay
      muted
      loop
      playsinline
      poster="/graphics/hero_background.png"
    >
      <source src="/graphics/hero.mp4" type="video/mp4" />
    </video>
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70"></div>
  </div>
  
  <!-- Hero Content -->
  <div class="relative z-10 flex flex-col items-center justify-center h-screen text-white px-4 py-16">
    {#if isVisible}
      <!-- Logo/Brand -->
      <div
        class="mb-8"
        in:fly="{{ y: -50, duration:500, delay: 50 }}"
      >
        <h1 class="text-6xl md:text-8xl font-bold tracking-tight text-center">
          <span class="text-red-500">Speak</span>Shqip
        </h1>
      </div>
      
      <!-- Tagline -->
      <p
        class="text-xl md:text-3xl text-center mb-12 max-w-2xl font-light"
        in:fade="{{ duration: 1000, delay: 500 }}"
      >
        Embark on your journey to master Albanian with our immersive learning experience
      </p>
      
      <!-- CTA Button -->
      <div
        in:fade="{{ duration: 1000, delay: 800 }}"
        class="space-x-4"
      >
        <a
          href="/learn"
          class="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg
                 shadow-lg transition-all duration-300 ease-in-out
                 hover:bg-red-700 hover:scale-105 hover:shadow-xl
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Start Learning Now
        </a>
      </div>
    {/if}
  </div>
</div>
<!-- Features Section -->
<div class="bg-white py-24">
  <InfoSection />
</div>

<!-- Testimonials -->
<div class="bg-gray-50 py-24">
  <QuoteSection />
</div>

<!-- Final CTA Section -->
<div class=" py-24">
  <div class="max-w-7xl mx-auto px-4 text-center">
    <h2 class="text-5xl md:text-6xl font-bold mb-8 text-gray-900 transition-all hover:text-red-600">
      Begin Your Albanian Journey Today
    </h2>
    
    <a
      href="/learn"
      class="inline-block px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg
             shadow-lg transition-all duration-100 ease-in-out
             hover:bg-red-200 hover:scale-105 hover:shadow-xl
             focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      Get Started
    </a>
  </div>
</div>
<br /><br />

<!-- <ul>
  {#each data.words as word}
    <li>{word.word_al} - {word.word_en}</li>
  {/each}
</ul> -->
