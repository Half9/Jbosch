<template>
  <div id="overmij" class="over-mij-bg">
    <div class="container">
      <div class="grid">
        <img
          src="../assets/schilderij_klein.png"
          alt="Ik op de motor en foto van mijn 3d printer" />

        <div v-if="loadDone" class="papier" style="width: 90%">
          <LoadSpinner />
        </div>

        <template v-if="loadDone && siteText.data">
          <PrismicRichText
            :field="siteText.data.data.over_mij_tekst"
            wrapper="article"
            class="papier" />
        </template>

        <img
          src="../assets/schilderij_groot.png"
          alt="Ik met mijn oude vrachtwagen." />
      </div>
    </div>
  </div>
  <div class="over-mij-bg-footer"></div>
</template>

<script setup>
import { ref } from 'vue'
import { useSinglePrismicDocument, PrismicRichText } from '@prismicio/vue'
import LoadSpinner from './LoadSpinner.vue'

const siteText = ref()
const loadDone = ref(false)

async function fetchData() {
  const response = await useSinglePrismicDocument('over_mij')
  siteText.value = response
  loadDone.value = true
}
fetchData()
</script>

<style lang="scss" scoped>
.over-mij-bg {
  background: url(@/assets/mij_bg_top.png);
  background-repeat: repeat;
  min-height: 978px;
  margin-top: -10px;
}

.over-mij-bg-footer {
  background: url(@/assets/mij_bg_footer_groot.png);
  background-repeat: repeat-x;
  min-height: 315px;
  margin-top: -250px;
  z-index: 50;
  position: relative;
}

img {
  max-width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 99;
  position: relative;
  padding-top: 6rem;
  justify-items: center;
  grid-template-areas:
    'fotok text'
    'fotog text';

  & > img:nth-child(1) {
    grid-area: fotok;
  }

  & > img:nth-child(3) {
    grid-area: fotog;
  }
}

@media (max-width: 870px) {
  .grid {
    grid-template-columns: 1fr;
    padding-top: 2rem;
    grid-template-areas:
      'fotok'
      'text'
      'fotog';
  }

  .papier {
    margin-inline: 0.5rem;
  }
}

.papier {
  grid-area: text;
  background: url(@/assets/papier.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  padding: 2rem;
  box-shadow: 0 0 25px 2px #000;
  transform: rotate(-2deg);
  margin-right: 1rem;

  :deep(p) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #000;
    font-family: 'Gloria Hallelujah', cursive;
  }
}

@media (max-width: 540px) {
  .papier {
    transform: rotate(0deg);
  }
}
</style>
