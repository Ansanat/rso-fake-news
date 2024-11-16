<template>
  <div class="article">
    <div class="article-title">⚡️Два года работы коту под хвост</div>
    <div class="article-content">
      <img src="/previews/preview2.jpg" class="article-content-image"/>
      <div class="article-content-text">
        Журналисты, пытавшиеся написать огромную исследовательскую статью про секты, внедрились под видом обывателей в одну из самых известных сект. Однако потом оказалось, что это был студенческий отряд. <br> <br>
        «<i>По началу всё сходилось. Все признаки указывали на то, что мы в секте. Но летом нам начали платить деньги. И мы поняли, что что-то не так</i>» - говорит один из журналистов.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News1"/>
          <NextNews text="Следующая статья" route="News3"/>
          <NextNews text="К новостям" route="Main"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news2',
  components: {
    NextNews
  },
  props: {
  }
}
</script>

<style lang="scss">
</style>