<template>
  <div class="article">
    <BackToMainButton/>
    <div class="article-title">⚡️Отрядный медик спас жизнь человеку</div>
    <div class="article-content">
      <img src="/previews/preview4.jpg" class="article-content-image"/>
      <div class="article-content-text">
        На улице мужчине стало плохо. Все стали звать врачей, но на помощь пришёл отрядный медик, который ничего не сделал и сказал, что лучше подождать реального врача. <br> <br>
        «<i>Своим решением он буквально спас бедолаге жизнь</i>» - сказал врач, который приехал на вызов и в итоге помог мужчине.
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