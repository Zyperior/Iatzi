<template>
  <div>
    <div v-for="(dice, index) in currentDices">
      <Dice class="dice" v-bind:dice="dice" v-bind:index="index"></Dice>
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

  .dice{
    max-width: 12vmin;
    min-width: 12vmin;
    border: solid black 1vmin;
    border-radius: 1vmin;
  }

</style>
