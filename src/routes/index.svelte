<script context="module">
  export const prerender = true;
</script>

<script>
  // import { onMount } from "svelte";

  // let Swiper, SwiperSlide, SwiperCore, Autoplay;

  // onMount(async () => {
  //   const module = await import("swiper/svelte");
  //   Swiper = module.Swiper;
  //   SwiperSlide = module.SwiperSlide;
  // });

  // onMount(async () => {
  //   const module = await import("swiper");
  //   SwiperCore = module.SwiperCore;
  //   Autoplay = module.Autoplay;
  // });
  // onMount(async () => {
  //   await import("swiper/css");
  // });

  // import "swiper/css";

  // import Swiper core and required modules
  // onMount(async () => {
  //   await SwiperCore.use([Autoplay]);
  // });
  // install Swiper modules
  let y = 0;
</script>

<svelte:head>
  <title>Home | Laundrygini</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<!-- hero section starts
================================================== -->
<section>
  <section
    id="home"
    class="dtr-section dtr-hero-section-top-padding dtr-pb-100 parallax bg-light-blue"
    style="background-image: url(/assets/images/hero-bg.png);background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {-y *
      0.4}px;"
  >
    <div class="container">
      <!--== row starts ==-->
      <div class="row">
        <!-- column 1 starts -->
        <div class="col-12 col-md-6">
          <!-- Heading -->
          <h1>
            Laundrygini<br />
            <span class="color-blue">The smart way to clean</span>
          </h1>

          <!-- Text -->
          <p>
            Londrygini is a brand that stands for a good, clean time for all. We
            pride overs-elves in being the best hasel free laundry service in
            the city.
            <br />
            From pickup to doorstep delivery Laundrygini got you covered!
          </p>

          <!-- button -->
          <a href="/checkout" class="dtr-btn dtr-btn-styled btn-red dtr-mt-10"
            >Book a Pickup</a
          >
          <a
            class="dtr-btn btn-blue dtr-icon-btn dtr-video-popup dtr-mt-10"
            data-autoplay="true"
            data-vbtype="video"
            href="https://www.youtube.com/watch?v=kuceVNBTJio"
            ><i class="icon-play1" /></a
          >
          <p class="text-size-xs dtr-mt-10">
            You can reach us on WhatsApp for more information.
          </p>
        </div>
        <!-- column 1 ends -->

        <!-- column 2 starts -->
        <div class="col-12 col-md-6 small-device-space">
          <img src="/assets/images/hero-img.png" alt="image1" />
        </div>
        <!-- column 2 ends -->
      </div>
      <!--== row ends ==-->
    </div>
  </section>
  <!-- hero section ends
================================================== -->

  <!-- logo carousel section starts
================================================== -->
  <section class="dtr-section dtr-py-50">
    <div class="container">
      <!--== row starts ==-->
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1">
          <!-- <Swiper
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                width: 378,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
              },
              1020: {
                slidesPerView: 5,
              },
              1220: {
                slidesPerView: 6,
              },
            }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            class="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img src="/assets/images/client-1.png" alt="image1" />
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div>
                <img src="/assets/images/client-2.png" alt="image2" />
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div>
                <img src="/assets/images/client-3.png" alt="image3" />
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div>
                <img src="/assets/images/client-4.png" alt="image4" />
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div>
                <img src="/assets/images/client-5.png" alt="image5" />
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div>
                <img src="/assets/images/client-6.png" alt="image6" />
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div>
                <img src="/assets/images/client-1.png" alt="image7" />
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div>
                <img src="/assets/images/client-2.png" alt="image8" />
              </div></SwiperSlide
            >
          </Swiper> -->
        </div>
      </div>
      <!--== row ends ==-->
    </div>
  </section>
  <!-- logo carousel section ends
================================================== -->

  <!-- features section starts
