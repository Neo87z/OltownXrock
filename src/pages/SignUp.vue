<template>
  <main class="grow">

    <section class="relative">

      <!-- Illustration -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <img src="../images/auth-illustration.svg" class="max-w-none" width="1440" height="450" alt="Page Illustration">
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">

          <!-- Page header -->
          <div class="max-w-3xl mx-auto text-center pb-12">
            <!-- Logo -->
            <div class="mb-5">
              <router-link class="inline-flex" to="/">
                <div class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                  <img class="relative" src="../images/975krock-herologo349x300.png" width="42" height="42" alt="Stellar">
                </div>
              </router-link>
            </div>
            <!-- Page title -->
            <h1 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Add Colab Winners</h1>
          </div>

          <!-- Form -->
          <div class="max-w-sm mx-auto">

            <form>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="company">First Name <span class="text-rose-500">*</span></label>
                  <input id="company" class="form-input w-full" type="text"  required />
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="full-name">Last Name <span class="text-rose-500">*</span></label>
                  <input id="full-name" class="form-input w-full" type="text"  required />
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="email">Email </label>
                  <input id="email" class="form-input w-full" type="text"   />
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="password">Phone <span class="text-rose-500">*</span></label>
                  <input id="password" class="form-input w-full" type="phone" required />
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="referrer">Claim Location <span class="text-rose-500">*</span></label>
                  <select id="referrer" class="form-select text-sm py-2 w-full" required>
                    <option>Mount Pearl</option>
                    <option>Freshwater</option>
                    <option>Higgins Line</option>
                  </select>
                </div>
              </div>
              <div class="mt-6">
                <button class="btn text-sm text-white bg-red-500 hover:bg-red-600 w-full shadow-sm group">
                  Sign Up <span class="tracking-normal text-red-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
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
export default {
  name: 'SignIn',
}
</script>