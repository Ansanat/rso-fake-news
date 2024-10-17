<template>
  <div class="v-news-card">
    <img :src="`../previews/preview${previewImg}.jpg`" class="news-preview-image"/>
    <div class="news-title">
      {{ title }}
    </div>
    <div class="news-preview-text">
      {{ previewText }}
    </div>
    <Button 
        text="Читать"
        class="news-card-button"
    />
  </div>
</template>

<script>
import Button from '@/components/v-button.vue'

export default {
    name: 'v-news-card',
    components: {
      Button,
    },
    props: {
      title: String,
      previewText: String,
      previewImg: String,
    },
}
</script>

<style>

.v-news-card {
  color: black;
  text-decoration: none;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  border-radius: 20px;
  margin: 40px 20px 0px 30px;
  height: 400px;
  width: 430px;
  background-color: white;
  box-shadow: 3px 3px 10px gray;
}

.news-title {
  padding-top: 10px;
  margin: auto;
  text-align: center;
  font-size: 20px;
  width: 90%;
  font-weight: bold;
}

.news-card-button {
  font-size: 15px;
  margin: auto;
  margin-top: 15px;
  height: 30px;
}

.news-preview-text {
  padding-top: 15px;
  margin: auto;
  text-align: center;
  width: 90%;
}

.v-news-card:hover {
  box-shadow: 3px 3px 20px gray;
}

.news-preview-image {
  width: 100%;
  aspect-ratio: 16 / 7;
  object-fit: cover;
}

@media screen and (min-width: 701px) and  (max-width: 1100px) {
  .v-news-card {
    text-align: center;
    width: 85%;
    height: auto;
    padding-bottom: 10px;
  }
}

@media screen and (max-width: 700px) {
  .v-news-card {
    text-align: center;
    width: 85%;
    height: auto;
    padding-bottom: 10px;
    margin: 40px 0px 0px 0px;
  }

  .news-preview-text {
    height: auto;
  }
}

</style>
