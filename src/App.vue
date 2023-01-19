<template>
  <!-- <HeaderComp></HeaderComp> -->
  <ContactForm></ContactForm>
  <HeaderComp2></HeaderComp2>
  <AccueilPage v-if="pageOn === 'accueil'"></AccueilPage>
  <EclairageSolaire v-else-if="pageOn === 'eclairage'"></EclairageSolaire>
  <FormationSolaire v-else-if="pageOn === 'formation'"></FormationSolaire>
  <ExpertiseSolaire v-else-if="pageOn === 'expertise'"></ExpertiseSolaire>
  <ElectriciteSolaire v-else-if="pageOn === 'electricite'"></ElectriciteSolaire>
  <FooterComp></FooterComp>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import HeaderComp2 from "./components/HeaderComp2.vue";
import ContactForm from "@/components/ContactForm.vue";
import EclairageSolaire from "@/components/EclairageSolaire.vue";
import FooterComp from "@/components/FooterComp.vue";
import FormationSolaire from "./components/FormationSolaire.vue";
import AccueilPage from "./components/AccueilPage.vue";
import ExpertiseSolaire from "./components/ExpertiseSolaire.vue";
import ElectriciteSolaire from "./components/ElectriciteSolaire.vue";

import { storeToRefs } from "pinia";
import useModalStore from "@/stores/modal";

export default {
  setup() {
    const store = useModalStore();
    const { pageOn } = storeToRefs(store);

    return {
      pageOn,
    };
  },
  components: {
    HeaderComp,
    ContactForm,
    EclairageSolaire,
    FooterComp,
    FormationSolaire,
    AccueilPage,
    ExpertiseSolaire,
    ElectriciteSolaire,
    HeaderComp2,
  },
};
</script>
