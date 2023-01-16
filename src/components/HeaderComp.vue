<template>
  <header class="text-slate-800 sticky top-0 z-10">
    <section class="relative flex items-center justify-between bg-lime-100 p-1">
      <h1 class="text-3x1 font-medium">
        <img
          src="/assets/img/SimpleSolaire-Logo.jpg"
          class="object-cover w-full h-full border-double border-2 border-amber-600"
          alt="Bandeau"
        />
      </h1>
      <div>
        <button
          id="mobile-open-button"
          class="text-3x1 sm:hidden focus:outline-none"
        >
          &#9776;
        </button>
        <nav
          class="hidden sm:block space-x-5 text-x1 flex-row flex-grow bg-lime-100 p-4 overflow-y-scroll"
          aria-label="main"
        >
          <a href="" class="hover:opacity-90">Accueil</a>
          <a href="" class="hover:opacity-90"
            >Formation a l'autonomie solaire</a
          >
          <a href="" class="hover:opacity-90">Electricite solaire</a>
          <a href="" class="hover:opacity-90"
            >Expertise en installation solaire</a
          >
          <a href="" class="hover:opacity-90">Materiel solaire au detail</a>
          <a href="" class="hover:opacity-90">Eclairage solaire</a>
          <a href="" class="hover:opacity-90">Contact</a>
        </nav>
      </div>
      <div
        class="overflow-visible flex-column flex-grow w-70 h-32 border-double border-2 border-amber-600 text-center bg-white"
      >
        <p class="text-center">Simple et Solaire</p>
        <p class="text-left pl-2 flex">
          <img
            src="/assets/img/picto-map.jpg"
            class="object-cover w-6 h-6 pt-1 pr-2"
            alt="PictoMap"
          />
          2 rue Mangefer-Atelier 211120 Argeliers
        </p>
        <p class="text-left pl-2 flex">
          <img
            src="/assets/img/picto-tel.jpg"
            class="object-cover w-6 h-5 pt-1 pr-2 flex"
            alt="PictoTel"
          />
          04 30 16 72 25
        </p>
      </div>
    </section>
  </header>
  <img
    src="/assets/img/bandeau1.jpg"
    class="object-cover w-full h-full"
    alt="Bandeau"
  />
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>
