<template>
  <img v-if="!gameStarted && diceIndex === 0" class="letter" src='../../assets/diceI.svg' >
  <img v-else-if="!gameStarted && diceIndex === 1" class="letter" src='../../assets/diceA.svg' >
  <img v-else-if="!gameStarted && diceIndex === 2" class="letter" src='../../assets/diceT.svg' >
  <img v-else-if="!gameStarted && diceIndex === 3" class="letter" src='../../assets/diceZ.svg' >
  <img v-else-if="!gameStarted && diceIndex === 4" class="letter" src='../../assets/diceI.svg' >
  <img v-else class="mark" src='../../assets/diceMark.svg'>
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
    max-width: 10vw;
  }

  .mark{
    max-width: 5vw;
  }
</style>
