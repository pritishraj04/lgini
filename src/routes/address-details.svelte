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
  const userAdd = async () => {
    let { data, error } = await supabase
      .from("addressData")
      .select("*")
      .eq("addressOf", user.id);
    if (data) {
      return data;
    } else {
      console.log(error);
    }
  };
  let userAddress = userAdd();
  if ($servicesStore.orderAddress === {}) {
    if (browser) {
      goto("/edit-address-details");
    }
  }
  const handleServices = async () => {
    const { data, error } = await supabase.from("orders").insert([
      {
        services: {
          "Dry Clean": $servicesStore["Dry Clean"],
          "Wash & Fold": $servicesStore["Wash & Fold"],
          "Wash & Iron": $servicesStore["Wash & Iron"],
          "Premium Laundry": $servicesStore["Premium Laundry"],
          "Shoe Cleaning": $servicesStore["Shoe Cleaning"],
          "Steam Press": $servicesStore["Steam Press"],
          Starching: $servicesStore.Starching,
        },
        address: $servicesStore.orderAddress,
        pickup_date: $servicesStore.Date,
        ordered_by: user.id,
        status: "In-Process",
      },
    ]);
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
        {#await userAddress}
          <p>...Loading</p>
        {:then userAddress}
          {#if userAddress[0].priPhone != null}
            <div
              class="dtr-form dtr-p-50 dtr-mb-30 dtr-rounded-xl bg-white bx-shwd"
            >
              <div>
                <fieldset>
                  <h6>Current Address:</h6>
                  <p>
                    Name: {userAddress[0].name}
                  </p>
                  <p>
                    Street Address: {userAddress[0].streetAdd}
                  </p>
                  <p>
                    City: {userAddress[0].localArea}
                  </p>
                  <p>
                    Pincode: {userAddress[0].pincode}
                  </p>
                  <p>
                    Primmary Mobile Number: {userAddress[0].priPhone}
                  </p>
                  {#if userAddress[0].secPhone != null}
                    <p>
                      Secondary Mobile Number: {userAddress[0].secPhone}
                    </p>
                  {/if}
                  {($servicesStore.orderAddress = {
                    Name: userAddress[0].name,
                    "Street Address": userAddress[0].streetAdd,
                    City: userAddress[0].localArea,
                    Pincode: userAddress[0].pincode,
                    "Primmary Mobile Number": userAddress[0].priPhone,
                    "Secondary Mobile Number": userAddress[0].secPhone,
                  })}
                  <p class="text-center">
                    <button
                      on:click={() => {
                        if (browser) {
                          goto("/edit-address-details");
                        }
                      }}
                      class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
                      >Edit Address</button
                    >
                    <button
                      on:click={handleServices}
                      class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
                      >Place Order with Current Address</button
                    >
                  </p>
                  <div id="result" />
                </fieldset>
              </div>
              <p class="footertext text-center">
                *Avoid refreshing the page here. Refreshing the page here will
                redirect you to Services Page.
              </p>
            </div>
          {/if}
        {:catch error}
          <p>{error}</p>
        {/await}
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
