<template>
  <div class="article">
    <div class="article-title">⚡️Боксер избил человека на улице</div>
    <div class="article-content">
      <img src="/previews/preview3.jpg" class="article-content-image"/>
      <div class="article-content-text">
        Инцидент произошел на улице Пушкина, после того как студент третьего курса познакомил своего друга боксера со своим другом отрядником. <br> <br>
        «<i>Друган мой сказал, что этот чувак какой-то боец. Я решил в шутку устроить дружеский спарринг. А он оказывается драться вообще не умеет</i>» - прокомментировал ситуацию боксер.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News2"/>
          <NextNews text="Следующая статья" route="News4"/>
          <NextNews text="К новостям" route="Main"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news3',
  components: {
    NextNews
  },
  props: {
  }
}
</script>

<style lang="scss">
</style>