================================================== -->
  <section id="features" class="dtr-section dtr-pt-50 dtr-pb-70">
    <div class="container">
      <!-- heading starts -->
      <div class="dtr-styled-heading text-center">
        <h2>
          Why everyone loves<br />
          Ainotion
        </h2>
      </div>
      <!-- heading ends -->

      <!--== row starts ==-->
      <div class="row">
        <!-- column 1 starts -->
        <div class="col-12 col-md-4 dtr-img-feature">
          <h3><span class="color-blue">1.</span> Radical</h3>
          <p class="font-style-italic">Nam libero tempore soluta nobis.</p>
          <img src="/assets/images/icon-large1.png" alt="image1" />
          <p>
            Lorem ipsum dolor sit amet nam consectetur adipiscing elit eiusmo
            tempor incididunt.
          </p>
        </div>
        <!-- column 1 ends -->

        <!-- column 2 starts -->
        <div class="col-12 col-md-4 dtr-img-feature">
          <h3><span class="color-blue">2.</span> Automated</h3>
          <p class="font-style-italic">Nam libero tempore soluta nobis.</p>
          <img src="/assets/images/icon-large2.png" alt="image1" />
          <p>
            Lorem ipsum dolor sit amet nam consectetur adipiscing elit eiusmo
            tempor incididunt.
          </p>
        </div>
        <!-- column 2 ends -->

        <!-- column 3 starts -->
        <div class="col-12 col-md-4 dtr-img-feature">
          <h3><span class="color-blue">3.</span> Instant</h3>
          <p class="font-style-italic">Nam libero tempore soluta nobis.</p>
          <img src="/assets/images/icon-large3.png" alt="image1" />
          <p>
            Lorem ipsum dolor sit amet nam consectetur adipiscing elit eiusmo
            tempor incididunt.
          </p>
        </div>
        <!-- column 3 ends -->
      </div>
      <!--== row ends ==-->
    </div>
  </section>
  <!-- features section ends
================================================== -->

  <!-- cta section starts
================================================== -->
  <section
    class="dtr-section dtr-py-100 bg-light-blue parallax"
    style="background-image: url(/assets/images/cta-bg.png); background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {619.72 -
      y * 0.4}px;"
  >
    <div class="container">
      <!--== row starts ==-->
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <p>Grow revenue with lower costs</p>
          <h4>
            AI powered system, that automates support for your customers and
            employees.
          </h4>
        </div>
        <div class="col-12 col-md-6 text-md-right">
          <a href="/checkout" class="dtr-btn dtr-btn-styled btn-red"
            >Request a Demo</a
          >
          <a href="/checkout" class="dtr-btn-flat btn-flat-blue dtr-ml-5"
            >Learn More</a
          >
        </div>
      </div>
      <!--== row ends ==-->
    </div>
  </section>
  <!-- cta section ends
================================================== -->

  <!-- about section starts
================================================== -->
  <section id="about" class="dtr-section">
    <div class="container">
      <!--== row 1 starts ==-->
      <div class="row dtr-pt-100">
        <!-- column 1 starts -->
        <div class="col-12 col-md-6 small-device-space">
          <img src="/assets/images/ai-img1.png" alt="image1" />
        </div>
        <!-- column 1 ends -->

        <!-- column 2 starts -->
        <div class="col-12 col-md-6">
          <div class="dtr-pl-30">
            <h2>Analyze data with built-in digital tools.</h2>
            <p>
              Nam libero tempore cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda omnis dolor repellendus. Temporibus autem
              quibusdam debitis aut rerum necessitatibus saepe eveniet
              voluptates sint.
            </p>
            <ul class="dtr-icon-list dtr-my-20">
              <li>
                <i class="icon-check-circle2 color-blue" />Lorem ipsum dolor sit
                amet
              </li>
              <li>
                <i class="icon-check-circle2 color-blue" />Vero facil accusamus
                dores iusto odio
              </li>
              <li>
                <i class="icon-check-circle2 color-blue" />Optio cumque nihil
              </li>
            </ul>
            <a
              href="#testimonial"
              class="dtr-btn-small btn-light-blue dtr-scroll-link"
              ><span>Reviews</span> View all feedbacks</a
            >
          </div>
        </div>
        <!-- column 2 ends -->
      </div>
      <!--== row 1 ends ==-->

      <!--== row 2 starts ==-->
      <div class="row dtr-mt-100">
        <!-- column 1 starts -->
        <div class="col-12 col-md-6">
          <div class="dtr-pr-30">
            <h2>Improve customer satisfaction at all hours.</h2>
            <p class="dtr-mb-30">
              Nam libero tempore cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda omnis dolor repellendus. Temporibus autem
              quibusdam debitis aut rerum necessitatibus saepe eveniet
              voluptates sint.
            </p>
            <span class="dtr-tag">Lorem Ipsum</span>
            <span class="dtr-tag">Dolor Sit amet</span>
            <span class="dtr-tag">Lorem Ipsum</span>
            <span class="dtr-tag">Dolor Sit</span>
            <span class="dtr-tag">Lorem Ipsum</span>
            <span class="dtr-tag">Dolor Sit amet</span>
            <span class="dtr-tag">Lorem Ipsum amet</span>
            <span class="dtr-tag">Dolor Sit</span>
            <span class="dtr-tag">Lorem amet Ipsum</span>
            <span class="dtr-tag">Dolor amet Sit amet</span>
          </div>
        </div>
        <!-- column 1 ends -->

        <!-- column 2 starts -->
        <div class="col-12 col-md-6 small-device-space">
          <img src="/assets/images/ai-img2.png" alt="image1" />
        </div>
        <!-- column 2 ends -->
      </div>
      <!--== row 2 ends ==-->
    </div>
  </section>
  <!-- about section ends
