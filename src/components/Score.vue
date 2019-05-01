<template>
  <div :class="{winner : player === theWinner}">
    <div v-if="score === 'A' || score === 'B' || score === 'C' || score === 'D'">{{score}}</div>
    <div v-else-if="score > -1">{{score}}</div>

  </div>
</template>

<script>
    export default {
      name: "Score",
      props: [
        'score',
        'player',
      ],
      computed: {
        theWinner() {
          return this.$store.state.players.winner;
        }
      }

    }
</script>

<style scoped>

  .winner{
    font-weight: 900;
    color: green;
    text-shadow: 1vmin 1vmin 1vmax 1vmax greenyellow;
  }



</style>
