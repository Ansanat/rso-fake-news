<template>
  <div class="nav-bar">
    <img src="@/img/logo.png" class="logo"/>
    <div class="name"> РСО fake news </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
  }
}
</script>

<style scoped>
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
  font-family: Marker Felt, fantasy;
  padding: 15px 0px 0px 70px;
}
</style>
