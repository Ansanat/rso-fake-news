<template>
  <div class="v-footer">
    <div class="v-footer-container">
      <a href="https://t.me/rso_fake_news"><img src="@/img/telegram_logo.png" class="v-footer-icon"/></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-footer',
  props: {
  }
}
</script>

<style lang="scss">
.v-footer {
  width: 100%;
  height: 60px;
  background-color: #184678;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &-container {

  }

  &-icon {
    width: 40px;
  }
}
</style>
