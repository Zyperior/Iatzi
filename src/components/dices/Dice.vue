<template>
  <div class="dice" v-bind:class="{diceLocked: dice.locked}" @click="lockDice(index)">
    <DiceMark class="CenterMark" v-bind:dice-index="index" v-if="dice.id === 1 || dice.id === 3 || dice.id === 5 || !gameStarted"></DiceMark>
    <DiceMark class="UppLeftMark" v-if="dice.id > 1 && gameStarted"></DiceMark>
    <DiceMark class="LowRightMark" v-if="dice.id > 1 && gameStarted"></DiceMark>
    <DiceMark class="UppRightMark" v-if="dice.id > 3 && gameStarted"></DiceMark>
    <DiceMark class="LowLeftMark" v-if="dice.id > 3 && gameStarted"></DiceMark>
    <DiceMark class="CenLeftMark" v-if="dice.id === 6 && gameStarted"></DiceMark>
    <DiceMark class="CenRightMark" v-if="dice.id === 6 && gameStarted"></DiceMark>
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
    grid-template-columns: 4vw 4vw 4vw;
    grid-template-rows: 4vw 4vw 4vw;
    max-width: 12vw;
    justify-items: center;
    align-items: center;

    border: solid black 1vw;
    border-radius: 1vw;
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

  @media screen {

  }
</style>
