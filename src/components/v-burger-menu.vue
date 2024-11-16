<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" v-model="open"/>
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><router-link :to="{ name: 'Main', hash: '#head'}" class="router menu__item">Новости</router-link></li>
      <li><router-link :to="{ name: 'Articles', hash: '#head'}" class="router menu__item">Статьи</router-link></li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
export default {
  name: 'burger-menu',
  props: {
  },
  setup() {
    let open = ref(false);
    const handleClick = () => {
      open.value = false;
    };

    onMounted(() => {
      window.addEventListener('click', handleClick);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('click', handleClick);
    });

    return {
      open
    }
  }
}
</script>

<style>
#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}

#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}

#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}

#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}

.menu__btn {
  position: absolute;
  top: 28px;
  left: 17px;
  width: 35px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #ff454c;
  transition-duration: .25s;
}

.menu__btn > span::before {
  content: '';
  top: -8px;
}

.menu__btn > span::after {
  content: '';
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: white;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
}

.menu__item {
  display: block;
  padding: 12px 24px;
  color: #184678;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}

.menu__item:hover {
  background-color: #CFD8DC;
}

@media screen and (max-width: 700px) {
  .menu__btn {
    width: 35px;
    height: 40px;
    top: 35px;
    left: 21px;
  }

  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    width: 100%;
    height: 4px;
  }

  .menu__box {
    width: 270px;
  }
}
</style>