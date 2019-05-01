<template>
  <div id="app" class="app">
    <section class="controls">
      <game-dices class="dices"/>
      <roll-dice-button class="rollButton" :invalid-amount="validAmount"/>
      <label v-if="!gameStarted">
        Players<select-players class="selectPlayers" v-if="!gameStarted" @amount-validation="amountValidation"/>
      </label>
    </section>
    <score-card/>
  </div>
</template>

<script>
import Dices from './components/dices/Dices'
import RollDiceButton from './components/RollDice'
import ScoreCard from './components/ScoreCard'
import SelectPlayers from './components/SelectPlayers'

export default {
  name: 'app',
  components: {
    'game-dices': Dices,
    'roll-dice-button': RollDiceButton,
    'score-card': ScoreCard,
    'select-players' : SelectPlayers
  },
  data(){
    return{
      validAmount : false
    }
  },
  computed: {
    gameStarted(){
      return this.$store.state.gameStarted;
    }
  },
  methods:{
    amountValidation: function (e) {
      this.validAmount = e;
    }
  }
}
</script>

<style>
.app {
  display: grid;
  grid-template-columns: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.controls{
  display: none;
}


@media screen and (min-width: 300px) and (orientation: landscape) {

  /*Orientation lock if smaller screen and landscape*/
  html {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
  }
}

@media screen and (min-width: 1200px) and (orientation: landscape) {

  /*Reset orientation lock if larger screen*/
  html {
    transform: none;
    position: relative;
    overflow-x: visible;
    top: 0;
  }

  .app {
    grid-template-columns: auto auto;
    margin-left: 20vmax;
    grid-column-gap: 5vmax;
  }

  .controls{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row-gap: 5vmin;
    margin-bottom: 30vmin;
    font-size: 2vmin;
  }

  .dices{
    display: flex;
    margin-top:10vmin;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 50vmin;
    min-width: 50vmin;
    grid-gap: 1vmax;
  }

  .dices > :nth-child(-n+3){
    align-self: flex-end;
  }

  .rollButton{
    display: flex;
    min-width: 20vmax;
    max-width: 20vmax;
    min-height: 5vmin;
    font-size: 4vmin;
    justify-content: center;
    align-items: center;
    border: solid black 0.4vmin;
  }

  .selectPlayers{
    max-width: 2vmin;
    font-size: 2vmin;
    padding-left: 1vmin;
    margin-left: 1vmin;
  }


}

</style>