================================================== -->

  <!-- testimonial section starts
================================================== -->
  <section id="testimonial" class="dtr-section dtr-py-100">
    <!-- heading starts -->
    <div class="dtr-styled-heading text-center">
      <h2>Our clients love us</h2>
      <p>
        Ainotion has earned 4.9 stars in the aspernatur aut odit aut fugit, sed
        quia consequntur<br />
        magni dolores eos qui ratione voluptatem sequi nesciunt
      </p>
    </div>
    <!-- heading ends -->

    <!--===== testimonial slider starts =====-->
    <!-- <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          width: 378,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
        1220: {
          slidesPerView: 4,
        },
      }}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      class="mySwiper dtr-testimonial-slider dtr-my-50"
    >
      <SwiperSlide class="dtr-testimonial">
        <div class="dtr-testimonial-content clearfix">
          <p>
            “Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod
            tempor incididunt labore dolore magna aliqua.”
          </p>
          <div class="dtr-client-info clearfix">
            <div class="dtr-testimonial-user">
              <span class="dtr-testimonial-icon" />
              <img src="/assets/images/user-1.jpg" alt="image1" />
            </div>
            <div class="dtr-testimonial-user-info">
              <h6 class="dtr-client-name">Chris Krammes</h6>
              <span class="dtr-client-job">CEO, AIone</span>
            </div>
          </div>
        </div></SwiperSlide
      >
      <SwiperSlide class="dtr-testimonial">
        <div class="dtr-testimonial-content clearfix">
          <p>
            “Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod
            tempor incididunt labore dolore magna aliqua.”
          </p>
          <div class="dtr-client-info clearfix">
            <div class="dtr-testimonial-user">
              <span class="dtr-testimonial-icon" />
              <img src="/assets/images/user-2.jpg" alt="image1" />
            </div>
            <div class="dtr-testimonial-user-info">
              <h6 class="dtr-client-name">Roslyn Tryniski</h6>
              <span class="dtr-client-job">Entrepreneur, Denmark</span>
            </div>
          </div>
        </div>
</SwiperSlide
      >
      <SwiperSlide class="dtr-testimonial">

        <div class="dtr-testimonial-content clearfix">
          <p>
            “Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod
            tempor incididunt labore dolore magna aliqua.”
          </p>


          <div class="dtr-client-info clearfix">
            <div class="dtr-testimonial-user">
              <span class="dtr-testimonial-icon" />
              <img src="/assets/images/user-3.jpg" alt="image1" />
            </div>
            <div class="dtr-testimonial-user-info">
              <h6 class="dtr-client-name">Tyrese Harper</h6>
              <span class="dtr-client-job">CTO, Bigacme</span>
            </div>
          </div>

        </div>
</SwiperSlide
      >
      <SwiperSlide class="dtr-testimonial">
        <div class="dtr-testimonial-content clearfix">
          <p>
            “Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod
            tempor incididunt labore dolore magna aliqua.”
          </p>


          <div class="dtr-client-info clearfix">
            <div class="dtr-testimonial-user">
              <span class="dtr-testimonial-icon" />
              <img src="/assets/images/user-6.jpg" alt="image1" />
            </div>
            <div class="dtr-testimonial-user-info">
              <h6 class="dtr-client-name">Christina Brown</h6>
              <span class="dtr-client-job">Project Lead</span>
            </div>
          </div>

        </div>
