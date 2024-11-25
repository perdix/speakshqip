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
      description: "Learn the Albanian language through structured courses for beginners and advanced learners.",
    },
    {
      title: "Vocabulary Training",
      description: "Expand your vocabulary with interactive word lists and exercises.",
    },
    {
      title: "Quizzes & Games",
      description: "Test your knowledge with quizzes and language games for fun learning.",
    },
    {
      title: "1.5k+ Hours of Material",
      description: "Access a vast range of learning resources and exercises.",
    },
  ];

 
  const blogPosts = [
  {
    id: "051d532d-2b90-4c49-8034-7e2e4578296",
    titel: "Viel sprechen, auch mit Fehlern",
    description: "Zögere nicht, Fehler zu machen. Je mehr du sprichst, desto besser wirst du.",
    image: "graphics/image1.jpg"  // Gleiche Bildstruktur wie cardInfo
  },
  {
    id: "1c70ec9a-2b70-4c67-b3c9-6d2c8411f2f0",
    titel: "Verwende die Sprache im Alltag",
    description: "Versuche, die neue Sprache in deinen Alltag zu integrieren.",
    image: "graphics/image2.jpg"  // Gleiche Bildstruktur wie cardInfo
  },
  {
    id: "23a3c668-0c09-4d95-9f5a-8f38eefc9c26",
    titel: "Setze auf regelmäßige Wiederholungen",
    description: "Verwende Apps wie Quizlet oder Anki, um regelmäßig zu üben.",
    image: "graphics/image3.jpg"  // Gleiche Bildstruktur wie cardInfo
  }
];
const courses = [
    {
      id: "0a74a405-c3b4-4c79-ad0d-84e0af52e89",
      name: "Ordering in a restaurant",
      desc: "Basic phrases and words that help you order",
      count: 6,
      xp: 100,
      students: 25,
      lessons: 8,
      rating: 4.8
    },
    {
      id: "17d723b1-3965-43ef-8c29-7c9fc4a7959d",
      name: "Belongings",
      desc: "Learning how to talk about belongings",
      count: 8,
      xp: 100,
      students: 32,
      lessons: 6,
      rating: 4.9
    },
    {
      id: "3f4951e9-ce8c-412f-b86f-ec43982d2527",
      name: "Shopping around the city",
      desc: "Basic phrases and words that help you while shopping",
      count: 4,
      xp: 100,
      students: 28,
      lessons: 7,
      rating: 4.7
    },
    {
      id: "40e113b8-b63e-4816-a15c-99174a47d6c3",
      name: "Getting groceries",
      desc: "Basic phrases and words that help you buy groceries",
      count: 5,
      xp: 100,
      students: 30,
      lessons: 5,
      rating: 4.6
    }
  ];


  import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bwzdxxvcoifrajdrfrai.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3emR4eHZjb2lmcmFqZHJmcmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTc5NjgsImV4cCI6MjAyNDI3Mzk2OH0.bsXtaDV4P95MZD7UETjk17ckEXedoZV6O4VKpVqit0E"
);

let lessons = []; // Speichert die abgerufenen Daten

// Daten abrufen
async function loadLessons() {
  const { data, error } = await supabase
    .from("lessons")
    .select("id, name, desc,image");

  if (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
  } else {
    lessons = data; // Daten setzen
  }
}

// Beim Laden der Komponente Daten abrufen
loadLessons();


</script>

