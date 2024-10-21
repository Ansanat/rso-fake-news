import { createApp } from 'vue'
import App from './App.vue'
import Main from '@/pages/v-main-page'

import News1 from '@/pages/news/v-news1'
import News2 from '@/pages/news/v-news2'
import News3 from '@/pages/news/v-news3'
import News4 from '@/pages/news/v-news4'
import News5 from '@/pages/news/v-news5'


import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter ({
    scrollBehavior (to){
        if (to.hash) {
            return {
              el: to.hash,
              behavior: 'smooth',
            }
          }
    },
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            name: 'Main'
        },
        {
            path: '/news/article1',
            component: News1,
            name: 'News1'
        },
        {
            path: '/news/article2',
            component: News2,
            name: 'News2'
        },
        {
            path: '/news/article3',
            component: News3,
            name: 'News3'
        },
        {
            path: '/news/article4',
            component: News4,
            name: 'News4'
        },
        {
            path: '/news/article5',
            component: News5,
            name: 'News5'
        },
    ],
    history: createWebHistory()
})

const app = createApp(App)

app
    .use(router)
    .mount('#app')