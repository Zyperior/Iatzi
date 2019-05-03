<!--Representation: The scorecard front- and back face
    CSS: Base visual & specific visuals for all components on the score card
    Animation: Flip
    Author: Andreas Albihn, 2019-->
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
        <div class="rulesTitle">Rules - Scandinavian Free </div>
        <article class="rulesText">
          Each turn every player get three throws of 5 dices.
          After every throw the player can lock in any dices
          he/she wishes to keep. This is indicated by the dice
          color green. <br>
          <br>
          Score combinations that yields points will be indicated
          by the color green. To select a score, click its name in
          the score table. The player can select a score after
          any roll, but after 3 rolls he/she must pick any score
          not yet chosen (even if yields 0 points). <br>
          <br>
          Combination examples - <br>
          Two-pair: 1-1 & 5-5<br>
          Small straight: 1-2-3-4-5<br>
          Large straight: 2-3-4-5-6<br>
          Full House: 2-2-2 & 6-6<br>
          Iatzi: 3-3-3-3-3<br>
          Chance: Any combination of dices. Can be used as a
          safety should the player miss any targeted combination.<br>
          <br>
          All combinations are worth the total of the dice-values
          except for Iatzi, which is worth 50 points no matter what
          dice-value are in the combination. <br>
          <br>
          Bonus -<br>
          Bonus will grant the player 50 points if the player can
          reach a total of 63 points or more in the first 6 scores
          on the score table. Anything below, will yield 0 points.<br>
          <br>
          Good Luck!
        </article>
        <author class="author"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ScoreCardTitle from './ScoreCardTitle'
  import Dices from '../dices/Dices'
  import RollDice from '../controls/RollDice'
  import ScoreTable from './ScoreTable'
  import SelectPlayers from '../controls/SelectPlayers'
  import FlipButton from './FlipButton'
  import Author from './Author'

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
      'flip-button' : FlipButton,
      'author' : Author
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
    max-height: 100%;
    margin-right: 1vmin;
    margin-top: 1vmin;
  }

  .flipButtonFront:hover{
    color: blue;
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
    grid-template-rows: 3% 9% 4%;
    background-color: rgb(242,240,224);
    box-shadow: 1vmin 1vmin 3vmin black;
    border: solid black;
  }

  .flipButtonBack{
    justify-self: flex-start;
    max-height: 100%;
    margin-left: 1vmin;
    margin-top: 1vmin;
  }

  .rulesTitle{
    text-align: center;
    border-top: thin solid black;
    border-bottom: thin solid black;
  }

  .rulesText{
    text-align: start;
    font-size: 3.55vmin;
    padding-left: 4%;
    padding-right: 4%;
  }

  .author{
    display: flex;
    justify-content: flex-end;
    justify-self: flex-end;
    font-size: 3vmin;
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

    .flipper {
      transition: 0.6s;
      transform-style: preserve-3d;
      position: static;
    }

    .scoreCardBack{
      display: grid;
      width: 25vmax;
      height: 90vmin;
      position: absolute;
      grid-template-rows: 3% 16% 3%;
      background-color: rgb(242,240,224);
      box-shadow: 1vmin 1vmin 3vmin black;
      border: solid black;
    }

    .rulesTitle{
      font-size: 2vmin;
    }

    .rulesText{
      font-size: 1.7vmin;
    }

    .author{
      display: flex;
      margin-top: 10%;
      justify-content: flex-end;
      justify-self: end;
      padding-right: 1vmin;
      font-size: 1.5vmin;
    }

  }

</style>
