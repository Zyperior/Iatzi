<template>
    <div class="scoreGrid">
      <div class="players bold">Players</div>
      <div class="P" v-bind:class="{active : currentPlayer.id === 0}">P1</div>
      <div class="P" v-bind:class="{active : currentPlayer.id === 1}">P2</div>
      <div class="P" v-bind:class="{active : currentPlayer.id === 2}">P3</div>
      <div class="P" v-bind:class="{active : currentPlayer.id === 3}">P4</div>
      <div class="scoreColumn">
        <score-name class="scoreName" v-for="(score, index) in scoreCard"
                    v-bind:score="score" v-bind:index="index"/>
      </div>
      <div class="scoreColumn">
        <score v-for="score in scoreCard" v-bind:score="score.playerScore[0]"/>
      </div>
      <div class="scoreColumn">
        <score v-for="score in scoreCard" v-bind:score="score.playerScore[1]"/>
      </div>
      <div class="scoreColumn">
        <score v-for="score in scoreCard" v-bind:score="score.playerScore[2]"/>
      </div>
      <div class="scoreColumn">
        <score v-for="score in scoreCard" v-bind:score="score.playerScore[3]"/>
      </div>
    </div>
</template>

<script>
    import ScoreName from './ScoreName'
    import Score from './Score'
    export default {
      name: "ScoreTable",
      components:{
        'score-name' : ScoreName,
        'score' : Score
      },
      computed: {
        scoreCard() {
          return this.$store.state.scoreCard
        },

        currentPlayer(){
          return this.$store.state.currentPlayer
        }
      },
    }
</script>

<style scoped>
  .scoreGrid{
    display: grid;
    grid-template-columns: 35vw repeat(4, auto);
    grid-template-rows: 4vh auto;
    border-top: thin solid black;
  }

  .players{
    text-align: start;
  }

  .active{
    color: green;
    text-shadow: 1px 1px black;
  }

  .scoreColumn{
    display: grid;
    grid-template-columns: auto;
    align-items: center;

  }

  .scoreName{
    text-align: start;

  }

  .bold{
    font-weight: bolder;
  }

  .possible{
    background-color: lightgreen;
  }
</style>
