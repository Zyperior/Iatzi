<template>
  <div class="box">
    <div :class="{winner : player === theWinner}" v-if="score > -1">{{score}}</div>
  </div>
</template>

<script>
    export default {
      name: "Score",
      props: {
        'score': Number,
        'player' : Number
      },
      computed: {
        theWinner() {
          return this.$store.state.players.winner;
        }
      }

    }
</script>

<style scoped>

  .box{
    border-bottom: thin solid rgb(213,211,198);
    min-width: 12vmin;
    min-height: 3vmax;
  }

  .winner{
    font-weight: 900;
    color: green;
    text-shadow: 1vmin 1vmin 1vmax 1vmax greenyellow;
  }

</style>
