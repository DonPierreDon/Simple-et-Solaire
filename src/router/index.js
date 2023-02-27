import { createRouter, createWebHistory } from "vue-router";
import AccueilPage from "@/views/AccueilPage.vue";
import EclairageSolaire from "@/views/EclairageSolaire.vue";
import ElectriciteSolaire from "@/views/ElectriciteSolaire.vue";
import ExpertiseSolaire from "@/views/ExpertiseSolaire.vue";
import FormationSolaire from "@/views/FormationSolaire.vue";
import MaterielSolaire from "@/views/MaterielSolaire.vue";
import MentionsLegales from "@/views/MentionsLegales.vue";
import CreditsPhotos from "@/views/CreditsPhotos.vue";

const routes = [
  {
    path: "/",
    name: "accueil",
    component: AccueilPage,
  },
  {
    path: "/eclairage-solaire",
    name: "eclairage",
    component: EclairageSolaire,
  },
  {
    path: "/electricite-solaire",
    name: "electricite",
    component: ElectriciteSolaire,
  },
  {
    path: "/expertise-solaire",
    name: "expertise",
    component: ExpertiseSolaire,
  },
  {
    path: "/formation-solaire",
    name: "formation",
    component: FormationSolaire,
  },
  {
    path: "/materiel-solaire",
    name: "materiel",
    component: MaterielSolaire,
  },
  {
    path: "/mentions-legales",
    name: "mentionslegales",
    component: MentionsLegales,
  },
  {
    path: "/credits-photos",
    name: "creditsphotos",
    component: CreditsPhotos,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
