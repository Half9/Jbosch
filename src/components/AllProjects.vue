<template>
  <div class="container">
    <div class="bg">
      <img src="../assets/project_bg.png" />
    </div>
    <div id="projecten" class="content">
      <h2>Projecten</h2>

      <template v-if="!loadDone || !projecten.data">
        <LoadSpinner />
      </template>

      <template v-else>
        <div v-for="project in projecten.data" :key="project.uid" class="project">
          <!-- <RouterLink :to="'/projecten/' + project.uid" target="_self"> -->
          <RouterLink :to="{ name: 'Projecten', params: { uid: project.uid } }" target="_self">
            <PrismicText :field="project.data.title" wrapper="h3" />
          </RouterLink>

          <div class="text">
            <PrismicRichText :field="project.data.intro" wrapper="article" />

            <div class="icons">
              <img v-show="project.data.vue" src="../assets/icons/vuejs.svg" alt="Vue js" />
              <img v-show="project.data.html" src="../assets/icons/html5.svg" alt="HTML 5 icon" />
              <img v-show="project.data.css" src="../assets/icons/css3-alt.svg" alt="CSS 3 icon" />
              <img v-show="project.data.javascript" src="../assets/icons/js.svg" alt="Javascript icon" />

              <RouterLink class="link" :to="'/projecten/' + project.uid" target="_self">
                Meer informatie
              </RouterLink>

              <a :href="project.data.github_url" target="_blank">
                <img v-show="project.data.github" src="../assets/icons/github.svg" alt="Javascript icon" />
              </a>
            </div>
          </div>
          <div class="project-img">
            <RouterLink :to="'/projecten/' + project.uid" target="_self">
              <img :src="
                project.data.cover_img.url.substring(
                  0,
                  project.data.cover_img.url.lastIndexOf('?')
                )
              " alt="Website Fox and Waterman" />
            </RouterLink>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  useAllPrismicDocumentsByType,
  PrismicText,
  PrismicRichText,
} from '@prismicio/vue'
import LoadSpinner from './LoadSpinner.vue'

const projecten = ref()
const loadDone = ref(false)

async function fetchData() {
  const response = await useAllPrismicDocumentsByType('projecten', {
    orderings: 'my.projecten.order desc',
  })
  projecten.value = response
  loadDone.value = true
}
fetchData()
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
  height: 100%;
}

h2 {
  font-size: 2.5rem;
  letter-spacing: 0.4rem;
  padding: 4rem 0 5rem 0;
}

h3 {
  font-size: 2rem;
  letter-spacing: 0.3rem;
  grid-area: title;
}

p {
  line-height: 1.6rem;
}

.container {
  position: relative;
}

.bg {
  position: absolute;
  top: -22px;
  right: 60%;
}

@media (max-width: 1200px) {
  .bg {
    right: 50%;
  }
}

@media (max-width: 870px) {
  .bg {
    right: 20%;
  }
}

.content {
  position: relative;
  z-index: 99;
}

.project {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  grid-template-areas:
    'title img'
    'text img';
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 870px) {
  .project {
    padding: 1rem;
  }
}

@media (max-width: 750px) {
  .project {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'img'
      'text';

    img {
      max-width: 100%;
    }
  }
}

.project-img {
  grid-area: img;
  text-align: center;
}

.text {
  grid-area: text;
  display: flex;
  flex-direction: column;

  :deep(p) {
    line-height: 1.8rem;
    padding-bottom: 0.5rem;
    font-size: 1.2rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
}

.icons {
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
  align-items: center;

  img[src*='svg'] {
    height: 2rem;
    filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(127deg) brightness(108%) contrast(101%);
  }
}

.link {
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  padding: 0.4rem 0.6rem;
  margin-left: auto;

  &:hover {
    background-color: #fff;
    color: var(--bg);
    font-weight: 500;
  }
}
</style>
