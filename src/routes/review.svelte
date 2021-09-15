<script context="module">
  export const prerender = true;
</script>

<script>
  import { browser } from "$app/env";
  import { servicesStore } from "$lib/stores";
  import { goto } from "$app/navigation";
  import { session } from "$app/stores";
  import Content from "../components/Content.svelte";
  import Modal from "svelte-simple-modal";

  const handleServices = async () => {
    if (browser) {
      goto("/address-details");
    }
  };
  if (
    $servicesStore["Dry Clean"] === false &&
    $servicesStore["Wash & Fold"] === false &&
    $servicesStore["Wash & Iron"] === false &&
    $servicesStore["Premium Laundry"] === false &&
    $servicesStore["Shoe Cleaning"] === false &&
    $servicesStore["Steam Press"] === false &&
    $servicesStore.Starching === false &&
    $servicesStore.Date === undefined
  ) {
    if (browser) {
      goto("/checkout");
    }
  }
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
  <title>Services | Laundrygini</title>
</svelte:head>
<section
  id="home"
  class="dtr-section dtr-hero-section-top-padding dtr-pb-100 parallax bg-light-blue"
  style="background-image: url(/assets/images/hero-bg.png);background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {-y *
    0.4}px;"
>
  <div class="container">
    <div class="dtr-styled-heading text-center">
      <h2>Review</h2>
      <p>Review your selection to avoid cancellation.</p>
    </div>
    <div class="row">
      <div class="col-12 col-lg-8 offset-lg-2">
        <div class="dtr-form dtr-p-50 dtr-rounded-xl bg-white bx-shwd">
          <form
            id="contactform"
            on:submit|preventDefault={handleServices}
            method="post"
          >
            <fieldset>
              <h6>Services Selected:</h6>
              <ul>
                {#if $servicesStore["Dry Clean"]}
                  <li><p>Dry Clean</p></li>
                {/if}
                {#if $servicesStore["Wash & Fold"]}
                  <li><p>Wash & Fold</p></li>
                {/if}
                {#if $servicesStore["Wash & Iron"]}
                  <li><p>Wash & Iron</p></li>
                {/if}
                {#if $servicesStore["Premium Laundry"]}
                  <li><p>Premium Laundry</p></li>
                {/if}
                {#if $servicesStore["Shoe Cleaning"]}
                  <li><p>Shoe Cleaning</p></li>
                {/if}
                {#if $servicesStore["Steam Press"]}
                  <li><p>Steam Press</p></li>
                {/if}
                {#if $servicesStore["Starching"]}
                  <li><p>Starching</p></li>
                {/if}
              </ul>
              <h6>Date Selected For Pickup:</h6>
              <ul>
                <li>
                  <p>
                    {$servicesStore.Date}
                  </p>
                </li>
              </ul>
              <p class="text-center">
                {#if $session != null}
                  <button
                    class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
                    type="submit">Proceed to add Address Details</button
                  >
                {/if}
              </p>
              <div id="result" />
            </fieldset>
          </form>
          {#if $session === null}
            <p class="text-center">
              <Modal>
                <Content />
              </Modal>
            </p>
          {/if}
          <p class="footertext text-center">
            *Avoid refreshing the page here. Refreshing the page here will
            redirect you to Services Page.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .bx-shwd {
    box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 10%);
  }
  ul {
    background: #f3f3f3;
    border-radius: 5px;
    list-style: none;
  }
  ul li {
    padding-left: 10px;
  }
  .footertext {
    margin-top: 5px;
    font-size: 10px;
  }
</style>
