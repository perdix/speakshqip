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
</script>




<div class="relative bg-purple-100 min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background Circle -->
  <div class="absolute bg-purple-300 h-[450px] w-[450px] rounded-full -top-24 -right-24 opacity-40"></div>

  <div class="relative z-10 text-center max-w-4xl px-4 lg:px-0">
    <!-- Heading -->
    <h1 class="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
      Develop your skills in a <br />
      <span class="text-purple-600">new and unique way</span>
    </h1>
    <!-- Subtext -->
    <p class="mt-6 text-lg text-gray-600">
      Explore a transformative approach to skill development on our online
      learning platform. Elevate your learning experience and unlock new
      possibilities today!
    </p>
    <!-- Buttons -->
    <div class="mt-8 flex justify-center gap-4">
      <a
        href="#"
        class="bg-purple-600 text-white py-3 px-6 rounded-md text-lg shadow-lg hover:bg-purple-700 transition"
      >
        Enroll Now
      </a>
      <a
        href="#"
        class="bg-gray-200 text-gray-800 py-3 px-6 rounded-md text-lg shadow-lg hover:bg-gray-300 transition"
      >
        Learn More
      </a>
    </div>
  </div>




<div class="flex justify-center mt-40">
  <h1 class=" text-5xl font-bold">Our Courses</h1>
</div>
<div
  class="flex justify-center items-center flex-col mr-14 ml-14 mb-14 sm:flex-row sm:flex-wrap"
>
  <!--Generate Cards-->
  {#each cardInfo as card, i}
    <InfoCard
      header={card.header}
      message={card.message}
      image={card.image}
      key={i}
    />
  {/each}
</div>

<FaqSection></FaqSection>
