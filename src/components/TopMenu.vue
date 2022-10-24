<template>
  <ul>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/#overmij">Over mij</RouterLink>
    </li>
    <li>
      <RouterLink to="/#projecten">Projecten</RouterLink>
    </li>
    <li>
      <RouterLink to="/#contact">Contact</RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
nav {
  ul {
    display: flex;
    justify-content: center;
    gap: 3rem;
    list-style: none;


    a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.2rem;

      &:hover {
        border-bottom: 2px solid #FFF;
        padding-bottom: .2rem;
      }
    }
  }
}
</style>