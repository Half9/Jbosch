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
    <main class="container">
      <div class="icons">
        <img
          v-show="project.data.data.vue"
          src="../assets/icons/vuejs.svg"
          alt="Vue js" />
        <img
          v-show="project.data.data.html"
          src="../assets/icons/html5.svg"
          alt="HTML 5 icon" />
        <img
          v-show="project.data.data.css"
          src="../assets/icons/css3-alt.svg"
          alt="CSS 3 icon" />
        <img
          v-show="project.data.data.javascript"
          src="../assets/icons/js.svg"
          alt="Javascript icon" />
        <a :href="project.data.data.github_url" target="_blank">
          <img
            v-show="project.data.data.github"
            src="../assets/icons/github.svg"
            alt="Github icon" />
        </a>
        <a
          v-show="project.data.data.url_website"
          class="link"
          :href="project.data.data.url_website"
          target="_blank">
          Naar de website
        </a>
      </div>

      <article>
        <SliceZone :slices="project.data.data.body" :components="components" />
      </article>
      <div
        v-show="project.data.data.url_website || project.data.data.github"
        class="icons-bottom">
        <span v-show="project.data.data.vue" class="link">
          <img src="../assets/icons/vuejs.svg" alt="Vue js" />
          Vue 3
        </span>
        <a
          v-show="project.data.data.github"
          :href="project.data.data.github_url"
          target="_blank"
          class="link">
          <img src="../assets/icons/github.svg" alt="Github icon" />
          Bekijk op Github
        </a>
        <a
          v-show="project.data.data.url_website"
          class="link"
          :href="project.data.data.url_website"
          target="_blank">
          <img src="../assets/icons/Site.svg" alt="Site icon" />
          Naar de website
        </a>
      </div>
    </main>
  </template>
  <FooterContact />
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  usePrismicDocumentByUID,
  PrismicText,
  SliceZone,
  defineSliceZoneComponents,
} from '@prismicio/vue'
import LoadSpinner from '../components/LoadSpinner.vue'
import TopMenu from '../components/TopMenu.vue'
import FooterContact from '../components/FooterContact.vue'

import SliceImage from '../components/slice/SliceImage.vue'
import SliceText from '../components/slice/SliceText.vue'

const route = useRoute()
const project = ref()
const loadDone = ref(false)

async function fetchData() {
  const uid = route.params.uid
  const response = await usePrismicDocumentByUID('projecten', uid)
  project.value = response
  loadDone.value = true
}
fetchData()

const components = defineSliceZoneComponents({
  plaatje: SliceImage,
  tekst: SliceText,
})

console.log(project)
</script>

<style lang="scss" scoped>
.title {
  background: url(../assets/hero_bottom.png), url(../assets/mij_bg_top.png);
  background-repeat: repeat-x, repeat-x;
  background-position: bottom -30px center, top center;
  height: 250px;
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;

  @media (max-width: 600px) {
    height: 100%;
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
  text-shadow: 3px 3px 10px #000, -1px -1px 10px #000, 1px -1px 10px #000,
    -1px 1px 10px #000, 1px 1px 10px #000;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    word-break: break-word;
    padding: 1rem 0 1.5rem;
  }
}

main {
  article {
    margin-top: 2rem;
    margin-bottom: 8rem;

    @media (max-width: 600px) {
      margin-top: 2rem;
    }

    &:deep(h2) {
      font-size: 1.75rem;
      margin-bottom: 1rem;

      @media (max-width: 600px) {
        font-size: 1.3rem;
        margin-bottom: 0.3rem;
      }
    }

    &:deep(.text) {
      width: 75%;
      margin: 0 auto;

      @media (max-width: 600px) {
        width: 100%;
      }

      p {
        line-height: 1.8rem;
        font-size: 1.2rem;
        font-weight: 300;
        margin-bottom: 3.5rem;

        @media (max-width: 600px) {
          font-size: 1rem;
          margin-bottom: 2rem;
        }
      }
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
  z-index: 99;
  transform: rotate(2deg);
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
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;
  }
}

.icons {
  display: flex;
  gap: 1rem;
  padding-top: 2rem;
  align-items: top;
  justify-content: flex-end;
  position: relative;
  z-index: 98;
  width: 100%;

  img[src*='svg'] {
    height: 2rem;
    filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(127deg)
      brightness(108%) contrast(101%);
  }

  .link {
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 0.4rem 0.6rem;

    &:hover {
      background-color: #fff;
      color: var(--bg);
      font-weight: 500;
    }
  }
}

.icons-bottom {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;

  img[src*='svg'] {
    height: 2rem;
    filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(127deg)
      brightness(108%) contrast(101%);
  }

  .link {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    align-items: center;
    border: 0;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    width: 12rem;

    &:hover {
      background: none;
      color: #fff;
      outline: 2px solid #fff;
    }
  }
}
</style>
