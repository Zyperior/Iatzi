<!--Representation: Roll dice button
    Functionality: Start the game or roll the dices, show error text if player amount is invalid
    Author: Andreas Albihn, 2019-->
<template>
    <div class="clickable" v-if="gameStarted" @click="rollDice"><div>Roll dices {{rollNumber.current}} / 3</div></div>
    <div class="error" v-else-if="invalidAmount"><div>Player amount must be between 1 - 4</div></div>
    <div class="clickable" v-else @click="startGame"><div>Start game!</div></div>
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
    computed:{
      gameStarted(){
        return this.$store.state.gameStarted
      },

      rollNumber: function () {
        return this.$store.state.rollNumber;
      }
    },
    methods:{
      rollDice(){
        this.$store.commit('rollDices')
      },
      startGame(){
        this.$store.commit('startGame')
      },

    }

  }

</script>

<style scoped>

  .clickable:hover{
    cursor: pointer;
  }

  .error{
    color: red;
    font-size: 2.5vmax;
  }

  @media screen and (min-width: 1200px) and (orientation: landscape){

    .error{
      font-size: 2.3vmin;
    }

  }

</style>
