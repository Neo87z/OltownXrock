<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-6 md:pb-10">

          <h2
            class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
            Available Claims</h2>
          <div class="text-center">
            <!-- Testimonial image -->

            <!-- Text -->

            <!-- Buttons -->
            <div class="flex flex-wrap justify-center -m-1.5">
              <button
                class="btn-sm m-1.5 text-xs py-1.5 text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                :class="active === ShowMountPearl ? 'opacity-100' : 'opacity-30 hover:opacity-60'" @click="handleClick">
                <span class="relative">
                  <span class="text-slate-50">Mount Pearl Store</span>
                </span>
              </button>
              <button
                class="btn-sm m-1.5 text-xs py-1.5 text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                :class="active === index ? 'opacity-100' : 'opacity-30 hover:opacity-60'" @click="handleClickFresh">
                <span class="relative">
                  <span class="text-slate-50">Freshwater Store</span>
                </span>
              </button>

              <button
                class="btn-sm m-1.5 text-xs py-1.5 text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                :class="active === index ? 'opacity-100' : 'opacity-30 hover:opacity-60'" @click="handleClickMount">
                <span class="relative">
                  <span class="text-slate-50">Higgins Line Store</span>
                </span>
              </button>
            </div>
          </div>

        </div>


        <div v-if="isModalOpen" class="modal" style="z-index: 9999;">
          <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <div class="mb-5 flex flex-col items-center">
              <div
                class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                <img class="relative" src="../images/975krock-herologo349x300.png" width="42" height="42" alt="Stellar">
              </div>
              <h1
                class="h2 bg-clip-text  bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 text-center mt-4 text-black">
                Claim Prize
              </h1>
              <div class="max-w-sm mx-auto">
                <form>
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm text-black font-medium mb-1" for="code">Code</label>
                      <input id="code" class="form-input w-full" type="number" required />
                    </div>
                  </div>
                  <div class="mt-6">
                    <button class="btn text-sm text-white bg-red-500 hover:bg-red-600 w-full shadow-sm group"
                      @click.prevent="claimItem(index)">
                      Claim <span
                        class="tracking-normal text-red-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div v-if="ShowMountPearl"
          class="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
          <div class="testimonials-carousel swiper-container group ">

            <div class="testimonials-carousel swiper-container group">
              <div class="swiper-wrapper w-full grid grid-cols-4 gap-4">

                <HighlighterItem v-for="(item, index) in responseData" :key="index" class="swiper-wrapper w-fit">
                  <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden shadow-md">
                    <!-- Card content -->
                    <div class="flex flex-col p-6 h-full">
                      <img class="mb-3" src="../images/carousel-icon-01.svg" width="56" height="56" alt="Icon 01">
                      <div class="grow">
                        <div class="font-bold text-lg mb-1">{{ item.FirstName }} {{ item.LastName }}</div>
                        <div class="text-slate-400 mb-3">Store :- {{ item.ClaimLocation }}</div>


                        <div class="text-slate-400 mb-3">Claimable Item :- {{ item.ClaimableItem }}</div>
                        <div class="text-slate-400 mb-3">Winning Date :- {{ item.ClaimDate }}</div>
                      </div>
                      <div class="text-right">
                        <button @click="openModal(item._id)"
                          class="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          type="button">
                          Claim
                          <span
                            class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>



                <!-- ... Repeat the pattern for Highlighter Items 3 to 10 -->

              </div>
            </div>



          </div>
        </div>

        <div v-if="ShowFreshwaterl"
          class="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
          <div class="testimonials-carousel swiper-container group ">

            <div class="testimonials-carousel swiper-container group">
              <div class="swiper-wrapper w-full grid grid-cols-4 gap-4">

                <HighlighterItem v-for="(item, index) in responseDataFreshwater" :key="index" class="swiper-wrapper w-fit">
                  <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden shadow-md">
                    <!-- Card content -->
                    <div class="flex flex-col p-6 h-full">
                      <img class="mb-3" src="../images/carousel-icon-01.svg" width="56" height="56" alt="Icon 01">
                      <div class="grow">
                        <div class="font-bold text-lg mb-1">{{ item.FirstName }} {{ item.LastName }}</div>
                        <div class="text-slate-400 mb-3">Store :- {{ item.ClaimLocation }}</div>


                        <div class="text-slate-400 mb-3">Claimable Item :- {{ item.ClaimableItem }}</div>
                        <div class="text-slate-400 mb-3">Winning Date :- {{ item.ClaimDate }}</div>
                      </div>
                      <div class="text-right">
                        <button @click="openModal(item._id)"
                          class="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          type="button">
                          Claim
                          <span
                            class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>



                <!-- ... Repeat the pattern for Highlighter Items 3 to 10 -->

              </div>
            </div>



          </div>
        </div>

        <div v-if="ShowHigginsLine"
          class="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
          <div class="testimonials-carousel swiper-container group ">

            <div class="testimonials-carousel swiper-container group">
              <div class="swiper-wrapper w-full grid grid-cols-4 gap-4">

                <HighlighterItem v-for="(item, index) in responseDataHiggins" :key="index" class="swiper-wrapper w-fit">
                  <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden shadow-md">
                    <!-- Card content -->
                    <div class="flex flex-col p-6 h-full">
                      <img class="mb-3" src="../images/carousel-icon-01.svg" width="56" height="56" alt="Icon 01">
                      <div class="grow">
                        <div class="font-bold text-lg mb-1">{{ item.FirstName }} {{ item.LastName }}</div>
                        <div class="text-slate-400 mb-3">Store :- {{ item.ClaimLocation }}</div>


                        <div class="text-slate-400 mb-3">Claimable Item :- {{ item.ClaimableItem }}</div>
                        <div class="text-slate-400 mb-3">Winning Date :- {{ item.ClaimDate }}</div>
                      </div>
                      <div class="text-right">
                        <button @click="openModal(item._id)"
                          class="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          type="button">
                          Claim
                          <span
                            class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>



                <!-- ... Repeat the pattern for Highlighter Items 3 to 10 -->

              </div>
            </div>



          </div>
        </div>





        <!-- Arrows -->




      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Particles from './Particles.vue'
