<template>
  <div class="text-lime-700 text-center text-3xl pt-5">
    <p>Expertise en installation solaire dans l'Aude : Simple & Solaire</p>
  </div>
  <div class="text-orange-600 text-center text-2xl pt-4">
    <p>
      Confiez-nous l'ETUDE de votre système électrique solaire dans le secteur
      de Narbonne et Béziers !
    </p>
  </div>
  <div class="text-center pt-3">
    <p class="pt-2">
      Vous êtes à la recherche de
      <strong class="font-medium"
        >professionnels en autonomie énergétique</strong
      >
      ? Vous avez besoin d'<strong class="font-medium"
        >étudier votre projet solaire</strong
      >
      ? Vous voulez
      <strong class="font-medium">vérifier votre installation solaire</strong> ?
    </p>
    <p class="pt-2">
      Notre <strong class="font-medium">entreprise Simple & Solaire</strong> à
      Argeliers vous propose diverses prestations de qualité en matière
      d'<strong class="font-medium">installation et maintenance solaire</strong
      >.
    </p>
    <p class="pt-2">
      Pour réaliser votre projet d'autonomie energétique, nous vous garantissons
      une intervention rapide sur
      <strong class="font-medium">toute la France et même à l'étranger</strong>.
    </p>
    <p class="pt-2">Nous nous occupons de tout !</p>
  </div>
  <div class="container px-5 py-2 mx-auto lg:pt-6 lg:px-4">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="/public/assets/img/InstalSolaire1.jpg"
          />
        </div>
      </div>
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="/public/assets/img/InstalSolaire2.jpg"
          />
        </div>
      </div>
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="/public/assets/img/InstalSolaire3.jpg"
          />
        </div>
      </div>
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="/public/assets/img/InstalSolaire4.jpg"
          />
        </div>
      </div>
      <div class="flex flex-wrap w-1/5">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="/public/assets/img/InstalSolaire5.jpg"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="text-orange-600 text-center text-xl pt-5">
    Une équipe dynamique et qualifiée est à votre disposition !
  </div>
  <div class="text-center pt-4 mb-2">
    Soucieuse de votre satisfaction, votre entreprise Simple & Solaire (11) vous
    propose différents produits d'excellente qualité à la vente :
  </div>
  <div class="container px-3 py-2 mx-auto lg:pt-6 lg:px-">
    <div
      class="flex flex-wrap -m-1 md:-m-2 divide-x-4 divide-lime-200 divide-dashed"
    >
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <ul class="list-disc ml-96">
            <li>
              L'installation d'
              <router-link
                href="#"
                :to="{ name: 'electricite' }"
                class="underline underline-offset-2 font-medium"
                >électricité solaire</router-link
              >
            </li>
            <li>L'installation d'éoliennes</li>
            <li>La liaison entre les réseaux et les sites isolés</li>
            <li>Le stockage solaire sur batteries</li>
            <li>La liaison entre les réseaux et les sites isolés</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <ul class="list-disc ml-16">
            <li>La mise en place de groupe électrogène</li>
            <li>Les travaux de maintenance</li>
            <li>
              L'installation de systèmes d'autoconsommation sans revente à EDF
            </li>
            <li>L'étude complète de votre projet solaire.</li>
            <li>L'installation d'onduleurs solaires</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center mt-20">
    <p class="pt-1">
      Adressez-vous à Simple & Solaire (11) pour acheter le
      <router-link
        href="#"
        :to="{ name: 'materiel' }"
        class="underline underline-offset-2 font-medium"
        >matériel solaire</router-link
      >
      qui correspond à vos besoins occasionnels ou quotidiens !
    </p>
    <p class="pt-1">
      Pour toute information supplémentaire ou pour demander un devis
      personnalisé, n'hésitez pas à contacter notre expertise en installation
      solaire à Argeliers.
    </p>
  </div>
</template>

<script>
export default {
  name: "ExpertiseSolaire",
};
</script>
