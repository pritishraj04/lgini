<script context="module">
  export const prerender = true;
</script>

<script>
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";
  import { servicesStore } from "$lib/stores";
  import supabase from "$lib/db";
  import { session } from "$app/stores";
  const user = supabase.auth.user();
  let fullName,
    enteredStreetAdd,
    enteredLocalArea,
    enteredPincode,
    enteredPriPhone,
    enteredSecPhone;
  const handleServices = async () => {
    const { data, error } = await supabase
      .from("addressData")
      .update({
        name: fullName,
        streetAdd: enteredStreetAdd,
        localArea: enteredLocalArea,
        pincode: enteredPincode,
        priPhone: enteredPriPhone,
        secPhone: enteredSecPhone,
      })
      .match({ addressOf: user.id });
    if (browser) {
      goto("/confirmation");
    }
  };
  if (session === null) {
    if (browser) {
      goto("/review");
    }
  }
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
  <title>Address | Laundrygini</title>
</svelte:head>

<section
  id="home"
  class="dtr-section dtr-hero-section-top-padding dtr-pb-100 parallax bg-light-blue"
  style="background-image: url(/assets/images/hero-bg.png);background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {-y *
    0.4}px;"
>
  <div class="container">
    <div class="dtr-styled-heading text-center">
      <h2>Address</h2>
      <p>Provide address details to select the pickup location.</p>
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
                  name="name"
                  class="required name"
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  bind:value={fullName}
                />
              </p>
              <p>
                <input
                  name="streetAdd"
                  class="required streetAdd"
                  type="text"
                  id="streetAdd"
                  placeholder="Street Address, Flat Number, House Number"
                  bind:value={enteredStreetAdd}
                />
              </p>
              <p>
                <input
                  name="localArea"
                  class="required localArea"
                  type="text"
                  id="localArea"
                  placeholder="City, State, District"
                  bind:value={enteredLocalArea}
                />
              </p>
              <p>
                <input
                  name="pincode"
                  class="required pincode"
                  type="number"
                  min="100000"
                  max="999999"
                  id="pincode"
                  oninvalid="this.setCustomValidity('Enter a Valid 6-digit Pincode')"
                  placeholder="Pincode"
                  bind:value={enteredPincode}
                />
              </p>
              <p>
                <input
                  name="priPhone"
                  class="required priPhone"
                  type="number"
                  id="priPhone"
                  min="1000000000"
                  max="9999999999"
                  oninvalid="this.setCustomValidity('Enter a Valid 10-digit Phone Number')"
                  placeholder="Primary Phone number"
                  bind:value={enteredPriPhone}
                />
              </p>
              <p>
                <input
                  name="secPhone"
                  class="required secPhone"
                  type="number"
                  id="secPhone"
                  min="1000000000"
                  max="9999999999"
                  oninvalid="this.setCustomValidity('Enter a Valid 10-digit Phone Number')"
                  placeholder="Secondary Phone Number (Optional)"
                  bind:value={enteredSecPhone}
                />
              </p>
              <p class="text-center">
                {#if (fullName && enteredStreetAdd && enteredLocalArea && enteredPincode && enteredPriPhone) != undefined}
                  <button
                    class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
                    type="submit">Place Order</button
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
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
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
