<template>
  <div id="app">
    <Dices/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dices from './components/dices/Dices'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Dices
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
