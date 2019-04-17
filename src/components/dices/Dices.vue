<template>
  <div class="dices" >
    <div v-for="dice in currentDices">
      <Dice v-bind:dice="dice"></Dice>
    </div>
  </div>
</template>

<script>
  import Dice from './Dice'

  export default {
    name: "Dices",
    components:{
      Dice
    },
    computed: {
      currentDices() {
        return this.$store.state.currentDices
      }
    }
  }


</script>

<style scoped>
  .dices{
    display: flex;
    flex-wrap: wrap;
    justify-self: center;
    justify-content: center;
    margin-inside: 10px;

  }
</style>
