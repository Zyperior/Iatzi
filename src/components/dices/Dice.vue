<template>
  <div class="dice" v-bind:class="{locked: dice.locked}" @click="lockDice(index)">
    <DiceMark class="mark Center" v-if="dice.id === 1 || dice.id === 3 || dice.id === 5"></DiceMark>
    <DiceMark class="mark UppLeft" v-if="dice.id > 1 "></DiceMark>
    <DiceMark class="mark LowRight" v-if="dice.id > 1 "></DiceMark>
    <DiceMark class="mark UppRight" v-if="dice.id > 3 "></DiceMark>
    <DiceMark class="mark LowLeft" v-if="dice.id > 3 "></DiceMark>
    <DiceMark class="mark CenLeft" v-if="dice.id === 6"></DiceMark>
    <DiceMark class="mark CenRight" v-if="dice.id === 6"></DiceMark>
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
    grid-template-columns: 8vw 8vw 8vw;
    grid-template-rows: 8vw 8vw 8vw;
    max-width: 30vw;
    justify-items: center;
    align-items: center;

    border: solid black 1vw;
    border-radius: 3vw;
  }

  .dice.locked{
    background-color: lightgreen;
  }

  .mark.UppLeft{
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .mark.UppRight{
    grid-column-start: 3;
    grid-row-start: 1;
  }

  .mark.CenLeft{
    grid-column-start: 1;
    grid-row-start: 2;
  }

  .mark.Center{
    grid-column-start: 2;
    grid-row-start: 2;
  }

  .mark.CenRight{
    grid-column-start: 3;
    grid-row-start: 2;
  }

  .mark.LowLeft{
    grid-column-start: 1;
    grid-row-start: 3;
  }

  .mark.LowRight{
    grid-column-start: 3;
    grid-row-start: 3;
  }

  @media screen {

  }
</style>
