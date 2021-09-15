<script>
  import { getContext } from "svelte";
  import Surprise from "./Surprise.svelte";

  const { open } = getContext("simple-modal");

  const showSurprise = () => {
    open(Surprise, { message: "Login" });
  };
</script>

<button class="dtr-btn dtr-btn-styled btn-red dtr-mt-20" on:click={showSurprise}
  >Login and Proceed</button
>
