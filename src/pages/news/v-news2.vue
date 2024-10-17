<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️Два года работы коту под хвост</div>
    <div class="article-content">
      <img src="/previews/preview2.jpg" class="article-content-image"/>
      <div class="article-content-text">
        Журналисты, пытавшиеся написать огромную исследовательскую статью про секты, внедрились под видом обывателей в одну из самых известных сект. Однако потом оказалось, что это был студенческий отряд. <br> <br>
        «<i>По началу всё сходилось. Все признаки указывали на то, что мы в секте. Но летом нам начали платить деньги. И мы поняли, что что-то не так</i>» - говорит один из журналистов.
      </div>
    </div>
  </div>
</template>

<script>
import BackToMainButton from '@/components/v-back-to-main.vue'

export default {
  name: 'v-news2',
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