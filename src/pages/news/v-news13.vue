<template>
  <div class="article">
    <div class="article-title">⚡️После скандала с переводчиком, РСО выложили свой вариант переводов базовых отрядных слов</div>
    <div class="article-content">
      <img src="/previews/preview13.jpg" class="article-content-image"/>
      <div class="article-content-text">
        Верхушка РСО не смогла остаться в стороне от недавнего скандала с переводчиком. Ведь они прекрасно понимают, что, порой, не так уж и просто перевести их сленг на иностранный язык. Поэтому самые инициативные люди из РСО выложили свой вариант переводов на английский язык.<br> <br>
        «<i>Бойцовка - fighting t-shirt. Лучшие люди страны - the best people in the world. Спевка - a crowd of people sings squad songs. Спивка - a crowd of people drinking. Комиссар - the coolest man in the squad. Посвяга - the day when candidates are ready to die.</i>» - вырезка из словаря.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News12"/>
          <!-- <NextNews text="Следующая статья" route="News1"/> -->
          <NextNews text="К новостям" route="Main"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news12',
  components: {
    NextNews
  },
  props: {
  }
}
</script>

<style>
</style>