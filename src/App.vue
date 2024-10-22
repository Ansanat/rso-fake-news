<template>
  <Navbar id="head"/>
  <router-view />
  <Footer/>
</template>

<script>
import Navbar from './components/nav-bar.vue'
import Footer from './components/v-footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ebebeb;
  border-radius: 10px;
}
</style>
