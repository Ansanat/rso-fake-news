<template>
  <div class="article">
    <div class="article-title">⚡️Попался на краже значков</div>
    <div class="article-content">
      <img src="/previews/preview1.jpg" class="article-content-image"/>
      <div class="article-content-text">
        Вор, которого не могли поймать уже несколько лет, попался на краже отрядных значков. <br> <br>
        «<i>Да я думал, что это ордена какие-то. Он по улице шел, у него вся форма увешана была. Подумал, может ветеран какой-то. Понял, что что-то не так, когда в ломбарде на меня как на дебила посмотрели</i>» - прокомментировал ситуацию пойманный преступник.
        <div class="button-block">
            <NextNews text="Следующая статья" route="News2"/>
            <NextNews text="К новостям" route="Main"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextNews from '@/components/v-next-news.vue'

export default {
  name: 'v-news1',
  components: {
    NextNews
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