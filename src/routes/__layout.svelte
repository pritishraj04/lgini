<script>
  import "../app.postcss";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { browser } from "$app/env";
  import Toast from "/src/components/Toast.svelte";
  import { session } from "$app/stores";
  import supabase from "$lib/db";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  if (browser) {
    $session = supabase.auth.session();
    supabase.auth.onAuthStateChange((event, supaSession) => {
      $session = supaSession;
    });
  }
  let loaded = false;
  const removepreloader = () => {
    setTimeout(() => {
      loaded = true;
    }, 100);
  };
  onMount(() => {
    removepreloader();
  });
</script>

<svelte:head>
  <meta name="format-detection" content="telephone=no" />

  <!-- FAVICON FILES -->
  <link
    href="/assets/images/icons/apple-touch-icon-144-precomposed.png"
    rel="apple-touch-icon"
    sizes="144x144"
  />
  <link
    href="/assets/images/icons/apple-touch-icon-120-precomposed.png"
    rel="apple-touch-icon"
    sizes="120x120"
  />
  <link
    href="/assets/images/icons/apple-touch-icon-76-precomposed.png"
    rel="apple-touch-icon"
    sizes="76x76"
  />
  <link href="/assets/images/icons/favicon.png" rel="shortcut icon" />

  <!-- CSS FILES -->
  <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/assets/fonts/iconfonts.css" />
  <link rel="stylesheet" href="/assets/css/plugins.css" />
  <link rel="stylesheet" href="/assets/css/style.css" />
  <link rel="stylesheet" href="/assets/css/responsive.css" />
  <link rel="stylesheet" href="/assets/css/color.css" />
</svelte:head>

<div id="dtr-wrapper" class="clearfix">
  <!-- preloader starts -->
  {#if !loaded}
    <div class="dtr-preloader" out:fade>
      <div class="dtr-preloader-inner">
        <div class="dtr-preloader-img" />
      </div>
    </div>
  {/if}

  <!-- preloader ends -->
  <Header />
  <!-- == main content area starts == -->
  <div id="dtr-main-content">
    <slot />
    <Toast />
    <Footer />
  </div>
  <!-- == main content area ends == -->
</div>
