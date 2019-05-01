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
    display: grid;
    grid-template-columns: repeat(5, 15vmin);
    justify-self: center;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) and (orientation: landscape){

    .dices{
      display: flex;
      margin-top:10vmin;
      flex-wrap: wrap;
      max-width: 50vmin;
      min-width: 50vmin;
      grid-gap: 1vmax;
    }

    .dices > :nth-child(-n+3){
      align-self: flex-end;
    }
  }
</style>
