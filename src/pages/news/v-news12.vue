<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️Синхронного переводчика уволили за неправильный перевод слова "Бойцовка"</div>
    <div class="article-content">
      <img src="/previews/preview12.jpg" class="article-content-image"/>
      <div class="article-content-text">
        Спустя 20 лет непрерывной работы был уволен синхронный переводчик. Он учавствовал в недавних переговорах с США, где политики общались о молодёжных организациях. Всё было хорошо, пока, внезапно, западные коллеги не спросили про студенческие отряды.<br> <br>
        «<i>Я двадцать лет практиковал синхронный перевод. Но, когда я пытался на ходу подобрать перевод словам: бойцовка, посвяга, строяк, целина, целинка и т.д, я чуть с ума не сошёл. Попробуйте перевести эти слова на английский. Ну и я выдал короче. Перевёл "бойцовка", как "fighting". Западные партнёры подумали, что мы хотим подраться и завязалась потасовка. Пойду я лучше в другое место работать.</i>» - рассказал уволенный переводчик.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News11"/>
          <NextNews text="Следующая статья" route="News13"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackToMainButton from '@/components/v-back-to-main.vue'
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news12',
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