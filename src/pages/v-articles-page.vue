<template>
  <div class="v-arcticle-page">
    <div v-for="item in articles" :key="item" style="display: inline-block;">
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
  name: 'v-arcitle-page',
  props: {

  },
  components: {
    Card
  },
  data() {
    return {
      articles: [
        {
          title: 'Топ 5 способов начать знакомство с целью позвать в отряд',
          previewImg: '_arcticles1',
          previewText: 'Учёные-исследователи отрядной науки спустя много лет испытаний вывели топ 5 способов начать знакомство с целью позвать человека в отряд.',
          route: 'Article1'
        },
      ]
    }
  }
}
</script>

<style>
.v-arcticle-page {
  text-align: center;
}


</style>