<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

 
      <Features02 />
      <Calims />
      <TestimonialsCarousel />
      <AllClaims />
      
      

    </main>
    
    <!-- Site footer -->
   

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
import Clients from '../partials/Clients.vue'
import Features from '../partials/Features.vue'
import Features02 from '../partials/Features02.vue'
import Features03 from '../partials/Features03.vue'
import TestimonialsCarousel from '../partials/TestimonialsCarousel.vue'
import Calims from '../partials/AvailableClaoms.vue'
import Features04 from '../partials/Features04.vue'
import Pricing from '../partials/Pricing.vue'
import Testimonials from '../partials/Testimonials.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'
import AllClaims from '../partials/allClaims.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Clients,
    Features,
    Features02,
    Features03,
    TestimonialsCarousel,
    Features04,
    Pricing,
    Testimonials,
    Cta,
    Calims,
    Footer,AllClaims,
  },
}
</script>