</SwiperSlide
      >
      <SwiperSlide class="dtr-testimonial">

        <div class="dtr-testimonial-content clearfix">
          <p>
            “Lorem ipsum dolor sit amet consect adipiscing elit, sed do eiusmod
            tempor incididunt labore dolore magna aliqua.”
          </p>

          <div class="dtr-client-info clearfix">
            <div class="dtr-testimonial-user">
              <span class="dtr-testimonial-icon" /><img
                src="/assets/images/user-7.jpg"
                alt="image1"
              />
            </div>
            <div class="dtr-testimonial-user-info">
              <h6 class="dtr-client-name">Ryan Crawford</h6>
              <span class="dtr-client-job">Data ANalyst</span>
            </div>
          </div>

        </div>
</SwiperSlide
      >
    </Swiper> -->
    <!--===== testimonial slider ends =====-->

    <p class="text-size-md text-center color-blue">
      4.5 out of 5 based on 2450 reviews
    </p>
    <div
      class="dtr-testimonial-stars dtr-stars-5 color-red text-center dtr-mt-30"
    />
  </section>
  <!-- testimonial section ends
================================================== -->

  <!-- features section starts
================================================== -->
  <section
    id="features2"
    class="dtr-section dtr-pt-100 dtr-pb-70 bg-light-blue parallax"
    style="background-image: url(/assets/images/features-bg.png); background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {1607.72 -
      y * 0.4}px;"
  >
    <div class="container">
      <!-- heading starts -->
      <div class="dtr-styled-heading text-center">
        <h2>
          We’re helping businesses<br />
          do their best work
        </h2>
      </div>
      <!-- heading ends -->

      <!--== row 1 starts ==-->
      <div class="row">
        <!-- column 1 starts -->
        <div class="col-12 col-md-4 dtr-img-feature-style2">
          <div class="dtr-feature-style2-head">
            <img src="/assets/images/icon-small1.png" alt="image1" />
            <h4 class="dtr-feature-style2-heading">Instantly Transparent</h4>
          </div>
          <p>
            Neque porro quisquam esqui dolom ipsut quia dolor sit amet namlien
            consectetur adipisci.
          </p>
        </div>
        <!-- column 1 ends -->

        <!-- column 2 starts -->
        <div class="col-12 col-md-4 dtr-img-feature-style2">
          <div class="dtr-feature-style2-head">
            <img src="/assets/images/icon-small2.png" alt="image1" />
            <h4 class="dtr-feature-style2-heading">Shared Insights on data</h4>
          </div>
          <p>
            Neque porro quisquam esqui dolom ipsut quia dolor sit amet namlien
            consectetur adipisci.
          </p>
        </div>
        <!-- column 2 ends -->

        <!-- column 3 starts -->
        <div class="col-12 col-md-4 dtr-img-feature-style2">
          <div class="dtr-feature-style2-head">
            <img src="/assets/images/icon-small3.png" alt="image1" />
            <h4 class="dtr-feature-style2-heading">
              Radically Effieient & Focused
            </h4>
          </div>
          <p>
            Neque porro quisquam esqui dolom ipsut quia dolor sit amet namlien
            consectetur adipisci.
          </p>
        </div>
        <!-- column 3 ends -->
      </div>
      <!--== row 1 ends ==-->

      <!--== row 2 starts ==-->
      <div class="row dtr-mt-40">
        <!-- column 1 starts -->
        <div class="col-12 col-md-4 offset-md-2 dtr-img-feature-style2">
          <div class="dtr-feature-style2-head">
            <img src="/assets/images/icon-small4.png" alt="image1" />
            <h4 class="dtr-feature-style2-heading">Automated Support</h4>
          </div>
          <p>
            Neque porro quisquam esqui dolom ipsut quia dolor sit amet namlien
            consectetur adipisci.
          </p>
        </div>
        <!-- column 1 ends -->

        <!-- column 2 starts -->
        <div class="col-12 col-md-4 dtr-img-feature-style2">
          <div class="dtr-feature-style2-head">
            <img src="/assets/images/icon-small5.png" alt="image1" />
            <h4 class="dtr-feature-style2-heading">Streamlined Process</h4>
          </div>
          <p>
            Neque porro quisquam esqui dolom ipsut quia dolor sit amet namlien
            consectetur adipisci.
          </p>
        </div>
        <!-- column 2 ends -->
      </div>
      <!--== row 2 ends ==-->
    </div>
  </section>
  <!-- features section ends
================================================== -->

  <!-- pricing section starts
