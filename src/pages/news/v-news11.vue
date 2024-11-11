<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️Анонсированно создание Трудкрутшопа для СПО</div>
    <div class="article-content">
      <img src="/previews/preview11.jpg" class="article-content-image"/>
      <div class="article-content-text">
        Наконец-то отрядные элиты прислушались к просьбам вожатых и решили создать филиал Трудкрутшопа для СПО.<br> <br>
        «<i>Да. Действительно получается странная ситуация. Вроде в сезоне работают все, а закупиться в Трудкрутшопе могут не все. Но мы бы были не РСО, если бы не прислушивались к просьбам наших бойцов. С сегодняшнего дня будет работать специальный ТрудкрутшопСПО, в котором вместо денег будут принимать: значки, детские улыбки, жестяные банки, идеи для творча, лут, собранный после отъезда детей из лагеря, апельсины, соки, молоко из столовки. Разумеется это будет действовать только для бойцов СПО при предъявлении доказательств, что вы действительно вожатый (танец, номер-импровизация, игра для сплочения коллектива).</i>» - заявили в Центральном штабе.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News10"/>
          <NextNews text="Следующая статья" route="News12"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackToMainButton from '@/components/v-back-to-main.vue'
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news11',
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