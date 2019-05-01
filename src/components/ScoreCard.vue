<template>
  <div class="scoreCard">
    <section class="header">
      <div class="flipCard">Flip -></div>
      <score-card-title class="title"/>
      <score-card-dices class="dices" v-if="gameStarted"/>
      <score-card-roll class="scoreCardButton" :invalid-amount="validAmount"/>
      <label v-if="!gameStarted">Players<select-players class="playerSelect" v-if="!gameStarted" @amount-validation="amountValidation"/>
      </label>
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
      amountValidation: function (e) {
        this.validAmount = e;
      }
    }
  }
</script>

<style scoped>

  .scoreCard{
    display: grid;
    grid-template-rows: auto 70%;
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

  .title{
    padding-top: 2vmax;
    max-height: 7vmax;
    justify-self: center;
  }

  .dices{
    display: grid;
    grid-template-columns: repeat(5, 15vmin);
    justify-self: center;
    justify-content: center;
  }

  .scoreCardButton{
    display: flex;
    min-width: 73vmin;
    min-height: 5vmax;
    max-width: 73vmin;
    background-color: white;
    justify-self: center;
    justify-content: center;
    align-items: center;
    font-size: 4vmax;
    border: solid black 1vmin;
    margin-bottom: 2vmax;
  }

  .playerSelect{
    max-width: 6vmin;
    padding-left: 4vmin;
    margin-left: 2vmin;
  }

  @media screen and (min-width: 1200px) and (orientation: landscape) {

    .scoreCard{
      position: relative;
      z-index: 0;
      width: 25vmax;
      height: 90vmin;
      grid-template-rows: auto 80%;
      box-shadow: 1vmin 1vmin 1vmin gray;
      margin-top: 3vmin;
    }

    .header{
      grid-template-rows: auto;
    }

    .dices {
      display: none;
    }

    .scoreCardButton{
      display: none;
    }

    .playerSelect{
      display: none;
    }

    label{
      display: none;
    }

  }

</style>
