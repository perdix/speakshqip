<script>
  import { fade, fly } from 'svelte/transition';

  // Define an array of random words
  const randomWords = [
    { word_al: "bukur", word_en: "beautiful", lexical_category: "adjective", pronunciation: "/ˈbuː.kur/" },
    { word_al: "shpirt", word_en: "soul", lexical_category: "noun", pronunciation: "/ʃpiɾt/" },
    { word_al: "fluturim", word_en: "flight", lexical_category: "noun", pronunciation: "/fluˈtu.ɾim/" },
    { word_al: "mrekulli", word_en: "wonder", lexical_category: "noun", pronunciation: "/mɾɛˈkul.li/" },
    { word_al: "libër", word_en: "book", lexical_category: "noun", pronunciation: "/ˈli.bər/" },
    { word_al: "dritare", word_en: "window", lexical_category: "noun", pronunciation: "/dɾiˈta.ɾɛ/" },
    { word_al: "pi", word_en: "drink", lexical_category: "verb", pronunciation: "/pi/" },
    { word_al: "shpejt", word_en: "fast", lexical_category: "adverb", pronunciation: "/ʃpɛjt/" },
    { word_al: "makinë", word_en: "car", lexical_category: "noun", pronunciation: "/maˈki.nə/" },
    { word_al: "i ftohtë", word_en: "cold", lexical_category: "adjective", pronunciation: "/i ftɔːt/" },
    { word_al: "vrapoj", word_en: "run", lexical_category: "verb", pronunciation: "/vɾaˈpɔj/" },
    { word_al: "telefon", word_en: "phone", lexical_category: "noun", pronunciation: "/tɛ.lɛˈfɔn/" },
    { word_al: "tavolinë", word_en: "table", lexical_category: "noun", pronunciation: "/ta.vɔˈli.nə/" },
    { word_al: "punë", word_en: "work", lexical_category: "noun", pronunciation: "/ˈpu.nə/" }
  ];

  function getRandomWord() {
    return randomWords[Math.floor(Math.random() * randomWords.length)];
  }

  // Assign a random word to display
  let word = getRandomWord();
</script>

<!-- Word of the Day Card Centered -->
<div class="flex items-center justify-center min-h-[600px] px-6 pt-12" transition:fade={{ duration: 600 }}>
  <div class="group bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-700 hover:bg-red-700 transition-colors duration-300 h-[450px] md:h-[500px] aspect-square w-full max-w-[500px] flex flex-col justify-center" transition:fly={{ y: -10, duration: 600, delay: 100 }}>
    <h2 class="text-4xl font-black text-white tracking-tight mb-6 text-center">Featured Word</h2>

    <div class="mb-4 text-center">
      <p class="text-zinc-300 group-hover:text-white text-sm uppercase tracking-widest mb-1">In Albanian</p>
      <p class="text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-200">{word.word_al}</p>
    </div>

    <div class="mb-4 text-center">
      <p class="text-zinc-300 group-hover:text-white text-sm uppercase tracking-widest mb-1">Translation</p>
      <p class="text-2xl font-semibold text-tertiary group-hover:text-white">{word.word_en}</p>
    </div>

    <div class="flex flex-wrap justify-center gap-6 mt-6 text-sm text-zinc-300 group-hover:text-white">
      <div>
        <span class="font-medium text-white">Pronunciation:</span>
        <span class="italic ml-1">{word.pronunciation}</span>
      </div>
      <div>
        <span class="font-medium text-white">Category:</span>
        <span class="ml-1">{word.lexical_category}</span>
      </div>
    </div>
  </div>
</div>

<!-- Hero Section -->
<section class="relative min-h-[400px] overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('graphics/words_of_the_day.jpg')">
  <div class="absolute inset-0 bg-black/75"></div>

  <div class="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center" transition:fade={{ duration: 800 }}>
    <div transition:fly={{ y: 20, duration: 800, delay: 200 }}>
      <p class="text-xl md:text-2xl text-gray-200 max-w-xl mx-auto mb-12">Join the <span class="text-red-400 font-semibold">SpeakShqip</span> community and elevate your Albanian.</p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href="/learn" class="bg-red-600 text-white py-3 px-6 rounded-md text-base shadow-lg hover:bg-red-700 transition">Try for free <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span></a>

        <a href="/about" class="inline-flex items-center px-6 py-3 bg-red-200 text-red-800 font-medium rounded-lg shadow-lg hover:bg-rose-700 hover:text-white transition-colors duration-200">Learn More <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span></a>
      </div>
    </div>
  </div>
</section>
