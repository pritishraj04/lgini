<script context="module">
  export const prerender = true;
</script>

<script>
  import { session } from "$app/stores";
  import supabase from "$lib/db";
  import { goto } from "$app/navigation";
  const handleSignout = async () => {
    let { error } = await supabase.auth.signOut();
    goto("/");
    console.log(error);
  };

  const user = supabase.auth.user();
  const userD = async () => {
    const { data, error } = await supabase.from("userData").select("*");
    if (data) {
      return data;
    } else {
      console.log(error);
    }
  };
  let userData = userD();
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
              <h3 class="color-blue">{userData[0].Name}</h3>
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
                    <td class="no-data">No User Data Found.</td></tr
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
                    <td class="no-data">No User Data Found.</td></tr
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
        <h1>Ongoing Bookings</h1>
        {#if $session === null}
          <h6>Please <a href="/login">Login</a> to view your bookings.</h6>
        {:else}
          <div class="order-card dtr-mt-50 dtr-mb-50">
            <fieldset><h5>Order No. 1</h5></fieldset>
            <div class="order-detail">
              <fieldset>
                <h6>Services Selected:</h6>
                <ul>
                  <li><p>Wash and Iron</p></li>
                  <li><p>DryClean</p></li>
                </ul>
              </fieldset>
              <fieldset>
                <h6>Date of pickup:</h6>
                <ul><li><p>10/02/2022</p></li></ul>
              </fieldset>
              <fieldset>
                <p class="in-progress">Status: In-progress</p>
              </fieldset>
            </div>
          </div>
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
          <div class="order-card dtr-mt-50 dtr-mb-50">
            <fieldset><h5>Order No. 1</h5></fieldset>
            <div class="order-detail">
              <fieldset>
                <h6>Services Selected:</h6>
                <ul>
                  <li><p>Wash and Iron</p></li>
                  <li><p>DryClean</p></li>
                </ul>
              </fieldset>
              <fieldset>
                <h6>Date of pickup:</h6>
                <ul><li><p>10/02/2022</p></li></ul>
              </fieldset>
              <fieldset>
                <p class="in-progress">Status: In-progress</p>
              </fieldset>
            </div>
          </div>
          <div class="order-card dtr-mt-50 dtr-mb-50">
            <fieldset><h5>Order No. 2</h5></fieldset>
            <div class="order-detail">
              <fieldset>
                <h6>Services Selected:</h6>
                <ul>
                  <li><p>Wash and Iron</p></li>
                  <li><p>DryClean</p></li>
                </ul>
              </fieldset>
              <fieldset>
                <h6>Date of pickup:</h6>
                <ul><li><p>10/02/2022</p></li></ul>
              </fieldset>
              <fieldset>
                <p class="in-progress">Status: In-progress</p>
              </fieldset>
            </div>
          </div>
          <div class="order-card dtr-mt-50 dtr-mb-50">
            <fieldset><h5>Order No. 3</h5></fieldset>
            <div class="order-detail">
              <fieldset>
                <h6>Services Selected:</h6>
                <ul>
                  <li><p>Wash and Iron</p></li>
                  <li><p>DryClean</p></li>
                </ul>
              </fieldset>
              <fieldset>
                <h6>Date of pickup:</h6>
                <ul><li><p>10/02/2022</p></li></ul>
              </fieldset>
              <fieldset>
                <p class="in-progress">Status: In-progress</p>
              </fieldset>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .no-data {
    background: orangered;
    padding: 0.2em;
    border-radius: 2px;
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
    list-style: none;
  }
  ul li {
    padding-left: 10px;
  }
  .in-progress {
    color: rgb(112, 224, 0);
  }
  .order-card {
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 10px;
  }
  .order-card .order-detail {
    padding-left: 30px;
  }
</style>
