<template>
  <div class="dice" v-bind:class="{
    diceLocked : dice.locked,
    animation1 : dice.rolling === 1,
    animation2 : dice.rolling === 2
    }" @click="lockDice(index)">
    <DiceMark class="CenterMark" v-bind:dice-index="index" v-if="dice.value === 1 || dice.value === 3 || dice.value === 5 || !gameStarted"></DiceMark>
    <DiceMark class="UppLeftMark" v-if="dice.value > 1 && gameStarted"></DiceMark>
    <DiceMark class="LowRightMark" v-if="dice.value > 1 && gameStarted"></DiceMark>
    <DiceMark class="UppRightMark" v-if="dice.value > 3 && gameStarted"></DiceMark>
    <DiceMark class="LowLeftMark" v-if="dice.value > 3 && gameStarted"></DiceMark>
    <DiceMark class="CenLeftMark" v-if="dice.value === 6 && gameStarted"></DiceMark>
    <DiceMark class="CenRightMark" v-if="dice.value === 6 && gameStarted"></DiceMark>
  </div>
</template>

<script>
    import DiceMark from './DiceMark'

    export default {
      name: "Dice",
      props:[
        'dice',
        'index'
      ],
      components:{
        DiceMark
      },
      computed:{
        gameStarted(){
          return this.$store.state.gameStarted;
        }
      },
      methods:{
        lockDice(index){
          this.$store.commit('lockDice', index)
        }
      }

    }
</script>

<style scoped>
  .dice{
    display: grid;
    grid-template-columns: repeat(3, 4vmin);
    grid-template-rows: repeat(3, 4vmin);
    justify-items: center;
    align-items: center;
    background-color: white;
  }

  .diceLocked{
    background-color: lightgreen;
  }

  .UppLeftMark{
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .UppRightMark{
    grid-column-start: 3;
    grid-row-start: 1;
  }

  .CenLeftMark{
    grid-column-start: 1;
    grid-row-start: 2;
  }

  .CenterMark{
    grid-column-start: 2;
    grid-row-start: 2;
  }

  .CenRightMark{
    grid-column-start: 3;
    grid-row-start: 2;
  }

  .LowLeftMark{
    grid-column-start: 1;
    grid-row-start: 3;
  }

  .LowRightMark{
    grid-column-start: 3;
    grid-row-start: 3;
  }

  .animation1 {
    animation: square-to-circle 0.2s infinite cubic-bezier(1,.015,.295,1.225) ;
  }

  .animation2 {
    animation: square-to-circle 0.2s infinite reverse cubic-bezier(1,.015,.295,1.225) ;
  }

  @keyframes square-to-circle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(45deg);
    }
    50% {
      border-radius: 50% 50% 50% 50%;
      transform: rotate(90deg);
    }
    75% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
