<script context="module">
  export const prerender = true;
</script>

<script>
  import { session } from "$app/stores";
  import supabase from "$lib/db";
  import { goto } from "$app/navigation";
  import { fade } from "svelte/transition";
  const handleSignout = async () => {
    let { error } = await supabase.auth.signOut();
    goto("/");
  };

  const user = supabase.auth.user();
  const userD = async () => {
    const { data, error } = await supabase
      .from("userData")
      .select("*")
      .eq("user_id", user.id);
    if (data) {
      return data;
    } else {
      console.log(error);
    }
  };
  const orderD = async () => {
    let { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("ordered_by", user.id);
    if (data) {
      return data;
    } else {
      console.log(error);
    }
  };
  let orderData = orderD();
  let userData = userD();
  let isOrderShown = [];
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
  <title>Profile | Laundrygini</title>
</svelte:head>
<section
  id="home"
  class="dtr-section dtr-hero-section-top-padding dtr-pb-100 parallax bg-light-blue"
  style="background-image: url(/assets/images/hero-bg.png);background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {-y *
    0.4}px;"
>
  <div class="container">
    <!--== row starts ==-->
    <div class="row dtr-p-20 dtr-rounded-xl bg-white bx-shwd">
      <!-- column 1 starts -->
      <div class="col-md-12 col-md-3">
        <!-- Heading -->
        <h1>Profile</h1>
        {#if $session === null}
          <h6>Please <a href="/login">Login</a> to view your profile.</h6>
        {:else}
          <h4>Hello,</h4>
          {#if user != null}
            {#await userData}
              <p>...waiting</p>
            {:then userData}
              {#if userData[0].Name === null}
                <h3 class="color-blue nouser">User</h3>
                <p class="small-text">
                  (Update your name using the link provded below.)
                </p>
              {:else}
                <h3 class="color-blue">{userData[0].Name}</h3>
              {/if}
              <button
                class="dtr-btn-small signout-btn"
                on:click|preventDefault={handleSignout}>Sign Out</button
              >
              <table>
                {#if userData[0].Mob != null}
                  <tr
                    ><th>Mobile Number:</th>
                    <td>{userData[0].Mob}</td></tr
                  >
                {:else}
                  <tr
                    ><th>Mobile Number:</th>
                    <td class="no-data"
                      >No User Data Found. <p class="small-text">
                        (Update your Mobile Number using the link provded
                        below.)
                      </p></td
                    ></tr
                  >
                {/if}
                {#if userData[0].email != null}
                  <tr
                    ><th>Email Id:</th>
                    <td>{userData[0].email}</td></tr
                  >
                {:else}
                  <tr
                    ><th>Email Id:</th>
                    <td class="no-data"
                      >No User Data Found. <p class="small-text">
                        (Update your Email using the link provded below.)
                      </p></td
                    ></tr
                  >
                {/if}
              </table>
            {:catch error}
              <p style="color: red">{error.message}</p>
            {/await}
            <a href="/account/update">Update Profile</a>
          {:else}
            Loading...
          {/if}
        {/if}
      </div>
    </div>
    <div class="row dtr-p-20 dtr-mt-50 dtr-rounded-xl bg-white bx-shwd">
      <!-- column 1 starts -->
      <div class="col-md-12 col-md-3">
        <!-- Heading -->
        <h1>Bookings History</h1>
        {#if $session === null}
          <h6>Please <a href="/login">Login</a> to view your bookings.</h6>
        {:else}
          {#await orderData}
            Loading...
          {:then orderData}
            {#if orderData[0] != undefined}
              {#each orderData as item, i (item)}
                <div
                  class={isOrderShown[i]
                    ? "order-card dtr-mt-50 dtr-mb-50"
                    : "order-card dtr-mt-10 dtr-mb-10 notShown"}
                  on:click={() => {
                    isOrderShown[i] = !isOrderShown[i];
                  }}
                >
                  <fieldset>
                    <h5>Order No:</h5>
                    <p>{item.id}</p>
                  </fieldset>
                  {#if isOrderShown[i]}
                    <div transition:fade class="order-detail">
                      <fieldset>
                        <h6>Name:</h6>
                        <p>{item.address.Name}</p>
                      </fieldset>
                      <fieldset>
                        <h6>Address:</h6>
                        <p>
                          {item.address["Street Address"]}, {item.address.City}, {item
                            .address.Pincode}
                        </p>
                      </fieldset>
                      <fieldset>
                        {#if item.address["Secondary Mobile Number"]}
                          <h6>Mobile Numbers:</h6>
                          <p>
                            {item.address["Primmary Mobile Number"]}, {item
                              .address["Secondary Mobile Number"]}
                          </p>
                        {:else}
                          <h6>Mobile Number:</h6>
                          <p>
                            {item.address["Primmary Mobile Number"]}
                          </p>
                        {/if}
                      </fieldset>
                      <fieldset>
                        <h6>Services Selected:</h6>
                        <ul>
                          {#each Object.entries(item.services) as [serv, isServ]}
                            {#if isServ}
                              <li><p>{serv}</p></li>
                            {/if}
                          {/each}
                        </ul>
                      </fieldset>
                      <fieldset>
                        <h6>Date of pickup:</h6>
                        <p>{item.pickup_date}</p>
                      </fieldset>
                      <fieldset>
                        {#if item.status === "Order received"}
                          <p class="order-blue">Status: {item.status}</p>
                        {:else if item.status === "Picked Up"}
                          <p class="order-yellow">Status: {item.status}</p>
                        {:else if item.status === "Cancled"}
                          <p class="order-red">Status: {item.status}</p>
                        {:else if item.status === "Completed"}
                          <p class="order-green">Status: {item.status}</p>
                        {:else}
                          <p>Status: {item.status}</p>
                        {/if}
                      </fieldset>
                    </div>
                  {:else}
                    <fieldset>
                      <h6>Date of pickup:</h6>
                      <p>{item.pickup_date}</p>
                    </fieldset>
                    <fieldset>
                      {#if item.status === "Order received"}
                        <p class="order-blue">Status: {item.status}</p>
                      {:else if item.status === "Picked Up"}
                        <p class="order-yellow">Status: {item.status}</p>
                      {:else if item.status === "Cancled"}
                        <p class="order-red">Status: {item.status}</p>
                      {:else if item.status === "Completed"}
                        <p class="order-green">Status: {item.status}</p>
                      {:else}
                        <p>Status: {item.status}</p>
                      {/if}
                    </fieldset>
                  {/if}
                </div>
              {/each}
            {:else}
              <fieldset><p>No Order history found</p></fieldset>
            {/if}
          {:catch error}
            <p style="color: red">{error.message}</p>
          {/await}
        {/if}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .no-data {
    background: orangered;
    padding: 0.2em 0.5em;
    border-radius: 2px;
    display: inline-block;
  }
  .nouser {
    display: inline-block;
  }
  .small-text {
    display: inline-block;
    font-size: 10px;
  }
  table {
    padding: 0.5em;
    width: 100%;
    row-gap: 10px;
    tr {
      font-size: 3em;
      margin: 0.3em;
      th {
        font-size: 0.3em;
        margin: 0.5em;
      }
      td {
        font-size: 0.3em;
        margin: 0.3em;
        padding: 0.2em 0.3em;
      }
      /* &:last-child {
        font-size: 0.6em;
      } */
    }
  }
  .signout-btn {
    right: 40px;
    top: 50px;
    position: absolute;
  }
  .bx-shwd {
    box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 10%);
  }
  ul {
    background: #f3f3f3;
    border-radius: 5px;
    list-style: inside;
  }
  ul li {
    padding-left: 10px;
  }
  .order-blue {
    color: rgb(28, 141, 247);
  }
  .order-yellow {
    color: rgb(218, 214, 2);
  }
  .order-red {
    color: rgb(226, 21, 6);
  }
  .order-green {
    color: rgb(112, 190, 10);
  }
  .order-card {
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.5s;
    cursor: pointer;
  }
  .order-card .order-detail {
    padding-left: 30px;
  }
  fieldset {
    margin-bottom: 15px;
  }
  fieldset h6,
  fieldset h5,
  fieldset p {
    display: unset;
  }
  .notShown {
    display: flex;
    justify-content: space-around;
    padding-top: 40px;
    flex-wrap: wrap;
  }
</style>
