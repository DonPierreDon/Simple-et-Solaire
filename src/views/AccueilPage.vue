<template>
  <div class="text-lime-700 text-center text-3xl pt-5">
    <p>Entreprise d'autonomie électrique entre Béziers et Narbonne</p>
  </div>
  <div class="text-orange-600 text-center text-2xl pt-4">
    <p>
      Installation et maintenance, et formation solaire : Simple & Solaire dans
      l'Aude !
    </p>
  </div>
  <div class="text-center mt-4">
    <p>
      Depuis 2008, notre entreprise Simple & Solaire à Argeliers est spécialisée
      dans l'autonomie électrique.
    </p>
    <p>
      Grâce à notre
      <router-link
        href="#"
        :to="{ name: 'expertise' }"
        class="underline underline-offset-2 font-medium"
        >expérience en installation solaires</router-link
      >
      de plus de 10 ans, nous mettons tout en œuvre pour répondre à vos attentes
      en matière d'installation et de dépannage de panneaux solaires.
    </p>
    <p>
      Produire et consommer son energie n'a jamais été aussi simple qu'avec nos
      conseils !
    </p>
  </div>
  <div class="text-orange-600 text-center text-xl pt-5">
    <p>Autoconsommation ou Autonomie photovoltaïque dans l'Aude ?</p>
  </div>
  <div class="text-center mt-4">
    <p>
      L'énergie produite par le soleil est quasi inépuisable. On peut la capter
      avec des panneaux photovoltaïques.
    </p>
    <p>
      Quand on consomme cette energie directement, c'est ce qu'on appelle
      l'autoconsommation. Cela permet d'alleger la facture d'electricité.
    </p>
    <p>
      Si on stocke cette energie dans des batteries, pour une utilisation
      ultérieure, c'est ce qu'on appelle l'autonomie.
    </p>
  </div>
  <div class="text-orange-600 text-center text-xl mt-6">
    <p>
      Profitez de notre expertise en installation solaire et formation solaire !
    </p>
  </div>
  <div class="bg-orange-200 mt-4">
    <div>
      <div class="container px-3 py-2 mx-auto lg:pt-6 lg:px-">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/3 bg-orange-200">
            <div class="w-full p-1 md:p-2 mt-4">
              <p>
                Pour améliorer votre autoconsommation, nous vous proposons :
              </p>
              <ul class="list-disc ml-16 mt-2">
                <li>
                  Des
                  <router-link
                    href="#"
                    :to="{ name: 'formation' }"
                    class="underline underline-offset-2 font-medium"
                    >formations à l'autonomie solaire</router-link
                  >
                </li>
                <li>Une formation à l'économie d'énergie</li>
                <li>Les conseils techniques</li>
                <li>
                  L'installation
                  <router-link
                    href="#"
                    :to="{ name: 'electricite' }"
                    class="underline underline-offset-2 font-medium"
                    >d'électricité solaire</router-link
                  >
                </li>
                <li>
                  L'installation de systèmes d'autoconsommation sans réinjection
                  réseau
                </li>
                <li>
                  L'installation de systèmes d'autoconsommation avec vente du
                  surplus
                </li>
                <li>Le stockage solaire sur batteries</li>
                <li>Les travaux de maintenance</li>
                <li>La liaison entre les réseaux et les sites isolés.</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-wrap w-1/3 orange-200">
            <div class="w-full p-1 md:p-2 mt-4">
              <p>
                Pour accéder à l'autonomie énergétique, nos spécialistes mettent
                à votre disposition une large gamme de
                <router-link
                  href="#"
                  :to="{ name: 'materiel' }"
                  class="underline underline-offset-2 font-medium"
                  >matériel solaire</router-link
                >
                au détail, de kits solaires et de prestations avec des prix
                raisonnables, notamment :
              </p>
              <ul class="list-disc ml-16 mt-2">
                <li>
                  Kits d'
                  <router-link
                    href="#"
                    :to="{ name: 'eclairage' }"
                    class="underline underline-offset-2 font-medium"
                    >éclairage solaire</router-link
                  >
                </li>
                <li>Kits solaires autonomes</li>
                <li>Kits solaires d'autoconsommation</li>
                <li>Kits solaires Afrique</li>
                <li>Kits de pompage solaire</li>
                <li>Batteries solaires</li>
                <li>Panneaux photovoltaïques.</li>
                <li>L'expertise sur site</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2 mt-10 ml-4 bg-white">
              <img
                src="public/assets/img/PanneauxSolaireAccueil.jpg"
                alt="PanneauxSolaireAccueil"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-orange-200 ml-48 mr-48">
      <p class="ml-20 border-t-2 border-l-2 border-orange-400">
        Pour répondre au mieux à vos besoins, nous vous assurons aussi le
        diagnostic et la réparation de vos installations solaires.
      </p>
      <p class="ml-20 border-l-2 border-orange-400">
        Sérieux et à l'écoute, nous vous aidons à l'étude, au dimensionnement, à
        l'achat de matériel et à l'installation.
      </p>
    </div>
  </div>
  <div class="text-orange-600 text-center text-xl mt-10">
    <p>Zone d'intervention et horaires</p>
  </div>
  <div class="text-center mt-2">
    <p>
      Disponibles et réactifs, nous intervenons auprès de particuliers et des
      professionnels en France comme à l'international.
    </p>
    <p>
      Notre équipe de spécialistes d'autonomie électrique reçoit toutes vos
      demandes du lundi au vendredi de 9h à 18h.
    </p>
    <p>
      Pour plus de renseignements ou pour demander un devis personnalisé,
      n'hésitez pas à
      <button
        class="underline underline-offset-2 font-medium"
        @click.prevent="toggleContactForm"
      >
        contacter notre entreprise de formation à l'autonomie solaire
      </button>
      à Argeliers.
    </p>
  </div>
  <div class="container px-5 py-2 mx-auto lg:pt-6 lg:px-4">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="public/assets/img/Accuei1.jpg"
          />
        </div>
      </div>
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="public/assets/img/Accueil2.jpg"
          />
        </div>
      </div>
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="public/assets/img/FormationAutonom3.jpg"
          />
        </div>
      </div>
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="public/assets/img/Accueil4.jpg"
          />
        </div>
      </div>
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="public/assets/img/Accueil5.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";

export default {
  name: "AccueilPage",
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
