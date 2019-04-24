<template>
  <div id="app">
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
#app {
  display: grid;
  grid-template-columns: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
}
</style>
