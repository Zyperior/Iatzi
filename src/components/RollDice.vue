<template>
  <section class="buttonContainer">
    <div class="rollButton" v-if="gameStarted" @click="rollDice">Roll dices {{rollNumber.current}} / 3</div>
    <div class="rollButton" v-else @click="startGame">Start game!</div>
  </section>
</template>

<script>
  export default {
    name: "RollDiceButton",
    methods:{
      rollDice(){
        this.$store.commit('rollDices')
      },
      startGame(){
        this.$store.commit('startGame')
      }
    },
    computed:{
      gameStarted(){
        return this.$store.state.gameStarted
      },

      rollNumber: function () {
        return this.$store.state.rollNumber;
      }
    }
  }

</script>

<style scoped>

  .buttonContainer{
    justify-self: center;
  }

  .rollButton{
    display: block;
    min-width: 73vw;
    background-color: white;
    justify-self: center;
    font-size: 4vh;
    border: solid black 1vw;
  }

</style>
