<template>
  <div class="nav-bar">
  <router-link :to="{ name: 'Main', hash: '#head'}" class="router">
    <img src="@/img/logo.png" class="logo"/>
    <div class="name"> РСО fake news </div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
  }
}
</script>

<style>
.nav-bar {
  width: 100%;
  height: 60px;
  background-color: #184678;
  border-radius: 10px;
}

.logo {
  width: 50px;
  float: left;
  margin: 5px 0px 0px 10px;
}

.name {
  color: white;
  font-size: 23px;
  font-family: Helvetica, sans-serif;
  text-shadow: 2px 2px 10px black;
  padding: 15px 0px 0px 70px;
}

.router {
  text-decoration: none;
}

@media screen and (max-width: 700px) {
  .nav-bar {
    height: 70px;
  }

  .logo {
    width: 60px;
  }

  .name {
    padding: 17px 0px 0px  80px;
    font-size: 27px;
  }
}
</style>
