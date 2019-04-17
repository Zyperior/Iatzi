<template>
    <div>
      <div class="dice" v-if="dice.id === 1">
        <DiceMark class="mark Center"></DiceMark>
      </div>
      <div class="dice" v-else-if="dice.id === 2">
        <DiceMark class="mark UppLeft"></DiceMark>
        <DiceMark class="mark LowRight"></DiceMark>
      </div>
      <div class="dice" v-else-if="dice.id === 3">
        <DiceMark class="mark UppLeft"></DiceMark>
        <DiceMark class="mark Center"></DiceMark>
        <DiceMark class="mark LowRight"></DiceMark>
      </div>
      <div class="dice" v-else-if="dice.id === 4">
        <DiceMark class="mark UppLeft"></DiceMark>
        <DiceMark class="mark UppRight"></DiceMark>
        <DiceMark class="mark LowLeft"></DiceMark>
        <DiceMark class="mark LowRight"></DiceMark>
      </div>
      <div class="dice" v-else-if="dice.id === 5">
        <DiceMark class="mark UppLeft"></DiceMark>
        <DiceMark class="mark UppRight"></DiceMark>
        <DiceMark class="mark Center"></DiceMark>
        <DiceMark class="mark LowLeft"></DiceMark>
        <DiceMark class="mark LowRight"></DiceMark>
      </div>
      <div class="dice" v-else-if="dice.id === 6">
        <DiceMark class="mark UppLeft"></DiceMark>
        <DiceMark class="mark UppRight"></DiceMark>
        <DiceMark class="mark CenLeft"></DiceMark>
        <DiceMark class="mark CenRight"></DiceMark>
        <DiceMark class="mark LowLeft"></DiceMark>
        <DiceMark class="mark LowRight"></DiceMark>
      </div>
    </div>
</template>

<script>
    import DiceMark from './DiceMark'

    export default {
      name: "Dice",
      props:['dice'],
        components:{
            DiceMark
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
