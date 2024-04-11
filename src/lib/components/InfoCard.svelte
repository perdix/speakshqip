<script>
  export let header;
  export let message;
</script>

<div
  class=" rounded-2xl border mt-16 ml-5 shadow-lg"
  style="height: 460px; width: 350px;"
>
  <img
    src="https://accessally.com/wp-content/uploads/2023/10/accessally-featured-image-how-to-create-training-modules-1024x675.png"
    class="w-full h-64 object-cover rounded-t-2xl rounded-tr-2xl"
    alt=""
  />
  <div class="info p-7">
    <h3 class="text-2xl font-semibold">{header}</h3>
    <p class="mt-4 mb-6">{message}</p>
    <a
      href="/about"
      class="p-2.5 bg-zinc-900 text-white text-center rounded-lg drop-shadow-xl"
      >Get Started</a
    >
  </div>
</div>
