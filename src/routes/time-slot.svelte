<script context="module">
  export const prerender = true;
</script>

<script>
  import { servicesStore } from "$lib/stores";
  import { goto } from "$app/navigation";
  import { browser } from "$app/env";
  let chosenDate;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let maxdd = String(parseInt(dd) + 5).padStart(2, "0");
  let minDate = yyyy + "-" + mm + "-" + dd;
  const calMaxDate = () => {
    if (
      (mm === "01" ||
        mm === "03" ||
        mm === "05" ||
        mm === "07" ||
        mm === "08" ||
        mm === "10") &&
      maxdd > 31
    ) {
      maxdd -= 31;
      mm = parseInt(mm);
      mm += 1;
      mm = String(mm).padStart(2, "0");
    } else if (mm === "12" && maxdd > 31) {
      maxdd -= 31;
      mm = "01";
      yyyy += 1;
    } else if (
      (mm === "04" || mm === "06" || mm === "09" || mm === "11") &&
      maxdd > 30
    ) {
      maxdd -= 30;
      mm = parseInt(mm);
      mm += 1;
      mm = String(mm).padStart(2, "0");
    } else if (mm === "02" && yyyy % 4 === 0 && maxdd > 29) {
      maxdd -= 29;
      mm = parseInt(mm);
      mm += 1;
      mm = String(mm).padStart(2, "0");
    } else if (mm === "02" && yyyy % 4 != 0 && maxdd > 28) {
      maxdd -= 28;
      mm = parseInt(mm);
      mm += 1;
      mm = String(mm).padStart(2, "0");
    } else {
      maxdd = maxdd;
      mm = mm;
      yyyy = yyyy;
    }
    let maxDate = yyyy + "-" + mm + "-" + maxdd;
    return maxDate;
  };
  let maxDate = calMaxDate();

  const handleServices = async () => {
    $servicesStore.Date = chosenDate;
    if (browser) {
      goto("/review");
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
  <title>Time Slot | Laundrygini</title>
</svelte:head>

<section
  id="home"
  class="dtr-section dtr-hero-section-top-padding dtr-pb-100 parallax bg-light-blue"
  style="background-image: url(/assets/images/hero-bg.png);background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {-y *
    0.4}px;"
>
  <div class="container">
    <div class="dtr-styled-heading text-center">
      <h2>Time Slot</h2>
      <p>Pick a date and time slot.</p>
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
                  type="date"
                  min={minDate}
                  max={maxDate}
                  bind:value={chosenDate}
                />
              </p>
              <p class="text-center">
                {#if chosenDate}
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
  button:disabled {
    background: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.8);
    cursor: initial;
    box-shadow: 0px 5px 15px 5px rgb(0 0 0 / 15%);
  }
  button:disabled:hover {
    color: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.12);
  }
  .footertext {
    margin-top: 5px;
    font-size: 10px;
  }
</style>
