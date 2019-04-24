<template>
  <div class="title">
    <img src='../assets/diceI.svg' >
    <img src='../assets/diceA.svg' >
    <img src='../assets/diceT.svg' >
    <img src='../assets/diceZ.svg' >
    <img src='../assets/diceI.svg' >
  </div>
</template>

<script>
    export default {
        name: "ScoreCardTitle"
    }
</script>

<style scoped>
  .title{
    display: grid;
    grid-template-columns: repeat(5, auto);
    padding-top: 2vh;
    max-height: 7vh;
    justify-self: center;
  }
  img{
    max-height: 4vh;
    margin-right: 1vw;
  }
</style>
