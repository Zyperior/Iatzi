<template>
  <div class="dices">
    <div v-for="(dice, index) in currentDices">
      <Dice v-bind:dice="dice" v-bind:index="index"></Dice>
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

  .dices{
    display: grid;
    grid-template-columns: repeat(5, 15vmin);
    justify-self: center;
    justify-content: center;
  }
</style>
