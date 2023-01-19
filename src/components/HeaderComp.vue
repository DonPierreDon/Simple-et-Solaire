<template>
  <header class="text-slate-800 sticky top-0 z-10 font-josefin">
    <section class="relative flex items-center justify-between bg-lime-100 p-1">
      <h1 class="text-3x1 font-medium">
        <img
          src="/assets/img/SimpleSolaire-Logo.jpg"
          class="object-cover w-full h-full"
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
          class="hidden sm:block space-x-5 text-xl flex-row flex-grow bg-lime-100 p-4 overflow-y-scroll"
          aria-label="main"
        >
          <a href="" class="hover:opacity-90 pt-2">Accueil</a>
          <a href="" class="hover:opacity-90 pt-2"
            >Formation a l'autonomie solaire</a
          >
          <a href="" class="hover:opacity-90 pt-2">Electricite solaire</a>
          <a href="" class="hover:opacity-90 pt-2"
            >Expertise en installation solaire</a
          >
          <a href="" class="hover:opacity-90 pt-2"
            >Materiel solaire au detail</a
          >
          <a href="" class="hover:opacity-90 pt-2">Eclairage solaire</a>
          <a
            href="#"
            @click.prevent="toggleContactForm"
            class="hover:opacity-90 pt-2"
            >Contact</a
          >
        </nav>
      </div>
      <div
        class="overflow-visible flex-column flex-grow w-70 h-32 border-double border-2 border-amber-600 text-center bg-white"
      >
        <h1 class="text-center text-2xl text-lime-800">Simple et Solaire</h1>
        <p class="text-left pl-2 flex pt-3">
          <img
            src="/assets/img/picto-map.jpg"
            class="object-cover w-6 h-6 pt-1 pr-2"
            alt="PictoMap"
          />
          2 rue Mangefer-Atelier 211120 Argeliers
        </p>
        <p class="text-left pl-2 pt-2 flex">
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
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
export default {
  name: "HeaderComp",
  computed: {
    ...mapStores(useModalStore),
  },
  methods: {
    toggleContactForm() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
      console.log(this.modalStore.isOpen);
    },
  },
};
</script>
