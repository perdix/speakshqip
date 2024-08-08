<script>
  import UnitCard from "../../lib/components/UnitCard.svelte";

  // Test props for unit containers
  let unitCard = [
    {
      unitName: "Learn Fast",
    },
    {
      unitName: "Master Skills",
    },
    {
      unitName: "Expert Tips",
    },
    {
      unitName: "Practice Daily",
    },
    {
      unitName: "Boost Knowledge",
    },
  ];
</script>

<div class="flex flex-col md:flex-row w-full p-12">
  <div class="sm:w-full p-3 md:w-2/4 md:sticky md:top-0 md:self-start">
    <h1 class="font-bold text-4xl">Units</h1>
    <p class=" mt-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
      dolores ipsam quam voluptatum rerum. Laborum id pariatur placeat, itaque
      animi odit ducimus fugiat illum vero officiis. Rerum, similique sint.
    </p>
  </div>
  <div class="sm:w-full md:w-2/4 h-full">
    {#each unitCard as card, i}
      <UnitCard unitName={card.unitName} key={i} />
    {/each}
  </div>
</div>
