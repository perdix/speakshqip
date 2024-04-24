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
  <p class=" text-center mt-6 text-gray-600">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit
    minus, aperiam consequatur suscipit delectus veniam.
  </p>

  <div class="flex justify-center">
    <a
      href="#"
      class="p-2 bg-zinc-900 text-white text-center rounded-md drop-shadow-lg mt-6 mr-2 transition-all hover:opacity-85"
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