================================================== -->
  <section id="pricing" class="dtr-section dtr-py-100">
    <div class="container">
      <!-- heading starts -->
      <div class="dtr-styled-heading text-center">
        <h2>Plans & Pricing</h2>
        <p>
          Excepteur sint occaec cupidatat non proident suntin culpa qui officia
          deserunt<br />
          mollit anim idiu siame namlon est laborum
        </p>
      </div>
      <!-- heading ends -->

      <!--== tabs starts ==-->
      <div class="row dtr-styled-tab">
        <!--= tab nav starts =-->
        <div class="col-12">
          <div class="nav nav-pills justify-content-center" role="tablist">
            <!-- tab 1 link starts -->
            <a
              class="nav-link active"
              id="pricing-tab-1-tab"
              data-toggle="pill"
              href="#pricing-tab-1"
              role="tab"
              aria-controls="pricing-tab-1"
              aria-selected="true"
            >
              Monthly
            </a>
            <!-- tab 1 link ends -->

            <!-- tab 2 link starts -->
            <a
              class="nav-link"
              id="pricing-tab-2-tab"
              data-toggle="pill"
              href="#pricing-tab-2"
              role="tab"
              aria-controls="pricing-tab-2"
              aria-selected="false"
            >
              Yearly
            </a>
            <!-- tab 2 link ends -->
          </div>
        </div>
        <!--= tab nav ends =-->

        <!-- tab content starts -->
        <div class="col-12">
          <div class="tab-content" id="v-pills-tabContent">
            <!--== tab 1 content starts ==-->
            <div
              class="tab-pane fade show active"
              id="pricing-tab-1"
              role="tabpanel"
              aria-labelledby="pricing-tab-1-tab"
            >
              <!-- row starts -->
              <div class="row">
                <!-- column 1 starts -->
                <div class="col-12 col-md-4">
                  <!-- pricing 1 starts -->
                  <div class="dtr-pricing bg-white dtr-shadow">
                    <h4 class="dtr-pricing-heading">Silver Package</h4>
                    <p class="dtr-price color-blue"><sup>$</sup>99</p>
                    <ul class="dtr-list-pricing">
                      <li>Organisational Workflow</li>
                      <li>Built-in Modules</li>
                      <li>Connect From Anywhere</li>
                      <li>Instant Access</li>
                    </ul>
                    <a
                      href="/checkout"
                      class="dtr-btn-flat btn-flat-blue dtr-mt-30">Start Now</a
                    >
                  </div>
                  <!-- pricing 1 ends -->
                </div>
                <!-- column 1 ends -->

                <!-- column 2 starts -->
                <div class="col-12 col-md-4">
                  <!-- pricing 2 starts -->
                  <div
                    class="dtr-pricing dtr-shadow bg-white dtr-pricing-focused"
                  >
                    <h4 class="dtr-pricing-heading">Gold Package</h4>
                    <p class="dtr-price color-blue"><sup>$</sup>199</p>
                    <ul class="dtr-list-pricing">
                      <li>Organisational Workflow</li>
                      <li>Built-in Modules</li>
                      <li>Connect From Anywhere</li>
                      <li>Instant Access</li>
                    </ul>
                    <a
                      href="/checkout"
                      class="dtr-btn dtr-btn-styled btn-red dtr-mt-30"
                      >Start Now</a
                    >
                  </div>
                  <!-- pricing 2 ends -->
                </div>
                <!-- column 2 ends -->

                <!-- column 3 starts -->
                <div class="col-12 col-md-4">
                  <!-- pricing 3 starts -->
                  <div class="dtr-pricing dtr-shadow bg-white">
                    <h4 class="dtr-pricing-heading">Platinum Package</h4>
                    <p class="dtr-price color-blue">
                      <sup>$</sup>299<sub>/mo</sub>
                    </p>
                    <ul class="dtr-list-pricing">
                      <li>Organisational Workflow</li>
                      <li>Built-in Modules</li>
                      <li>Connect From Anywhere</li>
                      <li>Instant Access</li>
                    </ul>
                    <a
                      href="/checkout"
                      class="dtr-btn-flat btn-flat-blue dtr-mt-30">Start Now</a
                    >
                  </div>
                  <!-- pricing 3 ends -->
                </div>
                <!-- column 3 ends -->
              </div>
              <!-- row ends -->
            </div>
            <!--== tab 1 content ends ==-->

            <!--== tab 2 content starts ==-->
            <div
              class="tab-pane fade"
              id="pricing-tab-2"
              role="tabpanel"
              aria-labelledby="pricing-tab-2-tab"
            >
              <!-- row starts -->
              <div class="row">
                <!-- column 1 starts -->
                <div class="col-12 col-md-4">
                  <!-- pricing 1 starts -->
                  <div class="dtr-pricing bg-white dtr-shadow">
                    <h4 class="dtr-pricing-heading">Silver Package</h4>
                    <p class="dtr-price color-blue"><sup>$</sup>599</p>
                    <ul class="dtr-list-pricing">
                      <li>1 Hour Photography</li>
                      <li>60 - 100 images / shoot</li>
                      <li>
                        Password protected gallery on personalized website
                      </li>
                    </ul>
                    <a
                      href="/checkout"
                      class="dtr-btn-flat btn-flat-blue dtr-mt-30">Start Now</a
                    >
                  </div>
                  <!-- pricing 1 ends -->
                </div>
                <!-- column 1 ends -->

                <!-- column 2 starts -->
                <div class="col-12 col-md-4">
                  <!-- pricing 2 starts -->
                  <div
                    class="dtr-pricing dtr-shadow bg-white dtr-pricing-focused"
                  >
                    <h4 class="dtr-pricing-heading">Gold Package</h4>
                    <p class="dtr-price color-blue"><sup>$</sup>999</p>
                    <ul class="dtr-list-pricing">
                      <li>5 Hour Photography</li>
                      <li>100 - 200 images / shoot</li>
                      <li>
                        Password protected gallery on personalized website
                      </li>
                    </ul>
                    <a
                      href="/checkout"
                      class="dtr-btn dtr-btn-styled btn-red dtr-mt-30"
                      >Start Now</a
                    >
                  </div>
                  <!-- pricing 2 ends -->
                </div>
                <!-- column 2 ends -->

                <!-- column 3 starts -->
                <div class="col-12 col-md-4">
                  <!-- pricing 3 starts -->
                  <div class="dtr-pricing dtr-shadow bg-white">
                    <h4 class="dtr-pricing-heading">Platinum Package</h4>
                    <p class="dtr-price color-blue">
                      <sup>$</sup>799<sub>/mo</sub>
                    </p>
                    <ul class="dtr-list-pricing">
                      <li>100 Addons</li>
                      <li>Personal lorem ipsum</li>
                      <li>Bot Setup Extra</li>
                      <li>$4/extra chat</li>
                    </ul>
                    <a
                      href="/checkout"
                      class="dtr-btn-flat btn-flat-blue dtr-mt-30">Start Now</a
                    >
                  </div>
                  <!-- pricing 3 ends -->
                </div>
                <!-- column 3 ends -->
              </div>
              <!-- row ends -->
            </div>
            <!--== tab 2 content ends ==-->
          </div>
        </div>
        <!-- tab content ends -->
      </div>
      <!--== tabs end ==-->

      <!--== faq starts ==-->
      <h3 class="dtr-mt-20 dtr-mb-40 text-center">
        Frequently Asked Questions
      </h3>
      <div class="row">
        <!-- column 1 starts -->
        <div class="col-12 col-md-6">
          <!-- faq item starts -->
          <div class="faq-item">
            <h5 class="faq-heading color-blue">
              Can I integrate my enterprise software with Ainotion?
            </h5>
            <div class="faq-content">
              There are many variations of passages of Lorem Ipsum available in
              some form, by injected humour. There are many variations of
              passages of Lorem Ipsum available in some form, by injected
              humour.
            </div>
          </div>
          <!-- faq item ends -->

          <!-- faq item starts -->
          <div class="faq-item">
            <h5 class="faq-heading color-blue">
              If I invite my customers to Ainotion?
            </h5>
            <div class="faq-content">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </div>
          </div>
          <!-- faq item ends -->

          <!-- faq item starts -->
          <div class="faq-item dtr-mb-0">
            <h5 class="faq-heading color-blue">
              What perks do I get for prepaying my subscription?
            </h5>
            <div class="faq-content">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus.
            </div>
          </div>
          <!-- faq item ends -->
        </div>
        <!-- column 1 ends -->

        <!-- column 2 starts -->
        <div class="col-12 col-md-6">
          <!-- faq item starts -->
          <div class="faq-item small-device-space">
            <h5 class="faq-heading color-blue">
              Can I install Saasflix on my own hardware?
            </h5>
            <div class="faq-content">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque.
            </div>
          </div>
          <!-- faq item ends -->

          <!-- faq item starts -->
          <div class="faq-item">
            <h5 class="faq-heading color-blue">
              How can I obtain a copy of my data?
            </h5>
            <div class="faq-content">
              There are many variations of passages of but the majority have
              suffered alteration in injected humour.
            </div>
          </div>
          <!-- faq item ends -->

          <!-- faq item starts -->
          <div class="faq-item">
            <h5 class="faq-heading color-blue">How safe is my data?</h5>
            <div class="faq-content">
              Nor again is there anyone because it is pain, but because
              occasionally circumstances occur in which toil and pain can
              procure him some great pleasure.
            </div>
          </div>
          <!-- faq item ends -->
        </div>
        <!-- column 2 ends -->
      </div>
      <!--== faq ends ==-->
    </div>
  </section>
  <!-- pricing section ends
