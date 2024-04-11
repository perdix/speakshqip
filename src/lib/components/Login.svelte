<div class="login-container flex justify-center items-center flex-col">
  <form
    action="POST"
    class="flex justify-center items-center flex-col mt-16 mr-16 ml-16"
  >
    <input
      class=" bg-zinc-200 h-12 w-72 p-3 rounded-md focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
      type="text"
      name="name"
      id="name"
      placeholder="Username"
    />
    <input
      class=" bg-zinc-200 h-12 w-72 p-3 rounded-md mt-8 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
      type="password"
      name="password"
      id="password"
      placeholder="Password"
    />
    <a href="#" class=" mt-8 hover:opacity-85">Forgot Password</a>
    <input
      class="transition-all bg-zinc-800 h-10 p-2 flex justify-center items-center w-auto rounded-lg mt-8 drop-shadow-md text-white hover:opacity-75"
      type="submit"
      name="submit"
      id="submit"
      value="Log In"
    />
  </form>
  <a
    href="#"
    class=" transition-all bg-zinc-800 h-10 p-2 flex justify-center items-center text-center w-auto rounded-lg mt-3 mb-11 drop-shadow-md text-white hover:opacity-75"
    >Still don't have an account?</a
  >
</div>
