<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link class="block" to="/" aria-label="Cruip">
            <img src="../images/logo-OldTownPizzeria__1_-removebg-preview.png" width="38" height="38" alt="Stellar">
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">

            <li class="ml-6">
              <router-link
                class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                to="/signin">
                <span class="relative inline-flex items-center">
                  Admin<span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </router-link>
            </li>
           
          </ul>

        </nav>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    localStorageVariablePresent() {
      return localStorage.getItem('isLoggedIn') === 'true';
    },
    localStorageVariablePresentNot() {
      return localStorage.getItem('isLoggedIn') === 'false';
    },
  },
  methods: {
    handleLogout() {
      localStorage.setItem('isLoggedIn', 'false'); // Change the login status to false
      location.reload();
      // Perform any additional logout actions if necessary
    },
  },
};
</script>