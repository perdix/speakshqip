<script>
  import FaqSection from "../../lib/components/FaqSection.svelte";
  import InfoCard from "../../lib/components/InfoCard.svelte";

  let cardInfo = [
    {
      header: "Quick Start",
      message: "Start your learning journey now with our quick-start guide",
      image: "graphics/about1.jpg",
    },
    {
      header: "Learn Fast",
      message:
        "Accelerate your learning with our proven methods and strategies",
      image: "graphics/about2.jpg",
    },
    {
      header: "Master Skills",
      message:
        "Become a skillful expert in no time with our comprehensive modules",
      image: "graphics/masterskills_about.jpg",
    },
    {
      header: "Expert Tips",
      message: "Discover expert tips and tricks for mastering the language",
      image: "graphics/experttips_about.jpg",
    },
    {
      header: "Practice Daily",
      message: "Commit to daily practice and see noticeable improvements",
      image: "graphics/practicedaily_about.jpg",
    },
    {
      header: "Boost Knowledge",
      message:
        "Boost your knowledge and skills with our interactive lessons and resources",
      image: "graphics/boostknowledge_about.jpg",
    },
  ];

  let benefits = [
    {
      title: "Albanian Courses",
      description:
        "Take advantage of our well-structured courses designed for both beginners and advanced learners. Start from the basics or dive deep into more complex topics.",
    },
    {
      title: "Vocabulary Training",
      description:
        "Expand your vocabulary with interactive word lists and exercises.Learn words in context for better retention and recall.",
    },
    {
      title: "Interactive Quizzes",
      description:
        "Test your knowledge with our fun and challenging quizzes, specially designed to improve your language comprehension.",
    },
    {
      title: "Listening Exercises",
      description: "Listen to native speakers and improve your listening skills to better navigate everyday conversations.",
    },
  ];

  const blogPosts = [
    {
      id: "051d532d-2b90-4c49-8034-7e2e4578296",
      titel: "Language – More Than a Tool: A Gateway to Culture and Diversity",
      description:
        "language is not just a tool for communication but also a gateway to understanding a rich and diverse cultural heritage. .",
      image: "graphics/image1.jpg", 
    },
    {
      id: "1c70ec9a-2b70-4c67-b3c9-6d2c8411f2f0",
      titel: "Albanian – A Language Full of Surprises",
      description:
        "Albanian, or Shqip, is a language full of surprises, standing out as one of the most unique and ancient languages in Europe.",
      image: "graphics/image2.jpg", 
    },
    {
      id: "23a3c668-0c09-4d95-9f5a-8f38eefc9c26",
      titel: "The Language of History: Albanian – A Legacy of Over 7 Million Speakers",
      description:
        "Spoken by over 7 million people primarily in Albania, Kosovo, and surrounding regions, it carries centuries of history and cultural depth within its words and expressions.",
      image: "graphics/image3.jpg", 
    },
  ];

  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient(
    "https://bwzdxxvcoifrajdrfrai.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E"
  );

  let lessons = []; 

 
  async function loadLessons() {
    const { data, error } = await supabase
      .from("lessons")
      .select("id, name, desc ,image");

    if (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
    } else {
      lessons = data; 
    }
  }

 
  loadLessons();

  let scrollContainer;

  function scrollLeft() {
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  }

  function scrollRight() {
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  }
</script>



  <!-- Hero Section -->
<div
  class="relative bg-white min-h-screen flex items-center justify-start overflow-hidden px-8"
