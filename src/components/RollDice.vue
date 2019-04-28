<template>
  <section class="buttonContainer">
    <div class="rollButton" v-if="gameStarted" @click="rollDice">Roll dices {{rollNumber.current}} / 3</div>
    <div class="rollButton error" v-else-if="invalidAmount">Player amount must be between 1 - 4</div>
    <div class="rollButton" v-else @click="startGame">Start game!</div>
  </section>
</template>

<script>
  export default {
    name: "RollDiceButton",
    props:['invalidAmount'],
    data(){
      return{
        startButtonText : 'Start Game',
      }
    },
    methods:{
      rollDice(){
        this.$store.commit('rollDices')
      },
      startGame(){
        this.$store.commit('startGame')
      },

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
    display: flex;
    min-width: 73vw;
    min-height: 5vh;
    max-width: 73vw;
    background-color: white;
    justify-content: center;
    align-items: center;
    font-size: 4vh;
    border: solid black 1vw;
  }

  .error{
    color: red;
    font-size: 2.5vh;
  }

</style>
