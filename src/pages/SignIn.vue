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
              K-Rock Portal Login</h1>
          </div>

          <!-- Form -->
          <div class="max-w-sm mx-auto">

            <form>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="email">Username</label>
                  <input id="email" class="form-input w-full" type="text" v-model="username" required />
                </div>
                <div>
                  <div class="flex justify-between">
                    <label class="block text-sm text-slate-300 font-medium mb-1" for="password">Password</label>
                  </div>
                  <input id="password" class="form-input w-full" type="text" v-model="password" autocomplete="on"
                    required />
                </div>
              </div>
              <div class="mt-6">
                <button class="btn text-sm text-white bg-red-500 hover:bg-red-600 w-full shadow-sm group"
                  @click.prevent="handleLogin">
                  Login <span
                    class="tracking-normal text-red-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </button>
              </div>
            </form>



            <!-- Divider -->


          </div>

        </div>
      </div>

    </section>

  </main>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    async handleLogin() {
      // Perform username and password validation
      const Username = this.username;
      const Password = this.password
      const payload = {
        Username,
        Password,
      };
      // console.log(payload)

      try {
        // Make a POST request and await the response
        const response = await axios.post('https://oldtown-colab-fb9fd1299735.herokuapp.com/claims/check-login', payload);

        console.log(response.data.data)

        if (response.data.data == 'Invalid') {
          this.$toast.open({
            message: 'Invalid Login Details',
            type: 'error',
            position: 'top-right',
            duration: 5000,
          });
        } else {
          this.$toast.open({
            message: 'Login Sucessfull!',
            type: 'success',
            position: 'top-right',
            duration: 5000,
          });
          if (response.data.data == 'KrockLogin') {
            this.$router.push('/add-claim');
          }
          if (response.data.data == 'OldtonwLogin') {
            this.$router.push('/chnage-prize');
          }
        }
        // Handle the response data


        // this.$refs.claimForm.reset();
        // location.reload()
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

    },
  },
};
</script>