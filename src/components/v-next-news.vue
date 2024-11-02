<template>
    <router-link
      :to="{ name: route, hash: '#head'}"
      class="router v-next-news"
    >
      {{text}}
    </router-link>
</template>

<script>
export default {
  name: 'v-next-news',
  props: {
    text: String,
    route: String
  }
}
</script>

<style>

.button-block {
  display: flex;
  margin-top: 20px;
}

.v-next-news {
    background-color: #184678;
    text-align: center;
    font-size: 18px;
    padding-top: 10px;
    cursor: pointer;
    width: 200px;
    height: 30px;
    color: white;
    border-radius: 10px;
    border: 1px solid black;
    display: inline;
    margin-left: 5px;
}

.v-next-news:hover {
    background-color: #366190;
}

@media screen and (max-width: 600px) {
  .v-next-news {
    display: block;
    width: 100%;
    margin: 15px auto;
  }

  .button-block {
    display: block;
    width: 100%;
  }

}
@media screen and (min-width: 701px) and  (max-width: 1100px) {

}
</style>