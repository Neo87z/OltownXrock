<template>
  <main class="grow">

    <section class="relative">

      <!-- Illustration -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10"
        aria-hidden="true">
        <img src="../images/auth-illustration.svg" class="max-w-none" width="1440" height="450" alt="Page Illustration">
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">

          <!-- Page header -->
          <div class="max-w-3xl mx-auto text-center pb-12">
            <!-- Logo -->
            <div class="mb-5">
              <router-link class="inline-flex" to="/">
                <div
                  class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                  <img class="relative" src="../images/975krock-herologo349x300.png" width="42" height="42" alt="Stellar">
                </div>
              </router-link>
            </div>

            <!-- Page title -->
            <h1 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Add Colab Winners</h1>
            <div class="mt-6">
              <button class="btn text-sm text-white bg-red-500 hover:bg-red-600 w-full shadow-sm group"
                @click.prevent="resetWeeklyWinners">
                Reset Weekly Winners <span
                  class="tracking-normal text-red-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </button>
            </div>
          </div>

          <!-- Form -->
          <div class="max-w-sm mx-auto">


            <form @submit="handleSubmit" ref="claimForm">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="Fname">First Name <span
                      class="text-rose-500">*</span></label>
                  <input id="Fname" class="form-input w-full" type="text" required />
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="Lname">Last Name <span
                      class="text-rose-500">*</span></label>
                  <input id="Lname" class="form-input w-full" type="text" required />
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="email">Email <span
                      class="text-rose-500">*</span></label>
                  <input id="email" class="form-input w-full" type="email" required />
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="Phone">Phone <span
                      class="text-rose-500">*</span></label>
                  <input id="Phone" class="form-input w-full" type="phone" required />
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="Prize">Prize <span
                      class="text-rose-500">*</span></label>
                  <input id="Prize" class="form-input w-full" type="phone"  v-model="Prize" required disabled />
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="Location">Claim Location <span
                      class="text-rose-500">*</span></label>
                  <select id="Location" class="form-select text-sm py-2 w-full" required>
                    <option value="Mount Pearl">Mount Pearl</option>
                    <option value="Freshwater">Freshwater</option>
                    <option value="Higgins Line">Higgins Line</option>
                  </select>
                </div>
              </div>
              <div class="mt-6">
                <button class="btn text-sm text-white bg-red-500 hover:bg-red-600 w-full shadow-sm group">
                  Add Entry <span
                    class="tracking-normal text-red-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </button>
              </div>
            </form>


          </div>

        </div>
      </div>

    </section>

  </main>
</template>

<script>
import axios from 'axios'; // Import Axios library

export default {
  name: 'SignIn',
  data() {
    return {
      Prize: 'lol',
      
    };
  },
  mounted() {
    this.fetchPrize()

  },
  methods: {
    async fetchPrize() {
      try {

        const response = await axios.get('https://oldtown-colab-fb9fd1299735.herokuapp.com/claims/get-prize');
        const responseData = response.data;
        const dataArray = responseData.data;
        console.log(dataArray[0].Prize);
        this.Prize=dataArray[0].Prize

        // Optionally, you can perform any additional logic after retrieving the prize
      } catch (error) {
        console.error('Error:', error);
        this.$toast.open({
          message: 'Failed to fetch prize',
          type: 'error',
          position: 'top-right',
          duration: 5000,
        });
      }
    },
    async resetWeeklyWinners() {
      try {
        const response = await axios.post('https://oldtown-colab-fb9fd1299735.herokuapp.com/claims/reset-weekly-winners');

        // Handle the response data
        console.log('Response:', response.data);
        window.location.reload();
        this.$toast.open({
          message: 'Sucessfully Reseted Weekly Winners!',
          type: 'success',
          position: 'top-right',
          duration: 5000,
        });
        //location.reload()

        // Optionally, you can perform any additional logic after the reset is successful
      } catch (error) {
        // Handle the error
        console.error('Error:', error);
        this.$toast.open({
          message: 'Failed To Reset Weekly Winners',
          type: 'error',
          position: 'top-right',
          duration: 5000,
        });
      }
    },
    async handleSubmit(event) {
      event.preventDefault(); // Prevent form submission

      // Retrieve form values
      const FirstName = event.target.elements.Fname.value;
      const LastName = event.target.elements.Lname.value;
      const Email = event.target.elements.email.value;
      const Phone = event.target.elements.Phone.value;
      const ClaimLocation = event.target.elements.Location.value;
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
      const year = currentDate.getFullYear();
      const ClaimDate = `${month}/${day}/${year}`;
      const ClaimableItem = event.target.elements.Prize.value;

      // Create a payload object with form data
      const payload = {
        FirstName,
        LastName,
        Email,
        Phone,
        ClaimLocation,
        ClaimDate,
        ClaimableItem
      };

      try {
        // Make a POST request and await the response
        const response = await axios.post('https://oldtown-colab-fb9fd1299735.herokuapp.com/claims/add-claim', payload);

        // Handle the response data
        console.log('Response:', response.data);
        this.$toast.open({
          message: 'Entry Added Sucessfully !',
          type: 'success',
          position: 'top-right',
          duration: 5000,
        });
        this.$refs.claimForm.reset();
        location.reload()
      } catch (error) {
        // Handle the error
        console.error('Error:', error);
        this.$toast.open({
          message: 'Please Try Again',
          type: 'error',
          position: 'top-right',
          duration: 5000,
        });
      }
    }
  }
}
</script>