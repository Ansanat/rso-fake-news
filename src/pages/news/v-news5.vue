<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️Школьникам, решившим вступить в отряды, поднимут балл ЕГЭ</div>
    <div class="article-content">
      <img src="/previews/preview5.jpg" class="article-content-image"/>
      <div class="article-content-text">
        С такой инициативой выступили в министерстве образования, чтобы повысить количество желающих вступить в студенческие отряды. <br> <br>
        «<i>Логика максимально проста. Если школьник подписывает документ, что гарантированно вступит в студенческий отряд после поступления в ВУЗ, то ему докидывается 10 дополнительных баллов к ЕГЭ. Я думаю, что после принятия этого решения, проблем с агитацией в отряды больше не будет никогда.</i>» - рассказал автор инициативы.
        <div class="button-block">
          <NextNews text="Предыдущая статья" route="News4"/>
          <NextNews text="Следующая статья" route="News6"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackToMainButton from '@/components/v-back-to-main.vue'
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news5',
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