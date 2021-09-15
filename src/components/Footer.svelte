<script>
  import { session } from "$app/stores";
  import supabase from "$lib/db";
  const handleSignout = async () => {
    let { error } = await supabase.auth.signOut();
    console.log(error);
  };
</script>

<!-- footer section starts
================================================== -->
<footer id="dtr-footer">
  <div class="container">
    <!--== row starts ==-->
    <div class="row">
      <!-- column 1 starts -->
      <div class="col-12 col-sm-6 col-lg-5 small-device-space">
        <img
          src="/assets/images/logo-light.png"
          alt="image1"
          class="dtr-mb-30"
        />
        <p class="dtr-mb-30">
          Get AI-assisted services for<br />
          smooth workflow.
        </p>
        <p>© 2020 Laundrygini. All right reserved.</p>

        <!-- social starts -->
        <div class="dtr-social-square dtr-mt-20">
          <ul class="dtr-social dtr-social-list text-left">
            <li>
              <a
                href="http://www.twitter.com"
                class="dtr-twitter"
                target="_blank"
                title="twitter">Twitter</a
              >
            </li>
            <li>
              <a
                href="http://www.facebook.com"
                class="dtr-facebook"
                target="_blank"
                title="facebook">Facebook</a
              >
            </li>
            <li>
              <a
                href="http://www.google.com"
                class="dtr-google"
                target="_blank"
                title="google">Google</a
              >
            </li>
          </ul>
        </div>
        <!-- social ends -->
      </div>
      <!-- column 1 ends -->

      <!-- column 2 starts -->
      <div class="col-12 col-sm-6 col-lg-2 small-device-space">
        <h5>Quick Links</h5>
        <ul class="dtr-list">
          <li><a href="/#features">Features</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#case">Use Cases</a></li>
          <li><a href="/#integration">Integrations</a></li>
          <li><a href="/#api">Ainotion API</a></li>
          {#if $session === null}
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          {:else}
            <li><a href="/account">Account</a></li>
            <li><a href="/" on:click={handleSignout}>Sign Out</a></li>
          {/if}
        </ul>
      </div>
      <!-- column 2 ends -->

      <!-- column 3 starts -->
      <div class="col-12 col-sm-6 col-lg-2 small-device-space">
        <h5>Company</h5>
        <ul class="dtr-list">
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#team">Our Team</a></li>
          <li><a href="/#news">news & Articles</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>
      <!-- column 3 ends -->

      <!-- column 4 starts -->
      <div class="col-12 col-sm-6 col-lg-3">
        <h5>Contact Us</h5>
        <p>3245 East Creek Blvd, Suite 590, Bos Boomer, AU 20076</p>
        <p>
          <a href="http://www.gmail.com"
            ><i class="icon-envelope dtr-mr-5 color-blue" /> mail@laundrygini.com</a
          >
        </p>
        <p><i class="icon-phone-alt dtr-mr-5 color-blue" /> 858585 5250</p>
      </div>
      <!-- column 4 ends -->
    </div>
    <!--== row ends ==-->
  </div>
</footer>
<!-- footer section ends
================================================== -->
