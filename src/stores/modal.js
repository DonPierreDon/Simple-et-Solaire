import { defineStore } from "pinia";

export default defineStore("modal", {
  state: () => ({
    isOpen: false,
    pageOn: "accueil",
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});
