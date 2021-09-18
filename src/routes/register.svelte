<script context="module">
  export const prerender = true;
</script>

<script>
  import supabase from "$lib/db";
  import { session } from "$app/stores";
  import { goto } from "$app/navigation";
  import { notifications } from "$lib/notification";

  let userEmail, userPassword;

  const handleSignup = async () => {
    let {
      user,
      session: supaSession,
      error,
    } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    });
    if (error) {
      notifications.danger(error.message, 5000);
    } else {
      $session = supaSession;
      const { data, err } = await supabase
        .from("userData")
        .insert([{ user_id: user.id, email: userEmail }]);
      const { Data, erro } = await supabase
        .from("addressData")
        .insert([{ addressOf: user.id }]);
      goto("/");
      notifications.success(
        `Succesfully Registered with email ${userEmail}`,
        2000
      );
    }
  };
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
  <title>Register | Laundrygini</title>
</svelte:head>

<section
  id="home"
  class="dtr-section dtr-hero-section-top-padding dtr-pb-100 parallax bg-light-blue"
  style="background-image: url(/assets/images/hero-bg.png);background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {-y *
    0.4}px;"
>
  <div class="container">
    <div class="dtr-styled-heading text-center">
      <h2>Register</h2>
      <h6>Register with us Hassle Free</h6>
      <p>Already a member? <a href="/login">Login</a></p>
    </div>
    <div class="row">
      <div class="col-12 col-lg-8 offset-lg-2">
        <div class="dtr-form dtr-p-50 dtr-rounded-xl bg-white bx-shwd">
          <form
            id="contactform"
            on:submit|preventDefault={handleSignup}
            method="post"
          >
            <fieldset>
              <p>
                <input
                  name="email"
                  class="required email"
                  type="text"
                  placeholder="Email"
                  bind:value={userEmail}
                />
              </p>
              <p>
                <input
                  name="password"
                  class="required passowrd"
                  type="password"
                  placeholder="Password"
                  bind:value={userPassword}
                />
              </p>
              <p class="text-center">
                <button
                  class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
                  type="submit">Register</button
                >
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
</style>
