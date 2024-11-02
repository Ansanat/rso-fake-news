<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️В РСО задумываются о создании студенческих отрядов таксистов</div>
    <div class="article-content">
      <img src="/previews/preview8.jpg" class="article-content-image"/>
      <div class="article-content-text">
        На фоне нехватки кадров в такси, РСО выступили со своим предложением решения проблемы.<br> <br>
        «<i>Во первых, для людей цены в такси станут дешевле, так как мы здесь не ради денег. Во вторых, люди, наконец, перестанут говорить, что у отрядников нет прав, ведь отрядник не может работать таксистом без прав. В третьих, таксисты-отрядники смогут агитировать молодых пассажиров вступить в отряды, а людям постарше просто рассказывать про существование такого движения. В четвертых, машина не будет прокурена, так как в бойцовке курить нельзя. В общем, масса плюсов, надо это дело нам рассмотреть.</i>» - рассказал представитель центрального штаба РСО.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News7"/>
          <NextNews text="Следующая статья" route="News9"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackToMainButton from '@/components/v-back-to-main.vue'
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news8',
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