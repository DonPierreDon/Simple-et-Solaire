<template>
  <div class="text-center">
    <button
      class="bg-lime-400 hover:bg-lime-300 text-gray-500 font-bold py-2 px-4 rounded hover:translate-y-2 transition-transform duration-200 mt-2"
      @click.prevent="toggleContactForm"
    >
      Formulaire de contact
    </button>
  </div>
  <div class="flex items-center justify-center h-32">
    <img
      src="/assets/img/SimpleSolaire-Logo.jpg"
      class="object-cover w-124 h-16"
      alt="Bandeau"
    />
  </div>
  <div class="flex justify-center">
    <div
      class="overflow-visible flex-column bg-white text-center justify-center"
    >
      <div>
        <p class="text-left flex justify-center">
          <img
            src="/assets/img/picto-map.jpg"
            class="object-cover pt-1 pr-2"
            alt="PictoMap"
          />
          2 rue Mangefer-Atelier 211120 Argeliers
        </p>
      </div>
      <div>
        <p class="text-left flex justify-center">
          <img
            src="/assets/img/picto-tel.jpg"
            class="object-cover w-6 h-5 pt-1 pr-2 flex"
            alt="PictoTel"
          />
          04 30 16 72 25
        </p>
      </div>
      <div class="text-center">
        <a
          href="#"
          class="text-blue-700 hover:text-blue-600 hover:translate-y-1 relative inline-block transition-all duration-200"
          >Facebook</a
        >
      </div>
    </div>
  </div>
  <div
    class="text-center text-lime-600 text-lg border-4 border-lime-200 border-dashed mt-4 h-12 flex justify-center items-center"
  >
    <p class="flex-1">
      Notre expertise d'autonomie électrique Simple & Solaire à Argeliers vous
      propose : formation à l'autonomie solaire, électricité solaire,
      installation et dépannage solaire, éclairage solaire et vente de matériel
      solaire
    </p>
  </div>
  <div
    class="text-white bg-blue-900 flex text-center h-12 justify-center items-center"
  >
    <div class="w-1/4 flex-1">
      <router-link
        href="#"
        :to="{ name: 'mentionslegales' }"
        class="relative block transform hover:scale-110 transition-transform duration-200 w-full"
        >Mentions Légales</router-link
      >
    </div>
    <div class="w-1/4 flex-1">
      <router-link
        href="#"
        :to="{ name: 'creditsphotos' }"
        class="relative block transform hover:scale-110 transition-transform duration-200"
        >Crédits Photos</router-link
      >
    </div>
    <div class="w-1/4 flex-1">
      <a
        href="#"
        class="relative inline-block transform hover:scale-110 transition-transform duration-200"
        >CGU</a
      >
    </div>
    <div class="w-1/4 flex-1">
      <a
        href="#"
        class="relative inline-block transform hover:scale-110 transition-transform duration-200"
        >Créé par Pierre Donnadieu</a
      >
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
export default {
  name: "FooterComp",
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