================================================== -->

  <!-- process section starts
================================================== -->
  <section
    class="dtr-section dtr-py-100 bg-light-blue dtr-section-with-bg dtr-bg-size-auto dtr-bg-position-bottom"
    style="background-image: url(/assets/images/illustration.png);"
  >
    <div class="container">
      <h2 class="text-center dtr-mb-40">
        Get started in <span class="color-blue">3 easy steps</span>
      </h2>

      <!--== row starts ==-->
      <div class="row">
        <div class="col-12 col-lg-8 offset-lg-2">
          <div
            class="dtr-process d-flex flex-column flex-md-row justify-content-center"
          >
            <div class="dtr-process-item">
              <div class="dtr-process-number"><span>1</span></div>
              <div class="dtr-process-content">
                <h6>
                  Lorem ipsum dolor<br />
                  sit amet
                </h6>
              </div>
            </div>
            <div class="dtr-process-item">
              <div class="dtr-process-number"><span>2</span></div>
              <div class="dtr-process-content">
                <h6>
                  Eiusmo tempo inci<br />
                  labore dolore
                </h6>
              </div>
            </div>
            <div class="dtr-process-item">
              <div class="dtr-process-number"><span>3</span></div>
              <div class="dtr-process-content">
                <h6>
                  Quis nostag exercice<br />
                  tio susipit
                </h6>
              </div>
            </div>
          </div>
          <p class="text-center">
            <a
              class="dtr-btn dtr-btn-styled btn-red dtr-video-popup"
              data-autoplay="true"
              data-vbtype="video"
              href="https://www.youtube.com/watch?v=kuceVNBTJio"
              ><i class="icon-play-circle2 dtr-btn-left-icon" />See how it works</a
            >
          </p>
        </div>
      </div>
      <!--== row ends ==-->

      <!-- empty div -->
      <div style="height: 450px;" />
    </div>
  </section>
  <!-- process section ends
