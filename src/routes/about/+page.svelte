<script>
  import FaqSection from "../../lib/components/FaqSection.svelte";
  import InfoCard from "../../lib/components/InfoCard.svelte";

  let cardInfo = [
    {
      header: "Quick Start",
      message: "Start your learning journey now with our quick-start guide",
    },
    {
      header: "Learn Fast",
      message:
        "Accelerate your learning with our proven methods and strategies",
    },
    {
      header: "Master Skills",
      message:
        "Become a skillful expert in no time with our comprehensive modules",
    },
    {
      header: "Expert Tips",
      message: "Discover expert tips and tricks for mastering the language",
    },
    {
      header: "Practice Daily",
      message: "Commit to daily practice and see noticeable improvements",
    },
    {
      header: "Boost Knowledge",
      message:
        "Boost your knowledge and skills with our interactive lessons and resources",
    },
  ];
</script>

<div class="flex justify-center items-center flex-col mt-28">
  <h1 class=" text-5xl font-bold">Who are we?</h1>
  <p class=" mt-6 text-gray-600 w-w-70/100 text-center mr-auto ml-auto">
    SpeakShqip is a comprehensive web application designed to introduce users to
    the fundamentals of the Albanian language. Our platform features a diverse
    array of modules, each meticulously crafted to focus on specific aspects of
    Albanian vocabulary and grammar. Through engaging exercises and interactive
    activities, users have the opportunity to immerse themselves in the
    language, gradually building up their vocabulary and understanding. <br
    /><br /> <br /> Whether you're a complete beginner or looking to brush up on
    your skills, SpeakShqip provides a supportive environment for learners of all
    levels. With our user-friendly interface and customizable learning paths, mastering
    Albanian has never been more accessible. Join our community today and embark
    on a rewarding journey of language discovery with SpeakShqip!
  </p>

  <div class="flex justify-center">
    <a
      href="#"
      class=" z-10 p-2 bg-zinc-900 text-white text-center rounded-md drop-shadow-lg mt-6 mr-2 transition-all hover:opacity-85"
      >Get Started</a
    >

    <a
      href="#"
      class="p-2 bg-zinc-500 text-white text-center rounded-md mt-6 drop-shadow-lg transition-all hover:opacity-85"
      >Learn More</a
    >
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
    <InfoCard header={card.header} message={card.message} key={i} />
  {/each}
</div>

<FaqSection></FaqSection>
