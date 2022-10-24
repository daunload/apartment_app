<template>
  <div class="wrapper">
    <slot class="title" name="title"></slot>
    <slot name="info"></slot>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  background-color: #f7f9ff;
  border: 0.1vw solid #c0cdf1;
  padding: 4vw 5.3vw;
  border-radius: 1.3vw;
}
</style>
