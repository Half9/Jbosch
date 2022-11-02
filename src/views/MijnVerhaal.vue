<template>
    <div class="container">
        <div class="bg">
            <img src="../assets/project_bg.png" />
        </div>
        <div v-if="!loadDone || !siteText.data">
            <LoadSpinner />
        </div>

        <template v-if="loadDone && siteText.data">
            <PrismicRichText :field="siteText.data.data.mijn_verhaal" wrapper="main" />
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSinglePrismicDocument, PrismicRichText } from '@prismicio/vue'
import LoadSpinner from '../components/LoadSpinner.vue'

const siteText = ref()
const loadDone = ref(false)

async function fetchData() {
    const response = await useSinglePrismicDocument('mijn_verhaal')
    siteText.value = response
    loadDone.value = true
}
fetchData()
</script>

<style lang="scss" scoped>
main {
    width: 80%;
    margin-left: auto;
    margin-right: 1rem;
    position: relative;
    z-index: 80;

    &:deep(h2) {
        margin-block: 2rem;
    }

    &:deep(p) {
        margin-bottom: 2rem;
        line-height: 2.1rem;
        font-size: 1.2rem;
        text-align: justify;
        text-justify: inter-word;
    }

    &:deep(a) {
        text-decoration: none;
        color: #fff;
        font-weight: 600;

        &:hover {
            color: #ce6831;
        }
    }
}

.container {
    position: relative;
}

.bg {
    position: absolute;
    top: -50px;
    right: 60%;

    @media (max-width: 870px) {
        right: 45%;
    }
}
</style>
