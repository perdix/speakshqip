<!-- <script>
  import ModalError from "../../lib/components/ModalError.svelte";

  let modalVisible = false;

  function openModal() {
    modalVisible = true;
  }

  function closeModal() {
    modalVisible = false;
    const backdrop = document.querySelector(".backdrop");
    backdrop.style.opacity = "0"; // Set opacity to 0 to make it invisible
    setTimeout(() => {
      backdrop.remove(); // Remove the backdrop from the DOM after a short delay
    }, 300); // Adjust the delay as needed to match the modal closing animation duration
  }
</script>

{#if modalVisible}
  <div
    class="backdrop fixed top-0 left-0 w-screen h-screen backdrop-blur-sm"
    style="z-index: 1000000;"
    on:click={closeModal}
  ></div>
  <ModalError on:close={closeModal} />
{/if}

<button on:click={openModal}>click me</button> -->

<script>
  import DashboardCart from "../../lib/components/DashboardCart.svelte";

  export let data;

</script>

<!-- <h1>My dashboard</h1>

<h2>Hello {data.session.user.email}</h2>

<hr />
-->
{#each data.words as word}
    <p>{word.word_en}</p>
{/each} 
<form action="/logout" method="POST" use:enhance>
  <button
  class="transition-all bg-zinc-800 h-10 p-2 flex justify-center items-center w-auto rounded-lg mt-8 drop-shadow-md text-white hover:opacity-75"
  type="submit"
  name="submit"
  id="submit"
  value="Log In">Log Out</button
>
</form>
<h1 class="text-6xl font-bold m-9 text-cd-black">Dashboard</h1>

<div class=" w-w-95/100 ml-auto mr-auto">
  <div class="flex justify-center">
    <div
      class="rounded-3xl border-2 border-cd-red mt-9 w-full"
      style="height: 450px;"
    ></div>
  </div>

  <div class="flex justify-center">
    <div
      class="flex justify-center items-center flex-col w-full sm:flex-row sm:flex-wrap"
    >
      <DashboardCart></DashboardCart>
    </div>
  </div>
  <div class="flex justify-center m-4">
    <a
      href="/lessons"
      class="p-2.5 bg-zinc-900 text-white text-center rounded-lg drop-shadow-xl"
      >Get Started</a
    >
  </div>
  <div
    class="flex flex-col justify-center items-center mt-20 lg:flex-row lg:justify-between"
  >
    <div class=" w-12/12 lg:w-5/12">
      <h1 class=" text-2xl font-semibold">Overview</h1>
      <p class=" mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo vitae
        officia corporis odit quas mollitia voluptates id, reiciendis dolorum
        aliquid commodi necessitatibus asperiores minima quibusdam ea officiis
        eveniet eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ipsa exercitationem commodi porro explicabo blanditiis! Debitis quidem
        suscipit itaque cumque sed exercitationem aliquam tempore culpa facilis
        molestias. Quam explicabo ad minima!
      </p>
    </div>
    <div class=" w-12/12 lg:w-5/12 mt-16 mb-16 lg:mt-0">
      <h1 class=" text-2xl font-semibold">Approach</h1>
      <p class="mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quo vitae
        officia corporis odit quas mollitia voluptates id, reiciendis dolorum
        aliquid commodi necessitatibus asperiores minima quibusdam ea officiis
        eveniet eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quae ut illum consectetur quasi, dicta incidunt et corporis quo
        doloribus sunt. Cumque delectus veritatis illum nesciunt itaque, nobis
        ipsam tenetur tempore?
      </p>
    </div>
  </div>
</div>