================================================== -->

  <!-- blog section starts
================================================== -->
  <section id="blog" class="dtr-section dtr-py-100">
    <div class="container">
      <!-- heading starts -->
      <div class="dtr-styled-heading text-center">
        <h2>News & Articles</h2>
      </div>
      <!-- heading ends -->

      <!--== row starts ==-->
      <div class="row dtr-mt-50">
        <!-- column 1 starts -->
        <div class="col-12 col-md-4">
          <!-- blog item 1 starts -->
          <div class="dtr-blog-item">
            <!-- image -->
            <div class="dtr-post-img">
              <img src="/assets/images/blogpost-img1.jpg" alt="image1" />
            </div>
            <div class="dtr-post-content">
              <span class="dtr-category color-blue">Marketing</span>
              <h5>Why we started Ainotion for small agencies</h5>
              <!-- post meta -->
              <div class="dtr-post-meta">
                <div class="dtr-meta-user">
                  <img src="/assets/images/user-4.jpg" alt="image1" />
                </div>
                <div class="dtr-meta-info">
                  <span>March 2020</span> <span>By Christian Brown</span>
                </div>
              </div>
              <!-- post meta ends -->
            </div>
          </div>
          <!-- blog item 1 ends -->
        </div>
        <!-- column 1 ends -->

        <!-- column 2 starts -->
        <div class="col-12 col-md-4">
          <!-- blog item 2 starts -->
          <div class="dtr-blog-item">
            <!-- image -->
            <div class="dtr-post-img">
              <img src="/assets/images/blogpost-img2.jpg" alt="image1" />
            </div>
            <div class="dtr-post-content">
              <span class="dtr-category color-blue">Analytics</span>
              <h5>Essential tips to leveraging in AI system</h5>
              <!-- post meta -->
              <div class="dtr-post-meta">
                <div class="dtr-meta-user">
                  <img src="/assets/images/user-5.jpg" alt="image1" />
                </div>
                <div class="dtr-meta-info">
                  <span>August 2020</span> <span>By Dakota Carey</span>
                </div>
              </div>
              <!-- post meta ends -->
            </div>
          </div>
          <!-- blog item 2 ends -->
        </div>
        <!-- column 2 ends -->

        <!-- column 3 starts -->
        <div class="col-12 col-md-4">
          <!-- blog item 3 starts -->
          <div class="dtr-blog-item">
            <!-- image -->
            <div class="dtr-post-img">
              <img src="/assets/images/blogpost-img3.jpg" alt="image1" />
            </div>
            <div class="dtr-post-content">
              <span class="dtr-category color-blue">Platform</span>
              <h5>Get the most out of support workflow</h5>
              <!-- post meta -->
              <div class="dtr-post-meta">
                <div class="dtr-meta-user">
                  <img src="/assets/images/user-6.jpg" alt="image1" />
                </div>
                <div class="dtr-meta-info">
                  <span>November 2020</span> <span>By Victoria Morgan</span>
                </div>
              </div>
              <!-- post meta ends -->
            </div>
          </div>
          <!-- blog item 3 ends -->
        </div>
        <!-- column 3 ends -->
      </div>
      <!--== row starts ==-->
    </div>
  </section>
  <!-- blog section ends
