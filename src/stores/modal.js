import { defineStore } from "pinia";

export default defineStore("modal", {
  state: () => ({
    isOpen: false,
    isCgu: false,
    pageOn: "accueil",
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});
