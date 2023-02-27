<template>
  <!-- <HeaderComp></HeaderComp> -->
  <ContactForm></ContactForm>
  <HeaderComp2></HeaderComp2>
  <router-view></router-view>
  <FooterComp></FooterComp>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import HeaderComp2 from "./components/HeaderComp2.vue";
import ContactForm from "@/components/ContactForm.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: {
    ContactForm,
    FooterComp,
    HeaderComp2,
  },
};
</script>
