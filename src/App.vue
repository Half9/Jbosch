<template>
  <div class="top-bar">
    <div class="container container-flex">
      <img src="@/assets/skull.png" alt="Skull" class="skull">
      <div class="mobile-menu-icon">
        <img v-show="!showMenu" src="@/assets/icons/bars.svg" alt="" @click="menuToggle">
        <img v-show="showMenu" src="@/assets/icons/skull.svg" alt="" @click="menuToggle">
      </div>
    </div>
    <div :class="[showMenu ? 'mobile-menu-open' : '', 'mobile-menu']">
      <TopMenu />
    </div>
  </div>
  <router-view />
</template>

<script setup>
import { ref } from 'vue';
import TopMenu from './components/TopMenu.vue';

const showMenu = ref(false)

function menuToggle() {
  showMenu.value = !showMenu.value
};


</script>

<style scoped lang="scss">
.top-bar {
  background: url(../src/assets/top_bar.png);
  background-repeat: repeat-x;
  background-position: bottom;
  height: 160px;
  position: relative;
  z-index: 99;
}

.container-flex {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.mobile-menu-icon {
  padding-right: 1rem;
  padding-top: 1rem;
  z-index: 99;

  @media (min-width: 600px) {
    display: none;
  }

  img {
    height: 2rem;
    filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(127deg) brightness(108%) contrast(101%);
  }
}

.mobile-menu {
  position: absolute;
  top: 65px;
  left: 0;
  z-index: 50;
  background: url(../src/assets/hero_bottom.png), url(../src/assets/mij_bg_top.png);
  background-repeat: repeat-x, repeat-x;
  background-position: bottom -30px center, top center;
  width: 100%;
  padding: 2rem 0 3rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;
  transform: translatey(-120%);
  transition: transform 500ms ease-in;

  @media (min-width: 600px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    gap: .5rem;


    &:deep(li) {
      padding: 1rem;

      a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        font-size: 1.3rem;
      }

    }
  }
}

.mobile-menu-open {
  transform: translatey(0);
}

.skull {
  margin-left: -15em;
  margin-top: -1.5rem;
  z-index: 200;

}

@media (max-width: 1600px) {
  .top-bar {
    height: 130px;
  }
}

@media (max-width: 600px) {
  .skull {
    height: 250px;
    margin-left: -8em;
  }

  .top-bar {
    height: 85px;
  }
}
</style>
