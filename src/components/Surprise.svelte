<script>
  import supabase from "$lib/db";
  import { session } from "$app/stores";

  let userEmail, userPassword;

  const handleSignin = async () => {
    let {
      user,
      session: supaSession,
      error,
    } = await supabase.auth.signIn({
      email: userEmail,
      password: userPassword,
    });
    $session = supaSession;
    console.log(user, session, error);
  };
</script>

<div class="container">
  <div class="dtr-styled-heading text-center">
    <h2>Login</h2>
    <p>Not registered? <a href="/register">Register</a> first!</p>
  </div>
  <div class="row">
    <div class="col-12 col-lg-8 offset-lg-2">
      <div class="dtr-form dtr-p-50 dtr-rounded-xl bg-white bx-shwd">
        <form
          id="contactform"
          on:submit|preventDefault={handleSignin}
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
                type="submit">Login</button
              >
            </p>
            <div id="result" />
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
