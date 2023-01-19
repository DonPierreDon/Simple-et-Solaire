<template>
  <!-- <HeaderComp></HeaderComp> -->
  <ContactForm></ContactForm>
  <HeaderComp2></HeaderComp2>
  <EclairageSolaire></EclairageSolaire>
  <FormationSolaire></FormationSolaire>
  <AccueilPage></AccueilPage>
  <ExpertiseSolaire></ExpertiseSolaire>
  <ElectriciteSolaire></ElectriciteSolaire>
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
export default {
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
