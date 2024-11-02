<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️Отрядный медик спас жизнь человеку</div>
    <div class="article-content">
      <img src="/previews/preview4.jpg" class="article-content-image"/>
      <div class="article-content-text">
        На улице мужчине стало плохо. Все стали звать врачей, но на помощь пришёл отрядный медик, который ничего не сделал и сказал, что лучше подождать реального врача. <br> <br>
        «<i>Своим решением он буквально спас бедолаге жизнь</i>» - сказал врач, который приехал на вызов и в итоге помог мужчине.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News3"/>
          <NextNews text="Следующая статья" route="News5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackToMainButton from '@/components/v-back-to-main.vue'
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news4',
  components: {
    BackToMainButton,
    NextNews
  },
  props: {
  }
}
</script>

<style lang="scss">
</style>