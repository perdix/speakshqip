<script>
  import "../app.css";
  import NavBar from "./Navbar/+page.svelte";
  import Footer from "../lib/components/Footer.svelte";
  
</script>

<NavBar></NavBar>

<slot />
<Footer></Footer>
