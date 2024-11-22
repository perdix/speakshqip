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
</script>

<div class="relative bg-white min-h-screen flex items-center justify-start overflow-hidden px-8">
  <!-- Background Circle -->
  <div class="absolute bg-red-300 h-[450px] w-[450px] rounded-full -top-24 -right-24 opacity-40"></div>

  <div class="relative z-10 text-left max-w-4xl w-full flex items-center">
    <!-- Text content -->
    <div>
      <!-- Heading -->
      <h1 class="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
        Develop your skills in a <br />
        <span class="text-red-600">new and unique way</span>
      </h1>
      <!-- Subtext -->
      <p class="mt-6 text-lg text-gray-600">
        Explore a transformative approach to skill development on our online
        learning platform. Elevate your learning experience and unlock new
        possibilities today!
      </p>
      <!-- Buttons -->
      <div class="mt-8 flex justify-start gap-4">
        <button
          class="bg-red-600 text-white py-3 px-6 rounded-md text-lg shadow-lg hover:bg-red-700 transition"
        >
          Enroll Now
        </button>
        <button
          class="bg-red-200 text-red-800 py-3 px-6 rounded-md text-lg shadow-lg hover:bg-red-300 transition"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Our Benefits Section -->

<div class="bg-white py-16 px-8">
  <!-- Flex Container for Title and Grid -->
  <div class="flex justify-between items-center max-w-6xl mx-auto gap-x-16">
    <!-- Text Section (Title and Description) -->
    <div class="max-w-lg text-left">
      <h2 class="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
        Why <span class="text-red-600">Learn Albanian?</span>
      </h2>
      <p class="mt-6 text-lg text-gray-600">
        Discover the beauty of the Albanian language with our interactive learning platform. Learn at your own pace and enjoy exciting content that will help you make rapid progress.
      </p>
    </div>

    <!-- Grid Section (Cards) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {#each benefits as benefit}
        <div
          class="bg-red-50 border border-red-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition hover:scale-105"
        >
          <h3 class="text-2xl font-semibold text-red-600">{benefit.title}</h3>
          <p class="mt-4 text-gray-600">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</div>


<!-- Our Courses Section -->
<div class="flex justify-center mt-40">
  <h1 class="text-5xl font-bold">Our Courses</h1>
</div>

<div class="flex justify-center items-center flex-col sm:flex-row sm:flex-wrap mt-8">
  <!-- Generate Cards -->
  {#each cardInfo as card (card.header)}
    <InfoCard
      header={card.header}
      message={card.message}
      image={card.image}
    />
  {/each}
</div>

<FaqSection />