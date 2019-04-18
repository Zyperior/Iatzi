<template>
  <div id="app">
    <game-dices/>
    <roll-dice-button/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dices from './components/dices/Dices'
import RollDiceButton from './components/dices/RollDice'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'game-dices':Dices,
    'roll-dice-button': RollDiceButton
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
