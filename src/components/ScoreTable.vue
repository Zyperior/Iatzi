<template>
    <div class="scoreGrid">
      <div class="players bold">Players</div>
      <div class="P">P1</div>
      <div class="P">P2</div>
      <div class="P">P3</div>
      <div class="P">P4</div>
      <div class="scoreTitles">
        <div class="scoreTitle" v-for="score in scoreCard" v-bind:class="{bold : score.name === 'Bonus' || score.name === 'Total'}" >{{score.name}}</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "ScoreTable",
      computed: {
        scoreCard() {
          return this.$store.state.scoreCard
        }
      },
    }
</script>

<style scoped>
  .scoreGrid{
    display: grid;
    grid-template-columns: auto repeat(4, 10vw);
    grid-template-rows: 4vh auto;
    border-top: thin solid black;
  }

  .players{
  }

  .scoreTitles{
    display: grid;
    grid-template-columns: auto;
    align-items: center;

  }

  .scoreTitle{
    text-align: start;

  }

  .bold{
    font-weight: bolder;
  }
</style>
