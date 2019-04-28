<template>
  <div class="scoreCard">
    <section class="header">
      <score-card-title/>
      <score-card-dices v-if="gameStarted" class="dices"/>
      <score-card-roll class="roll" :invalid-amount="validAmount"/>
      <select-players v-if="!gameStarted" @invalid-amount="amountIsValid"/>
    </section>
    <score-table/>
  </div>
</template>

<script>
  import ScoreCardTitle from './ScoreCardTitle'
  import Dices from './dices/Dices'
  import RollDice from './RollDice'
  import ScoreTable from './ScoreTable'
  import SelectPlayers from './SelectPlayers'

  export default {
    name: "ScoreCard",
    data(){
      return{
        validAmount : false
      }
    },
    components:{
      'score-card-title': ScoreCardTitle,
      'score-card-dices': Dices,
      'score-card-roll' : RollDice,
      'score-table' : ScoreTable,
      'select-players': SelectPlayers
    },
    computed:{
      gameStarted: function(){
        return this.$store.state.gameStarted
      }
    },
    methods:{
      amountIsValid: function (e) {
        this.validAmount = e;
      }
    }
  }
</script>

<style scoped>

  .scoreCard{
    display: grid;
    width: 95vmin;
    height: 97vmax;
    position: fixed;
    z-index: 999;
    background-color: rgb(242,240,224);
    box-shadow: 1vmin 1vmin 3vmin black;
    border: solid black;
  }

  .header{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 8vmax 9vmax 5vmax;
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
