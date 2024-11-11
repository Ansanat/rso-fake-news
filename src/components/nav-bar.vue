<template>
  <div class="nav-bar">
    <div class="nav-bar-items">
      <BurgerMenu class="burger-menu"/>
        <img src="@/img/logo.png" class="logo"/>
        <router-link :to="{ name: 'Main', hash: '#head'}" class="router name"> РСО fake news </router-link>
    </div>
  </div>
</template>

<script>
import BurgerMenu from '@/components/v-burger-menu.vue'

export default {
  name: 'nav-bar',
  props: {
  },
  components: {
    BurgerMenu,
  },
}
</script>

<style>
.burger-menu {

}

.nav-bar {
  width: 100%;
  height: 60px;
  background-color: #184678;
  position: sticky;
  top: 0px;
}

.nav-bar-items {
  width: 300px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

.logo {
  width: 50px;
  float: left;
  margin: 5px 0px 0px 15px;
}

.name {
  color: white;
  font-size: 23px;
  font-family: Helvetica, sans-serif;
  text-shadow: 2px 2px 10px black;
}

.router {
  text-decoration: none;
}

@media screen and (max-width: 700px) {
  .nav-bar {
    height: 70px;
  }

  .logo {
    width: 50px;
    margin-left: 30px;
  }

  .nav-bar-items {
    gap: 2px;
    height: 70px;
  }

  .name {
    padding: 0px 0px 0px 5px;
    font-size: 22px;
  }
}
</style>
