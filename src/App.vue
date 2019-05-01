<template>
  <div id="app" class="app">
    <section class="controls">
      <game-dices/>
      <roll-dice-button :invalid-amount="validAmount"/>
      <select-players class="selectPlayers" v-if="!gameStarted" @amount-validation="amountValidation"/>
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
  margin-left: 0;
  text-align: center;
  color: #2c3e50;

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
    left: 0;
  }
}

@media screen and (min-width: 1200px) and (orientation: landscape) {

  /*Reset orientation lock if larger screen*/
  html {
    transform: none;
    position: relative;
    overflow-x: visible;
    top: 0;
    left: 0;
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
  }
}

</style>
