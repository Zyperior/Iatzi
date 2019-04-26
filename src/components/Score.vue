<template>
  <div class="box">
    <div v-if="score > -1">{{score}}</div>
  </div>
</template>

<script>
    export default {
      name: "Score",
      props: {'score': Number }
    }
</script>

<style scoped>

  .box{
    border-bottom: thin solid rgb(213,211,198);
    min-width: 12vw;
    min-height: 3vh;
  }

</style>
