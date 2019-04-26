<template>
  <div>
    <div v-if="gameStarted" @click="rollDice">Roll dices {{rollNumber.current}} / 3</div>
    <div v-else @click="startGame">Start game!</div>
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
      },

      rollNumber: function () {
        return this.$store.state.rollNumber;
      }
    }
  }

</script>

<style scoped>

</style>