import Highlighter from './Highlighter.vue'
import HighlighterItem from './HighlighterItem.vue'
import TestimonialImg01 from '../images/testimonial-01.jpg'
import TestimonialImg02 from '../images/testimonial-02.jpg'
import TestimonialImg03 from '../images/testimonial-03.jpg'
import axios from 'axios'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
Swiper.use([Navigation])

export default {
  name: 'TestimonialsCarousel',
  components: {
    Particles,
    Highlighter,
    HighlighterItem,
  },
  data() {
    return {
      isModalOpen: false,
      ShowMountPearl: true,
      ShowFreshwaterl: false,
      ShowHigginsLine: false,
      responseData: null,
      selectedID: null,
      responseDataFreshwater: null,
      responseDataHiggins: null,
    };
  },
  mounted() {
    this.getClaimData()
    this.getClaimDataFreshwater()
    this.getClaimDataHiggings()
  },
  methods: {
    async claimItem(index) {
      // Handle the click event and access the index
      console.log('Clicked on item with index:', this.selectedID);

      const code = document.getElementById('code').value;
      console.log('Clicked on item with index:', code);

      if (code == 1500) {


        const ItemID = this.selectedID;

        // Create a payload object with form data
        const payload = {
          ItemID,

        };

        try {
          this.$toast.open({
            message: 'Sucessfully Claimed!',
            type: 'success',
            position: 'top-right',
            duration: 5000,
          });
          //this.$toast.open('Hello, world!');
          // Make a POST request and await the response
          const response = await axios.post('https://oldtown-colab-fb9fd1299735.herokuapp.com/claims/claim-item', payload);
          location.reload();
          // Handle the response data
          console.log('Response:', response.data);
        } catch (error) {
          // Handle the error
          console.error('Error:', error);
        }
      } else {
        this.$toast.open({
          message: 'Invalid Code!, Please Enter The Correct Code',
          type: 'error',
          position: 'top-right',
          duration: 5000,
        });
      }
      // Perform any additional logic you need with the index
    },
    openModal(id) {
      this.isModalOpen = true;
      this.selectedID = id
    },
    closeModal() {
      this.isModalOpen = false;
    },
    toggleDiv() {
      this.showDiv = !this.showDiv; // Toggle the value of the variable
    },
    handleClick(index) {
      console.log("mount Pearl")

      this.ShowMountPearl = true;
      this.ShowFreshwaterl = false;
      this.ShowHigginsLine = false;


    },
    handleClickFresh(index) {
      console.log("mount Pearl")

      this.ShowMountPearl = false;
      this.ShowFreshwaterl = true;
      this.ShowHigginsLine = false;


    },
    handleClickMount(index) {
      console.log("mount Pearl")

      this.ShowMountPearl = false;
      this.ShowFreshwaterl = false;
      this.ShowHigginsLine = true;


    },
    async getClaimData() {
      try {
        const response = await axios.get('https://oldtown-colab-fb9fd1299735.herokuapp.com/claims/get-all-claims-MP');
        const responseData = response.data;
        const dataArray = responseData.data;
        console.log(dataArray);
        this.responseData = dataArray;
        return dataArray;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
    async getClaimDataFreshwater() {
      try {
        const response = await axios.get('https://oldtown-colab-fb9fd1299735.herokuapp.com/claims/get-all-claims-FR');
        const responseData = response.data;
        const dataArray = responseData.data;
        console.log(dataArray);
        this.responseDataFreshwater = dataArray;
        return dataArray;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
    async getClaimDataHiggings() {
      try {
        const response = await axios.get('https://oldtown-colab-fb9fd1299735.herokuapp.com/claims/get-all-claims-HG');
        const responseData = response.data;
        const dataArray = responseData.data;
        console.log(dataArray);
        this.responseDataHiggins = dataArray;
        return dataArray;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  },
  setup() {

    const active = ref(0)
    const autorotate = ref(true)
    const autorotateTiming = ref(7000)
    const items = ref([
      {
        img: TestimonialImg01,
        quote: " 2 St Davids Ave, Mount Pearl",
        name: 'Mount Pearl Store',
        role: ''
      },
      {
        img: TestimonialImg02,
        quote: "336 Freshwater Rd Unit 6",
        name: 'Freshwater Store',
        role: ''
      },
      {
        img: TestimonialImg03,
        quote: "279 Portugal Cove Rd, St. John's.",
        name: 'Higgins Line  Store',
        role: ''
      }
    ])
    const swiperInitialized = ref(false)

    onMounted(() => {


      const carousel = new Swiper('.testimonials-carousel', {
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        },
        grabCursor: true,
        loop: false,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 24,
        navigation: {
          nextEl: '.carousel-next',
          prevEl: '.carousel-prev',
        },
      })
      swiperInitialized.value = true
    })



    onMounted(() => {

    })

    onBeforeUnmount(() => {

    })


    return {
      swiperInitialized,
      active,
      autorotate,
      autorotateTiming,
      items,
    }
  }
}
</script>
<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 20%;
}

.custom-width {
  width: 300px;
  /* Adjust the width value as needed */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.card-container {
  width: 300px;
  /* Replace with your desired fixed width */
  height: 100px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>