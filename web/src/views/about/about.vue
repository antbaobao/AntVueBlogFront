<template lang="html">
  <div class="about">
    <div class="about__wrap">
      <div class="about__container">
        <div class="about__info">目前在工作中使用的技术栈主要包括:</div>
        <div class="about__info">react、react native、vue、nodejs、koa、egg、mongo</div>
      </div>
    </div>
  </div>
</template>
<script>
import avatarUrl from '@/assets/about.jpeg'

export default {
  data() {
    return {
      avatarUrl
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.about {
  box-sizing: border-box;
  &__wrap {
    width: 100%;
  }
  &__container {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }
  &__icon {
    margin-right: 10px;
  }
  &__github-url {
    text-decoration: none;
  }
  &__info {
    line-height: 28px;
    font-size: 14px;
    padding: 10px;
    width: 100%;
  }
  &__info-text {
    font-size: 14px;
    text-decoration: none;
  }
}

@media screen and (max-width: 960px) {
  .about {
    &__container {
      margin-left: 10px;
      border-radius: 0;
    }
  }
}
</style>