================================================== -->

  <!-- contact section starts
================================================== -->
  <section
    id="contact"
    class="dtr-section bg-blue"
    style="background-image: url(/assets/images/section-bg-img.jpg);"
  >
    <!-- overlay to section -->
    <div class="dtr-overlay dtr-overlay-blue" />

    <!-- content of section (on overlay) starts -->
    <div
      class="dtr-py-100 dtr-overlay-content parallax"
      style="background-image: url(/assets/images/form-bg.png); background-size: auto; background-repeat: no-repeat; background-attachment: fixed; background-position: center {3313.96 -
        y * 0.4}px;"
    >
      <div class="container">
        <!-- heading starts -->
        <div class="dtr-styled-heading text-center">
          <h2 class="color-white">#Share the load</h2>
          <p class="color-white">
            We'd love to hear from you<br />
            request a pickup today!
          </p>
        </div>
        <!-- heading ends -->

        <!--== row starts ==-->
        <div class="row">
          <div class="col-12 col-lg-8 offset-lg-2">
            <!-- form starts -->
            <div
              class="dtr-form dtr-p-50 dtr-border-5px dtr-rounded-xl bg-blue border-light-blue"
            >
              <form
                id="contactform"
                method="post"
                action="php/contact-form.php"
              >
                <fieldset>
                  <p>
                    <input
                      name="email"
                      class="required email"
                      type="text"
                      placeholder="Email"
                    />
                  </p>
                  <div class="dtr-form-row dtr-form-row-2col clearfix">
                    <p class="dtr-form-column">
                      <input name="name" type="text" placeholder="Name" />
                    </p>
                    <p class="dtr-form-column">
                      <input
                        name="Contact"
                        type="text"
                        placeholder="Additonal Contact"
                      />
                    </p>
                  </div>
                  <div class="dtr-form-row dtr-form-row-2col">
                    <p class="dtr-form-column">
                      <input
                        name="number"
                        class="number"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </p>
                    <p class="dtr-form-column">
                      <select name="selectdropdown" class="dtr-select">
                        <option value="">Category</option>
                        <option value="1">Dry Cleaning</option>
                        <option value="2">Regular Cleaning</option>
                        <option value="3">Heavy Cleaning</option>
                      </select>
                    </p>
                  </div>
                  <p class="antispam">
                    Leave this empty: <br />
                    <input name="url" />
                  </p>
                  <p>
                    <textarea
                      rows="6"
                      name="message"
                      id="message"
                      class="required"
                      placeholder="Message"
                    />
                  </p>
                  <p class="text-center">
                    <button
                      class="dtr-btn dtr-btn-styled btn-red dtr-mt-20"
                      type="submit">Request a Pickup!</button
                    >
                  </p>
                  <div id="result" />
                </fieldset>
              </form>
            </div>
            <!-- form ends -->
          </div>
        </div>
        <!--== row ends ==-->
      </div>
    </div>
    <!-- content of section ends -->
  </section>
  <!-- contact section ends
================================================== -->
</section>
