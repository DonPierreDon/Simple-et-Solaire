<template>
  <p>
    Bandeau Afin de traiter votre demande, SIMPLE ET SOLAIRE devra effectuer un
    traitement des données personnelles vous concernant. Les données sont
    conservées pendant 2 ans à compter de notre dernier contact et sont
    destinées exclusivement à SIMPLE ET SOLAIRE, elles ne seront pas transmises
    à des tiers. Conformément à la loi Informatique et Libertés du 6 janvier
    1978 modifiée, vous bénéficiez d'un droit d'accès et de rectification des
    données vous concernant, d'un droit d'opposition pour motifs légitimes, d'un
    droit à l'effacement des données. Vous disposez également d'un droit à la
    récupération et à la portabilité des données dans certains cas
    spécifiquement prévus par la loi. Pour l'exercice de vos droits veuillez
    contacter : SIMPLE ET SOLAIRE, RUE MANGEFER ATELIER 2 2 RUE MANGEFER ATELIER
    2, 11120 ARGELIERS contact@simple-et-solaire.fr
  </p>
  <button
    type="submit"
    class="block w-full bg-orange-600 text-white py-1.5 px-3 rounded transition hover:bg-orange-700"
    @click.prevent="modalCgu = false"
  >
    retour
  </button>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import useModalStore from "@/stores/modal";

export default {
  computed: {
    ...mapState(useModalStore, ["hiddenClass"]),
    ...mapWritableState(useModalStore, {
      modalVisiblility: "isOpen",
      modalCgu: "isCgu",
    }),
  },
};
</script>
