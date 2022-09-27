<template>
    <div class="container container-flex">
        <div class="menu-bg">
            <nav>
                <TopMenu />
            </nav>
        </div>
    </div>
    <template v-if="!loadDone || !project.data">
        <LoadSpinner />
    </template>
    <template v-else>
        <div class="title">
            <PrismicText :field="project.data.data.title" wrapper="h2" />
        </div>
        <main class="container container-push">
            <PrismicRichText :field="project.data.data.text" wrapper="article" />
        </main>
    </template>
    <FooterContact />
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { usePrismicDocumentByUID, PrismicText, PrismicRichText } from "@prismicio/vue";
import LoadSpinner from "../components/LoadSpinner.vue";
import TopMenu from "../components/TopMenu.vue";
import FooterContact from "../components/FooterContact.vue";


const route = useRoute();
const project = ref()
const loadDone = ref(false)


async function fetchData() {
    const uid = route.params.uid;
    const response = await usePrismicDocumentByUID("projecten", uid);
    project.value = response
    loadDone.value = true

};
fetchData()
console.log(project)

</script>

<style lang="scss" scoped>
.title {
    background: url(../src/assets/hero_bottom.png), url(../src/assets/mij_bg_top.png);
    background-repeat: repeat-x, repeat-x;
    background-position: bottom -30px center, top center;
    height: 250px;
    margin-top: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;

    @media (max-width: 600px) {
        height: 130px;
        padding-left: 2rem;

    }
}

.container {
    padding: 0 1rem;
}

.container-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-push {
    margin-top: 6rem;

    @media (max-width: 600px) {
        margin-top: 3rem;

    }
}

h2 {
    text-align: center;
    width: 100%;
    font-size: 4rem;
    color: white;
    text-shadow:
        3px 3px 10px #000,
        -1px -1px 10px #000,
        1px -1px 10px #000,
        -1px 1px 10px #000,
        1px 1px 10px #000;

    @media (max-width: 600px) {
        font-size: 2.5rem;
        word-break: break-word;

    }
}

main {

    &:deep(p) {
        line-height: 1.8rem;
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
    }

    &:deep(.block-img) {
        text-align: center;

        img {
            max-width: 100%;
        }
    }
}

.menu-bg {
    background: url(@/assets/menu_bg_klein.png);
    background-repeat: no-repeat;
    height: 96px;
    width: 701px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
    position: absolute;
    z-index: 100;
}

@media (max-width: 600px) {
    .menu-bg {
        display: none;
    }
}

nav {
    ul {
        display: flex;
        justify-content: center;
        gap: 3rem;
        list-style: none;
    }

    &:deep(a) {
        color: #FFF;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.2rem;
    }
}
</style>