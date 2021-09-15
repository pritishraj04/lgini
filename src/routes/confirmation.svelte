<script context="module">
  export const prerender = true;
</script>

<script>
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
  <title>Confirmation | Laundrygini</title>
</svelte:head>

<section
  id="home"
  class="dtr-section dtr-hero-section-top-padding dtr-pb-100 parallax bg-light-blue"
  style="background-image: url(/assets/images/hero-bg.png);background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {-y *
    0.4}px;"
>
  <div class="container">
    <div class="dtr-styled-heading text-center">
      <h1>Thank You!</h1>
      <p>Thank you for choosing us.</p>
    </div>
    <div class="row">
      <div class="col-12 col-lg-8 offset-lg-2">
        <div class="dtr-form dtr-p-50 dtr-rounded-xl bg-white bx-shwd">
          <div>
            <p class="text-center">Your order for pickup has been confirmed.</p>
            <p class="text-center">
              Our agent will get in touch with you for pickup on the choosen
              date. Please be available with the clothes on the pickup date.
            </p>
          </div>
          <p class="text-center">
            <a
              href="/account"
              class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
              type="submit">Account</a
            >
            <a
              href="/"
              disabled
              class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
              type="submit">Home</a
            >
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
</style>