<div class="relative bg-white min-h-screen flex items-center justify-start overflow-hidden px-8">
  <!-- Background Circle -->
  <div class="absolute bg-red-300 h-[450px] w-[450px] rounded-full -top-24 -right-24 opacity-40"></div>
  
  <div class="relative z-10 max-w-6xl mx-auto w-full flex items-center">
    <!-- Text content -->
    <div class="w-1/2 z-20 pr-12">
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
        Develop your skills in a <br />
        <span class="text-red-600">new and unique way</span>
      </h1>
      
      <p class="mt-6 text-base lg:text-lg text-gray-600">
        Explore a transformative approach to skill development on our online learning platform. Elevate your learning experience and unlock new possibilities today!
      </p>
      
      <div class="mt-8 flex justify-start gap-4">
        <button 
          class="bg-red-600 text-white py-3 px-6 rounded-md text-base shadow-lg hover:bg-red-700 transition"
        >
          Enroll Now
        </button>
        <button 
          class="bg-red-200 text-red-800 py-3 px-6 rounded-md text-base shadow-lg hover:bg-red-300 transition"
        >
          Learn More
        </button>
      </div>
    </div>
    
    <!-- SVG Section -->
    <div class="absolute top-0 right-0 w-1/2 h-full flex items-center justify-end">
      <img 
        src="/graphics/Animation_Hero.svg"
        alt="Hero Animation"
        class="w-3/4 max-w-[600px] h-auto z-10 relative"
      />
    </div>
  </div>
</div>

<!-- Our Benefits Section -->
<div class="bg-white py-12 sm:py-16 px-4 sm:px-8">
  <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
    <!-- Text Section -->
    <div class="w-full lg:w-1/2 text-center lg:text-left">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
        Why <span class="text-red-600">Learn Albanian?</span>
      </h2>
      <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
        Discover the beauty of the Albanian language with our interactive learning platform. Learn at your own pace and enjoy exciting content that will help you make rapid progress.
      </p>
    </div>

    <!-- Benefits Grid -->
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

<!-- Read our Blog Section -->
<div class="bg-gray-50 py-16 px-8 mt-24"> <!-- Added mt-24 for more spacing -->
  <!-- Blog Section Header -->
  <div class="max-w-6xl mx-auto flex justify-between items-center mb-12">
    <h2 class="text-3xl font-bold text-gray-800">Read Our Blog</h2>
    <button 
      class="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
    >
      Read More
    </button>
  </div>

  <!-- Blog Cards Grid -->
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each blogPosts as post, index}
      <div class="bg-white overflow-hidden group hover:shadow-lg transition duration-300">
        <!-- Image Container -->
        <div class="relative overflow-hidden">
          <!-- Index Number -->
          <div class="absolute top-4 left-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600">
            {index + 1}
          </div>
          <!-- Image -->
          <img 
            src={post.image}
            alt={post.titel}
            class="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{post.titel}</h3>
          <p class="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
          <button 
            class="text-gray-600 text-sm hover:text-gray-800 transition flex items-center gap-2"
          >
            Learn more →
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>


<!-- Our Courses Section -->

<!-- Our Lessons Section -->
<div class="bg-gray-50 py-16 px-8">
  <div class="max-w-6xl mx-auto mb-12">
    <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Our Lessons</h2>
    <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">
      Dive into our curated lessons that help you expand your knowledge and skills in an engaging way.
    </p>
  </div>

  <!-- Horizontal Scrollable Container -->
  <div class="max-w-6xl mx-auto relative">
    <!-- Lessons Cards Horizontal Scroll -->
    <div class="overflow-x-auto pb-6 hide-scrollbar">
      <div class="flex gap-6 min-w-min">
        {#each lessons as lesson}
          <!-- Fixed width for each card to ensure consistent sizing -->
          <div class="w-80 flex-shrink-0">
            <div class="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition duration-300 h-full">
              <!-- Card Header (Image) -->
              <div class="relative h-40 overflow-hidden">
                {#if lesson.image}
                  <img 
                    src={lesson.image}
                    alt={lesson.name}
                    class="w-full h-full object-cover"
                  />
                {:else}
                  <!-- Placeholder if no image -->
                  <div class="bg-gray-200 h-full flex items-center justify-center">
                    <span class="text-xl font-semibold text-gray-600">#{lesson.id}</span>
                  </div>
                {/if}
              </div>
              <!-- Card Content -->
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-2">{lesson.name}</h3>
                <p class="text-sm text-gray-600 mb-4">{lesson.desc}</p>
                <button 
                  class="text-red-600 text-sm hover:text-red-800 transition flex items-center gap-2"
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  /* Hide scrollbar but keep functionality */
  .hide-scrollbar {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
</style>

<FaqSection />