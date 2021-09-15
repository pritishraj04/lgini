<script>
  import { session } from "$app/stores";
  import supabase from "$lib/db";
  const src = "/assets/images/logo-dark.png";
  import { fade } from "svelte/transition";
  const handleSignout = async () => {
    let { error } = await supabase.auth.signOut();
    console.log(error);
  };
  let y;
  let isActive = false;
  const toggleMenu = () => {
    isActive = !isActive;
  };
</script>

<svelte:window bind:scrollY={y} />
<!-- Small Devices Header 
============================================= -->
{#if y > 20}
  <div class="dtr-responsive-header fixed-top on-scroll">
    <div class="container">
      <!-- small devices logo -->
      <a href="/"><img {src} alt="logo" /></a>
      <!-- small devices logo ends -->

      <!-- menu button -->
      <button
        id="dtr-menu-button"
        on:click={() => {
          isActive = !isActive;
        }}
        class={isActive ? "dtr-hamburger is-active" : "dtr-hamburger"}
        type="button"
        ><span class="dtr-hamburger-lines-wrapper"
          ><span class="dtr-hamburger-lines" /></span
        ></button
      >
    </div>
    <div class="dtr-responsive-header-menu">
      {#if isActive}
        <div class="slicknav_menu">
          <ul
            class="slicknav_nav slicknav_hidden dtr-scrollspy"
            style="touch-action: pan-y;"
            aria-hidden="true"
            role="menu"
            transition:fade
          >
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#features"
                role="menuitem"
                tabindex="-1">Why Us</a
              >
            </li>
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#about"
                role="menuitem"
                tabindex="-1">About</a
              >
            </li>
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#features2"
                role="menuitem"
                tabindex="-1">Features</a
              >
            </li>
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#pricing"
                role="menuitem"
                tabindex="-1">Pricing</a
              >
            </li>
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#contact"
                role="menuitem"
                tabindex="-1">Contact</a
              >
            </li>
            {#if $session === null}
              <li>
                <a
                  class="nav-link"
                  on:click={toggleMenu}
                  href="/login"
                  role="menuitem"
                  tabindex="-1">Login</a
                >
              </li>
              <li>
                <a
                  class="nav-link"
                  on:click={toggleMenu}
                  href="/register"
                  role="menuitem"
                  tabindex="-1">Register</a
                >
              </li>
            {:else}
              <li>
                <a
                  class="nav-link"
                  on:click={toggleMenu}
                  href="/account"
                  role="menuitem"
                  tabindex="-1">Account</a
                >
              </li>
            {/if}
          </ul>
        </div>
      {/if}
    </div>
  </div>
  <!-- Small Devices Header ends 
============================================= -->

  <!-- Header 
============================================= -->
  <header id="dtr-header-global" class="fixed-top trans-header on-scroll">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <!-- header left starts -->
        <div class="dtr-header-left">
          <!-- logo -->
          <a class="logo-default dtr-scroll-link" href="/"
            ><img {src} alt="logo" width="173" /></a
          >

          <!-- logo on scroll -->
          <a class="logo-alt dtr-scroll-link" href="/"
            ><img {src} alt="logo" width="173" /></a
          >
          <!-- logo on scroll ends -->
        </div>
        <!-- header left ends -->

        <!-- menu starts-->
        <div class="dtr-header-right ml-auto">
          <div class="main-navigation dtr-menu-dark">
            <ul
              class="sf-menu dtr-scrollspy dtr-nav dark-nav-on-load dark-nav-on-scroll"
            >
              <li><a class="nav-link" href="/#features">Why Us</a></li>
              <li><a class="nav-link" href="/#about">About</a></li>
              <li><a class="nav-link" href="/#features2">Features</a></li>
              <li><a class="nav-link" href="/#pricing">Pricing</a></li>
              <li><a class="nav-link" href="/#contact">Contact</a></li>
              {#if $session === null}
                <li><a class="nav-link" href="/login">Login</a></li>
                <li><a class="nav-link" href="/register">Register</a></li>
              {:else}
                <li><a class="nav-link" href="/account">Account</a></li>
              {/if}
            </ul>
          </div>
        </div>
        <!-- menu ends -->

        <!-- header button starts -->
        <a
          href="/checkout"
          class="dtr-btn dtr-btn-styled btn-red dtr-scroll-link dtr-ml-30"
          >Book a Pickup</a
        >
        <!-- header button ends -->
      </div>
    </div>
  </header>
  <!-- header ends
================================================== -->
{:else}
  <div class="dtr-responsive-header fixed-top">
    <div class="container">
      <!-- small devices logo -->
      <a href="/"><img {src} alt="logo" /></a>
      <!-- small devices logo ends -->

      <!-- menu button -->
      <button
        id="dtr-menu-button"
        on:click={() => {
          isActive = !isActive;
        }}
        class={isActive ? "dtr-hamburger is-active" : "dtr-hamburger"}
        type="button"
        ><span class="dtr-hamburger-lines-wrapper"
          ><span class="dtr-hamburger-lines" /></span
        ></button
      >
    </div>
    <div class="dtr-responsive-header-menu">
      {#if isActive}
        <div class="slicknav_menu">
          <ul
            class="slicknav_nav slicknav_hidden dtr-scrollspy"
            style="touch-action: pan-y; "
            aria-hidden="true"
            role="menu"
            transition:fade
          >
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#features"
                role="menuitem"
                tabindex="-1">Why Us</a
              >
            </li>
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#about"
                role="menuitem"
                tabindex="-1">About</a
              >
            </li>
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#features2"
                role="menuitem"
                tabindex="-1">Features</a
              >
            </li>
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#pricing"
                role="menuitem"
                tabindex="-1">Pricing</a
              >
            </li>
            <li>
              <a
                class="nav-link"
                on:click={toggleMenu}
                href="/#contact"
                role="menuitem"
                tabindex="-1">Contact</a
              >
            </li>
            {#if $session === null}
              <li>
                <a
                  class="nav-link"
                  on:click={toggleMenu}
                  href="/login"
                  role="menuitem"
                  tabindex="-1">Login</a
                >
              </li>
              <li>
                <a
                  class="nav-link"
                  on:click={toggleMenu}
                  href="/register"
                  role="menuitem"
                  tabindex="-1">Register</a
                >
              </li>
            {:else}
              <li>
                <a
                  class="nav-link"
                  on:click={toggleMenu}
                  href="/account"
                  role="menuitem"
                  tabindex="-1">Account</a
                >
              </li>
            {/if}
          </ul>
        </div>
      {/if}
    </div>
  </div>

  <!-- Small Devices Header ends 
============================================= -->

  <!-- Header 
============================================= -->
  <header id="dtr-header-global" class="fixed-top trans-header">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <!-- header left starts -->
        <div class="dtr-header-left">
          <!-- logo -->
          <a class="logo-default dtr-scroll-link" href="/"
            ><img {src} alt="logo" width="173" /></a
          >

          <!-- logo on scroll -->
          <a class="logo-alt dtr-scroll-link" href="/"
            ><img {src} alt="logo" width="173" /></a
          >
          <!-- logo on scroll ends -->
        </div>
        <!-- header left ends -->

        <!-- menu starts-->
        <div class="dtr-header-right ml-auto">
          <div class="main-navigation dtr-menu-dark">
            <ul
              class="sf-menu dtr-scrollspy dtr-nav dark-nav-on-load dark-nav-on-scroll"
            >
              <li><a class="nav-link" href="/#features">Why Us</a></li>
              <li><a class="nav-link" href="/#about">About</a></li>
              <li><a class="nav-link" href="/#features2">Features</a></li>
              <li><a class="nav-link" href="/#pricing">Pricing</a></li>
              <li><a class="nav-link" href="/#contact">Contact</a></li>
              {#if $session === null}
                <li><a class="nav-link" href="/login">Login</a></li>
                <li><a class="nav-link" href="/register">Register</a></li>
              {:else}
                <li><a class="nav-link" href="/account">Account</a></li>
              {/if}
            </ul>
          </div>
        </div>
        <!-- menu ends -->

        <!-- header button starts -->
        <a
          href="/checkout"
          class="dtr-btn dtr-btn-styled btn-red dtr-scroll-link dtr-ml-30"
          >Book a Pickup</a
        >
        <!-- header button ends -->
      </div>
    </div>
  </header>
  <!-- header ends
================================================== -->
{/if}
