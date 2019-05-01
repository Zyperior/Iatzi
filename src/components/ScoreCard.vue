<template>
  <div class="flip-container" :class="{flip : cardFlipped}">
    <div class="flipper">
      <!--Score card Front face-->
      <div class="scoreCardFront">
        <section class="header">
          <flip-button class="flipButtonFront"/>
          <score-card-title class="title"/>
          <score-card-dices class="dices" v-if="gameStarted"/>
          <score-card-roll class="scoreCardButton" :invalid-amount="validAmount"/>
          <label v-if="!gameStarted">Players<select-players class="playerSelect" v-if="!gameStarted" @amount-validation="amountValidation"/>
          </label>
        </section>
        <score-table/>
      </div>
      <!--Score card Back face-->
      <div class="scoreCardBack">
        <flip-button class="flipButtonBack"/>
        <score-card-title class="title"/>
        <p class="rulesTitle">Rules</p>
      </div>
    </div>
  </div>
</template>

<script>
  import ScoreCardTitle from './ScoreCardTitle'
  import Dices from './dices/Dices'
  import RollDice from './RollDice'
  import ScoreTable from './ScoreTable'
  import SelectPlayers from './SelectPlayers'
  import FlipButton from './FlipButton'

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
      'select-players': SelectPlayers,
      'flip-button' : FlipButton
    },
    computed:{
      gameStarted: function(){
        return this.$store.state.gameStarted
      },

      cardFlipped: function(){
        return this.$store.state.cardFlipped
      }
    },
    methods:{
      amountValidation: function (e) {
        this.validAmount = e;
      },


    }
  }
</script>

<style scoped>

  .flip-container {
    perspective: 1000px;
  }

  .flip-container .flip .flipper, .flip-container.flip .flipper {
    transform: rotateY(180deg);
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .scoreCardFront, .scoreCardBack {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .scoreCardFront {
    z-index: 2;
    transform: rotateY(0deg);
  }

  .scoreCardBack {
    transform: rotateY(180deg);
  }

  .scoreCardFront{
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
    grid-template-rows: 3vmax 8vmax 9vmax 5vmax;
  }

  .flipButtonFront{
    justify-self: flex-end;
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

  .scoreCardBack{
    display: grid;
    width: 95vmin;
    height: 97vmax;
    grid-template-rows: 3% 5% 9%;
    background-color: rgb(242,240,224);
    box-shadow: 1vmin 1vmin 3vmin black;
    border: solid black;
  }

  .flipButtonBack{
    justify-self: flex-start;
  }

  .rulesTitle{
    border-top: thin solid black;
    border-bottom: thin solid black;
  }

  @media screen and (min-width: 1200px) and (orientation: landscape) {

    .scoreCardFront{
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
