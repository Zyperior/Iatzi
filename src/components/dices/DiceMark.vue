<!--Representation: A dice mark
    Functionality: Switch between title-letters or dots
    CSS: Max size
    Animation: None
    Author: Andreas Albihn, 2019-->
<template>
  <img v-if="!gameStarted && diceIndex === 0" class="letter" src='../../assets/diceI.svg' alt="">
  <img v-else-if="!gameStarted && diceIndex === 1" class="letter" src='../../assets/diceA.svg' alt="">
  <img v-else-if="!gameStarted && diceIndex === 2" class="letter" src='../../assets/diceT.svg' alt="">
  <img v-else-if="!gameStarted && diceIndex === 3" class="letter" src='../../assets/diceZ.svg' alt="">
  <img v-else-if="!gameStarted && diceIndex === 4" class="letter" src='../../assets/diceI.svg' alt="">
  <img v-else class="mark" src='../../assets/diceMark.svg' alt="">
</template>

<script>
  export default {
    name: "DiceMark",
    props:['diceIndex'],
    computed:{
      gameStarted(){
        return this.$store.state.gameStarted
      }
    }
  }
</script>

<style scoped>
  .letter{
    max-width: 5vmin;
  }

  .mark{
    max-width: 3vmin;
  }
</style>
