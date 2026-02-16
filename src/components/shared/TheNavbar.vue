<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-concern-darker/80 backdrop-blur-md border-b border-slate-800"
  >
    <nav class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
      <!-- Logo -->
      <RouterLink to="/" class="text-2xl font-bold text-white tracking-wide">
        <span class="text-concern-accent">CONCERN</span>
      </RouterLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8 font-medium">
        <a href="#about" class="hover:text-concern-accent transition">About</a>
        <a href="#services" class="hover:text-concern-accent transition">Services</a>
        <a href="#techstack" class="hover:text-concern-accent transition">Stack</a>
        <a href="#news" class="hover:text-concern-accent transition">News</a>
        <a href="#portfolio" class="hover:text-concern-accent transition">Portfolio</a>
        <a href="#kontak" class="hover:text-concern-accent transition">Contact</a>
      </div>

      <!-- Right Side -->
      <div class="flex items-center gap-4">
        <!-- Mobile Login Icon -->
        <RouterLink to="/" class="md:hidden p-2 rounded-full hover:bg-slate-800 transition">
          <svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </RouterLink>

        <!-- Hamburger -->
        <button id="menuBtn" class="md:hidden text-slate-300 focus:outline-none">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      id="mobileMenu"
      class="hidden md:hidden bg-concern-darker border-t border-slate-800 px-6 py-6 space-y-4"
    >
      <a href="#about" class="block hover:text-concern-accent transition">About</a>
      <a href="#services" class="block hover:text-concern-accent transition">Services</a>
      <a href="#techstack" class="block hover:text-concern-accent transition">Stack</a>
      <a href="#news" class="block hover:text-concern-accent transition">News</a>
      <a href="#portfolio" class="block hover:text-concern-accent transition">Portfolio</a>
      <a href="#kontak" class="block hover:text-concern-accent transition">Contact</a>
    </div>
  </header>
</template>
