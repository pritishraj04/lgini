<script context="module">
  export const prerender = true;
</script>

<script>
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";
  import { servicesStore } from "$lib/stores";
  let dryclean = false,
    washfold = false,
    washiron = false,
    premiumLaundry = false,
    shoeCleaning = false,
    steamPress = false,
    starching = false;

  const handleServices = async () => {
    $servicesStore["Dry Clean"] = dryclean;
    $servicesStore["Wash & Fold"] = washfold;
    $servicesStore["Wash & Iron"] = washiron;
    $servicesStore["Premium Laundry"] = premiumLaundry;
    $servicesStore["Shoe Cleaning"] = shoeCleaning;
    $servicesStore["Steam Press"] = steamPress;
    $servicesStore.Starching = starching;
    if (browser) {
      goto("/time-slot");
    }
  };
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
      <h2>Services</h2>
      <p>Choose from various Services.</p>
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
              <p>
                <input
                  name="dryclean"
                  class="required dryclean"
                  type="checkbox"
                  id="dryclean"
                  bind:checked={dryclean}
                />
                <label for="dryclean">Dry Clean</label>
              </p>
              <p>
                <input
                  name="washfold"
                  class="required washfold"
                  type="checkbox"
                  id="washfold"
                  bind:checked={washfold}
                /><label for="washfold">Wash & Fold</label>
              </p>
              <p>
                <input
                  name="washiron"
                  class="required washiron"
                  type="checkbox"
                  id="washiron"
                  bind:checked={washiron}
                /><label for="washiron">Wash & Iron</label>
              </p>
              <p>
                <input
                  name="premiumLaundry"
                  class="required premium"
                  type="checkbox"
                  id="premiumLaundry"
                  bind:checked={premiumLaundry}
                /><label for="premiumLaundry">Premium Laundry</label>
              </p>
              <p>
                <input
                  name="shoeCleaning"
                  class="required shoeCleaning"
                  type="checkbox"
                  id="shoeCleaning"
                  bind:checked={shoeCleaning}
                /><label for="shoeCleaning">Shoe Cleaning</label>
              </p>
              <p>
                <input
                  name="steamPress"
                  class="required steamPress"
                  type="checkbox"
                  id="steamPress"
                  bind:checked={steamPress}
                /><label for="steamPress">Steam Press</label>
              </p>
              <p>
                <input
                  name="starching"
                  class="required starching"
                  type="checkbox"
                  id="starching"
                  bind:checked={starching}
                /><label for="starching">Starching</label>
              </p>
              <p class="text-center">
                {#if (dryclean || washfold || washiron || premiumLaundry || shoeCleaning || steamPress || starching) != false}
                  <button
                    class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
                    type="submit">Proceed</button
                  >
                {:else}
                  <button
                    disabled
                    class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
                    type="submit">Proceed</button
                  >
                {/if}
              </p>
              <div id="result" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .bx-shwd {
    box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 10%);
  }
  input + label {
    display: inline;
  }
  button:disabled {
    background: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.8);
    cursor: initial;
    box-shadow: 0px 5px 15px 5px rgb(0 0 0 / 15%);
  }
</style>
