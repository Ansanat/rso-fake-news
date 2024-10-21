<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️Школьникам, решившим вступить в отряды, поднимут балл ЕГЭ</div>
    <div class="article-content">
      <img src="/previews/preview5.jpg" class="article-content-image"/>
      <div class="article-content-text">
        С такой инициативой выступили в министерстве образования, чтобы повысить количество желающих вступить в студенческие отряды. <br> <br>
        «<i>Логика максимально проста. Если школьник подписывает документ, что гарантированно вступит в студенческий отряд после поступления в ВУЗ, то ему докидывается 10 дополнительных баллов к ЕГЭ. Я думаю, что после принятия этого решения, проблем с агитацией в отряды больше не будет никогда.</i>» - рассказал автор инициативы.
      </div>
    </div>
  </div>
</template>

<script>
import BackToMainButton from '@/components/v-back-to-main.vue'

export default {
  name: 'v-news4',
  components: {
    BackToMainButton,
  },
  props: {
  }
}
</script>

<style lang="scss">
$blue:#184678;
.article {
  width: 100%;
  padding: 20px 0px 0px 10px;

  &-title {
    font-size: 30px;
    font-weight: bold;
    color: black;
  }

  &-content {
    display: flex;
    margin-top: 20px;

    &-image {
      width: 600px;
    }

    &-text {
      font-size: 20px;
      text-align: justify;
      margin: 0px 30px 0px 30px;
    }
  }
}

@media screen and (max-width: 1500px){
  .article {
    &-content {
      &-text {
        font-size: 30px;
      }
    }
  }
}

@media screen and (max-width: 1250px){
  .article {
    &-content {
      &-image {
        width: 400px;
      }
    }
  }
}

@media screen and (max-width: 1050px) {
  .article {
    padding: 20px 0px 0px 0px;

    &-title {
      font-size: 50px;
      text-align: center;
    }

    &-content {
      display: block;
      padding: 0px;
      width: 100%;
      
      &-image {
        width: 100%;
        margin: auto;
      }

      &-text {
        padding-top: 20px;
        font-size: 30px;
        margin: auto;
        width: 90%;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .article {

    &-title {
      font-size: 30px;
      text-align: center;
    }

    &-content {
      &-text {
        font-size: 20px;
      }
    }
  }
}
</style>