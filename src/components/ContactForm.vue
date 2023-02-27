<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    id="modal"
    :class="hiddenClass"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="py-4 text-left px-6">
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold" v-if="!modalCgu">Contactez-Nous !</p>
            <p class="text-2xl font-bold" v-else>CGU</p>

            <div
              class="modal-close cursor-pointer z-50"
              @click.prevent="modalVisiblility = false"
            >
              <i class="fas fa-times">fermer</i>
            </div>
          </div>
          <ContactFields v-if="!modalCgu"></ContactFields>
          <ContactCgu v-else></ContactCgu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import useModalStore from "@/stores/modal";
import ContactFields from "@/components/ContactFields.vue";
import ContactCgu from "@/components/ContactCgu.vue";

export default {
  name: "contactForm",
  components: {
    ContactFields,
    ContactCgu,
  },
  computed: {
    ...mapState(useModalStore, ["hiddenClass"]),
    ...mapWritableState(useModalStore, {
      modalVisiblility: "isOpen",
      modalCgu: "isCgu",
    }),
  },
};
</script>
