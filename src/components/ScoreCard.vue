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
    grid-template-rows: 28vh auto;
    width: 95vw;
    height: 97vh;
    position: fixed;
    z-index: 1;
    background-color: rgb(242,240,224);
    box-shadow: 1vw 1vw 3vw black;
    border: solid black;
  }

  .header{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 8vh 9vh 5vh;
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
