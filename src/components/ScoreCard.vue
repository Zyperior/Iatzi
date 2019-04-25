<template>
  <div class="scoreCard">
    <section class="header">
      <score-card-title/>
      <score-card-dices class="dices"/>
      <score-card-roll class="roll"/>
      <score-table/>
    </section>
  </div>
</template>

<script>
  import ScoreCardTitle from './ScoreCardTitle'
  import Dices from './dices/Dices'
  import RollDice from './RollDice'
  import ScoreTable from './ScoreTable'

  export default {
    name: "ScoreCard",
    components:{
      'score-card-title': ScoreCardTitle,
      'score-card-dices': Dices,
      'score-card-roll' : RollDice,
      'score-table': ScoreTable
    }
  }
</script>

<style scoped>
  .scoreCard{
    display: grid;
    width: 95vw;
    height: 97vh;
    position: fixed;
    z-index: 1;
    background-color: antiquewhite;
    box-shadow: 1vw 1vw 3vw black;
  }

  .header{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 10vh 10vh;
    border: solid black;
  }

  @media screen and (min-width: 1200px) {

    .dices {
      display: none
    }

    .roll{
      display: none
    }

  }

</style>
