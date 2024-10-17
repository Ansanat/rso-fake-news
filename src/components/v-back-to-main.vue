<template>
  <router-link :to="{ name: 'Main', hash: '#head'}" class="router">
    <div class="back-to-main"> На главную </div>
  </router-link>
</template>

<script>
export default {
  name: 'v-back-to-main',
  props: {
  }
}
</script>

<style lang="scss">
$blue:#184678;
.back-to-main {
  color: $blue;
  font-size: 20px;
  border: 2px solid $blue;
  border-radius: 2px;
  width: max-content;
  padding: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

@media screen and (max-width: 1050px) {
  .back-to-main {
    margin-left: 10px;
    font-size: 30px;
  }
}

@media screen and (max-width: 700px) {
  .back-to-main {
    margin-left: 10px;
    font-size: 20px;
  }
}

</style>