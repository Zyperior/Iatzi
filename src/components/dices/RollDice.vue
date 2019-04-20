<template>
  <div>
    <button v-if="gameStarted" v-on:click="rollDice">Roll dices</button>
    <button v-else v-on:click="startGame">Start game!</button>
  </div>
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
      }
    }
  }

</script>

<style scoped>

</style>
