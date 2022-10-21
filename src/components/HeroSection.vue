<template>
  <div class="hero-bg">
    <div class="container">
      <header class="hero-text">
        <img src="@/assets/jbosch_logo.svg" alt="JBosch logo" class="logo" />
        <h1>Jimmy van den Bosch</h1>
        <p>front-end developer</p>
      </header>
    </div>
    <div class="hero-bottom">
      <div class="menu-bg">
        <nav>
          <TopMenu />
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopMenu from './TopMenu.vue'
</script>

<style scoped lang="scss">
.hero-bg {
  background: url(@/assets/hero_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  height: 585px;
  position: relative;
  top: -20px;
}

@media (max-width: 1600px) {
  .hero-bg {
    background-position: bottom right -350px;
  }
}

@media (max-width: 700px) {
  .hero-bg {
    background-position: bottom right -420px;
  }
}

.hero-bottom {
  background: url(@/assets/hero_bottom.png);
  background-repeat: repeat-x;
  height: 70px;
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
}

.logo {
  max-width: 100%;
  padding: 2rem;
}

.menu-bg {
  background: url(@/assets/menu_bg_klein.png);
  background-repeat: no-repeat;
  height: 96px;
  width: 701px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -20px;
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

h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

p {
  font-size: 2rem;
  font-weight: 500;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
