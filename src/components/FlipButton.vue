<template>
    <img src="../assets/flipArrow.svg" alt="" @click="flipCard">
</template>

<script>
    export default {
      name: "FlipButton",
      methods:{
        flipCard: function(){
          this.$store.commit('flipCard')
        }
      }
    }
</script>

<style scoped>
  img{
    max-height: 100%;
  }
</style>
