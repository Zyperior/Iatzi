<template>
  <div id="app" class="app">
    <game-dices/>
    <roll-dice-button/>
    <score-card/>
  </div>
</template>

<script>
import Dices from './components/dices/Dices'
import RollDiceButton from './components/RollDice'
import ScoreCard from './components/ScoreCard'

export default {
  name: 'app',
  components: {
    'game-dices': Dices,
    'roll-dice-button': RollDiceButton,
    'score-card': ScoreCard
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
  color: #2c3e50;
  justify-content: center;
}

@media screen and (min-width: 300px) and (orientation: landscape) {
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
  html {
    transform: none;
    width: 100vh;
    position: absolute;
    overflow-x: visible;
    top: 0;
    left: 50%;
  }
}

</style>
