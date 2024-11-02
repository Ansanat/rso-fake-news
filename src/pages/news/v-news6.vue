<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️РСО анонсировало создание тикток-отрядов</div>
    <div class="article-content">
      <img src="/previews/preview6.jpg" class="article-content-image"/>
      <div class="article-content-text">
        Чтобы быть на одной волне с подрастающим поколением, иногда приходится принимать своеобразные решения. Вот и в РСО решили не отставать от трендов, что привело к идеи создания тикток-отрядов. <br> <br>
        «<i>Тиктоки, рилсы, чего сейчас только не придумали. Я застал даже тиктаки. Мы решили, что пора создать настоящие контент-подразделения студенческих отрядов, которые будут катать целину, производя гигабайты агитирующих видосиков. Чтобы, так сказать, был трудкрутхайп.</i>» - рассказали в центральном штабе.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News5"/>
          <NextNews text="Следующая статья" route="News7"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackToMainButton from '@/components/v-back-to-main.vue'
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news6',
  components: {
    BackToMainButton,
    NextNews
  },
  props: {
  }
}
</script>

<style>
</style>