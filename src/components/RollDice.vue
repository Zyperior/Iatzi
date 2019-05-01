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
    min-width: 73vmin;
    min-height: 5vmax;
    max-width: 73vmin;
    background-color: white;
    justify-content: center;
    align-items: center;
    font-size: 4vmax;
    border: solid black 1vmin;
  }

  .error{
    color: red;
    font-size: 2.5vmax;
  }

  @media screen and (min-width: 1200px) and (orientation: landscape){

    .rollButton{
      display: flex;
      min-width: 20vmax;
      max-width: 20vmax;
      min-height: 5vmin;
      font-size: 4vmin;
      border: solid black 0.5vmin;
    }

  }

</style>
