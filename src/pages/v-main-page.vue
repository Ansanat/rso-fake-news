<template>
  <div class="v-main-page">
      <div v-for="item in news" :key="item" style="display: inline-block;">
        <router-link :to="{ name: item.route, hash: '#head'}">
          <Card
            :title="item.title"
            :previewImg="item.previewImg"
            :previewText="item.previewText"
          />
        </router-link>
      </div>
  </div>
</template>

<script>
import Card from '@/components/v-news-card.vue'
export default {
  name: 'v-main-page',
  props: {
  },
  components: {
    Card
  },
  data() {
    return {
      news: [
        {
          title: '⚡️Отрядный медик спас жизнь человеку',
          previewImg: '4',
          previewText: 'На улице мужчине стало плохо. Все стали звать врачей, но на помощь пришёл отрядный медик....',
          route: 'News4'
        },
        {
          title: '⚡️Боксер избил человека на улице',
          previewImg: '3',
          previewText: 'Инцидент произошел на улице Пушкина, после того как студент третьего курса....',
          route: 'News3'
        },
        {
          title: '⚡️Два года работы коту под хвост',
          previewImg: '2',
          previewText: 'Журналисты, пытавшиеся написать огромную исследовательскую статью про секты, внедрились под видом....',
          route: 'News2'
        },
        {
          title: '⚡️Попался на краже значков',
          previewImg: '1',
          previewText: 'Вор, которого не могли поймать уже несколько лет, попался на краже отрядных значков....',
          route: 'News1'
        },
      ]
    }
  }
}
</script>

<style>
.v-main-page {
  text-align: center;
}

</style>