>

  <div
    class="absolute bg-red-300 h-[450px] w-[450px] rounded-full -top-24 -right-24 opacity-40"
  ></div>

  <div class="relative z-10 max-w-6xl mx-auto w-full flex items-center">
   
    <div class="w-1/2 z-20 pr-12">
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
        Develop Your Albanian Skills in a 

 <br />
        <span class="text-red-600">Unique Way</span>
      </h1>

      <p class="mt-6 text-base lg:text-lg text-gray-600">
        Unlock the beauty of the Albanian language through an innovative approach to learning. Explore our interactive online platform that combines engaging content, practical exercises, and exciting challenges to accelerate your language journey.
      </p>

      <div class="mt-8 flex justify-start gap-4">
        <a href="/learn">
          <button
            class="bg-red-600 text-white py-3 px-6 rounded-md text-base shadow-lg hover:bg-red-700 transition"
          >
            Enroll Now
          </button></a
        >
        <a href="#benefits">
          <button
            class="bg-red-200 text-red-800 py-3 px-6 rounded-md text-base shadow-lg hover:bg-red-300 transition"
          >
            Learn More
          </button>
        </a>
        
      </div>
    </div>

   
    <div
      class="absolute top-0 right-0 w-1/2 h-full flex items-center justify-end"
    >
      <img
        src="/graphics/Animation_Hero.svg"
        alt="Hero Animation"
        class="w-3/4 max-w-[600px] h-auto z-10 relative"
      />
    </div>
  </div>
</div>

<!-- Our Benefits Section -->
<div id="benefits" class="bg-white py-12 sm:py-16 px-4 sm:px-8">
  <div
    class="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12"
  >
    <div class="w-full lg:w-1/2 text-center lg:text-left">
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
      >
        Why <span class="text-red-600">Learn Albanian?</span>
      </h2>
      <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
        Dive into the rich culture and history of Albania by mastering its language. Our interactive learning platform offers a fun and effective way to study, so you can progress quickly and confidently at your own pace.
      </p>
    </div>


    <div class="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {#each benefits as benefit}
        <div
          class="bg-red-50 border border-red-200 rounded-xl p-6 text-center shadow-md
                 transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <h3 class="text-xl font-semibold text-red-600">{benefit.title}</h3>
          <p class="mt-3 text-sm text-gray-600">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="bg-gray-50 py-16 px-8 mt-24">
  <div class="max-w-6xl mx-auto flex justify-between items-center mb-12">
    <a href="/blog">
      <h2 class="text-3xl font-bold text-gray-800 hover:text-red-500">
        Read Our Blog
      </h2>
    </a>
  </div>
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each blogPosts as post, index}
      <a 
        href="/blog" 
        class="bg-white overflow-hidden group hover:shadow-lg transition duration-300 block"
      >
        <div class="relative overflow-hidden">
          <div
            class="absolute top-4 left-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600"
          >
            {index + 1}
          </div>
          <img
            src={post.image}
            alt={post.titel}
            class="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            {post.titel}
          </h3>
          <p class="text-gray-600 text-sm mb-4 line-clamp-2">
            {post.description}
          </p>
          <div class="text-gray-600 text-sm hover:text-gray-800 transition flex items-center gap-2">
            Learn more →
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>


<!-- Our Courses Section -->
<div class="bg-gray-50 py-16 px-8">
  <div class="max-w-6xl mx-auto mb-12 text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">About Our Lessons</h2>
    <p class="text-gray-600 text-lg max-w-3xl mx-auto">
      Learn more about our curated lessons that help you grow your skills and
      knowledge.
    </p>
  </div>
  <div class="max-w-6xl mx-auto relative">
    <button
      on:click={scrollLeft}
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <button
      on:click={scrollRight}
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>

    <div
      bind:this={scrollContainer}
      class="overflow-x-auto flex gap-6 scroll-smooth pb-4"
      style="scrollbar-width: none; -ms-overflow-style: none;"
    >
      {#each lessons as lesson}
        <div
          class="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition duration-300 relative"
        >
          <div class="bg-gray-200 h-40 flex items-center justify-center">
            {#if lesson.image}
              <img
                src={lesson.image}
                alt={lesson.name}
                class="w-full h-full object-cover"
              />
            {:else}
              <span class="text-lg font-semibold text-gray-700"
                >{lesson.name}</span
              >
            {/if}
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800 mb-2">{lesson.name}</h3>
            <p class="text-sm text-gray-600 mb-10 line-clamp-3">
              {lesson.desc}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="w-full flex justify-center items-center mt-11">
    <a href="/learn">
      <button
        class="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
      >
        Start your journey
      </button>
    </a>
  </div>
</div>

<FaqSection />
