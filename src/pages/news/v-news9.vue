<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️Необходимо созать тренд отрядоберов</div>
    <div class="article-content">
      <img src="/previews/preview9.jpg" class="article-content-image"/>
      <div class="article-content-text">
        Таким предложением поделились самые креативные люди страны из РСО.<br> <br>
        «<i>Все мы видим, с какой лёгкостью молодёжь подхватывает, порой даже самые тупые тренды. Так может стоит обратить это зло нам на благо. Давайте генерировать различные тренды, которые будут рекламировать отряды и привлекать туда больше молодых людей. Вместо айсбакетчеллендж, пусть будет ОСДчистингснегчеллендж. Вместо квадроберов, будут отрядоберы (люди, которые одеваются и ведут себя как отрядники). Вместо скуфов, комсоставы штабов и т.д. Направление, думаю, понятно.</i>» - заявил лидер креативных людей страны.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News8"/>
          <!-- <NextNews text="Следующая статья" route="News1"/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackToMainButton from '@/components/v-back-to-main.vue'
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news9',
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