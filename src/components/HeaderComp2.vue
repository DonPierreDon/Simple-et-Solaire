<template>
  <header class="sticky top-0">
    <div>
      <div
        class="text-black bg-lime-200 flex text-center justify-center items-center h-20"
      >
        <div class="w-1/7 flex-1">
          <router-link
            href="#"
            :to="{ name: 'accueil' }"
            class="relative block transform hover:scale-110 transition-transform duration-200 w-full"
          >
            Accueil
          </router-link>
        </div>
        <div class="w-1/7 flex-1">
          <router-link
            href="#"
            :to="{ name: 'formation' }"
            class="relative block transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/public/assets/img/icons/FormationIcon.png"
              class="object-cover w-12 h-12 pt-1 pr-2 flex ml-36"
              alt="IconFormation"
            />
            Formation a l'autonomie solaire
          </router-link>
        </div>
        <div class="w-1/7 flex-1">
          <router-link
            href="#"
            :to="{ name: 'electricite' }"
            class="relative inline-block transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/public/assets/img/icons/ElecIcon.png"
              class="object-cover w-12 h-12 pt-1 pr-2 flex ml-12"
              alt="IconFormation"
            />
            Electricite Solaire
          </router-link>
        </div>
        <div class="w-1/7 flex-1">
          <router-link
            href="#"
            :to="{ name: 'expertise' }"
            class="relative inline-block transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/public/assets/img/icons/ExpertiseIcon.png"
              class="object-cover w-12 h-12 pt-1 pr-2 flex ml-28"
              alt="IconFormation"
            />
            Expertise en installations Solaire
          </router-link>
        </div>
        <div class="w-1/7 flex-1">
          <router-link
            href="#"
            :to="{ name: 'materiel' }"
            class="relative inline-block transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/public/assets/img/icons/MaterielIcon.png"
              class="object-cover w-12 h-12 pt-1 pr-2 flex ml-20"
              alt="IconFormation"
            />
            Materiel solaire au detail
          </router-link>
        </div>
        <div class="w-1/7 flex-1">
          <router-link
            href="#"
            :to="{ name: 'eclairage' }"
            class="relative inline-block transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/public/assets/img/icons/EclairageIcon.png"
              class="object-cover w-12 h-12 pt-1 pr-2 flex ml-12"
              alt="IconFormation"
            />
            Eclairage Solaire
          </router-link>
        </div>
        <div class="w-1/7 flex-1">
          <button
            href="#"
            @click.prevent="toggleContactForm"
            class="bg-orange-400 hover:bg-orange-300 font-bold py-2 px-4 rounded hover:translate-y-2 transition-transform duration-200 mt-2"
          >
            Contactez-nous !
          </button>
        </div>
      </div>
    </div>
  </header>
  <div
    class="text-black flex text-center justify-center items-center h-48 bg-white"
  >
    <div class="w-1/2">
      <img
        src="/public/assets/img/SimpleSolaire-Logo.jpg"
        class="object-cover pt-1 pr-2 flex ml-96 mt-4"
        alt="IconFormation"
      />
      <p class="ml-48">
        Formation à l'autonomie solaire - Diagnostic - Installation et SAV en
        panneau photovoltaïque
      </p>
    </div>
    <div class="w-1/2 flex justify-center">
      <div
        class="overflow-visible flex-column border-double border-2 border-lime-600 bg-white text-center justify-center p-6"
      >
        <div>
          <h1 class="text-lime-300 text-2xl">Simple et Solaire</h1>
        </div>
        <div>
          <p class="text-left flex mt-2 justify-center">
            <img
              src="/assets/img/picto-map.jpg"
              class="object-cover pt-1 pr-2"
              alt="PictoMap"
            />
            2 rue Mangefer-Atelier 211120 Argeliers
          </p>
        </div>
        <div>
          <p class="text-left pl-2 pt-2 flex justify-center">
            <img
              src="/assets/img/picto-tel.jpg"
              class="object-cover pt-1 pr-2 flex"
              alt="PictoTel"
            />
            04 30 16 72 25
          </p>
        </div>
      </div>
    </div>
  </div>
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
    changePage(value) {
      this.modalStore.pageOn = value;
    },
  },
};
</script>
