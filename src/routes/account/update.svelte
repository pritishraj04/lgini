<script context="module">
  export const prerender = true;
</script>

<script>
  import supabase from "$lib/db";
  import { goto } from "$app/navigation";
  import { browser } from "$app/env";
  let username, emailid, mobno;
  const user = supabase.auth.user();

  // export let today = new Date();
  // let dd = today.getDate();
  // let mm = today.getMonth() + 1;
  // let yyyy = today.getFullYear();

  // if (dd < 10) {
  //   dd = "0" + dd;
  // }
  // if (mm < 10) {
  //   mm = "0" + mm;
  // }

  // today = yyyy + "-" + mm + "-" + dd;

  const handleUpdate = async () => {
    const { data, error } = await supabase
      .from("userData")
      .update({ Name: username, Mob: mobno, email: emailid })
      .eq("user_id", user.id);
    if (browser) {
      goto("/account");
    }
  };
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
  <title>Account | Laundrygini</title>
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
        <h1>Update Your Profile</h1>
        <form on:submit|preventDefault={handleUpdate} method="post">
          <fieldset>
            <p>
              <input
                type="text"
                id="fullName"
                title="Enter your full name."
                placeholder="Name"
                bind:value={username}
              />
            </p>
          </fieldset>
          <fieldset>
            <p>
              <input
                type="number"
                id="mobileNo"
                min="1000000000"
                max="9999999999"
                title="Enter valid mobile number."
                placeholder="Mobile Number"
                bind:value={mobno}
              />
            </p>
          </fieldset>
          <fieldset>
            <p>
              <input
                type="email"
                id="mobNo"
                title="Enter a valid email address."
                placeholder="Email Address"
                bind:value={emailid}
              />
            </p>
          </fieldset>
          <p class="text-center">
            <button
              class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
              type="submit"
            >
              Update
            </button>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
