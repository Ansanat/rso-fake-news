<template>
  <div class="article">
    <div class="article-title">⚡️Всероссийский Слет студенческих отрядов срывает американские выборы</div>
    <div class="article-content">
      <img src="/previews/preview10.jpg" class="article-content-image"/>
      <div class="article-content-text">
        С таким обвинением выступили западные партнёры, утверждая, что всерос является главной причиной срыва американских выборов.<br> <br>
        «<i>Всё внимание мира в ноябре приковано к Всероссийскому Слёту студенческих отрядов. Это самое обсуждаемое событие сейчас. Однако, из-за этого все забыли про американские выборы, даже сами американцы, которые изо дня в день мониторят отрядные паблики, пытаясь узнать подробности про слёт в этом году. Нам нужно, чтобы они ходили на избирательные участки, а не судачили в интернете. Мы считаем, что это намеренный срыв выборов. Тонкая игра со стороны России. Мы этого так не оставим. Завтра будут наложены ещё 123674823746 дополнительных санкций.</i>» - заявили в Белом доме.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News9"/>
          <NextNews text="Следующая статья" route="News11"/>
          <NextNews text="К новостям" route="Main"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news10',
  components: {
    NextNews
  },
  props: {
  }
}
</script>

<style>
</style>