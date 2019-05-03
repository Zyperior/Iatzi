<!--Representation: The title
    CSS: Base visuals
    Author: Andreas Albihn, 2019-->
<template>
  <div class="title">
    <img src='../../assets/diceI.svg' alt="">
    <img src='../../assets/diceA.svg' alt="">
    <img src='../../assets/diceT.svg' alt="">
    <img src='../../assets/diceZ.svg' alt="">
    <img src='../../assets/diceI.svg' alt="">
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
  }

  img{
    max-height: 4vmax;
    margin-right: 1vmin;
  }

</style>
