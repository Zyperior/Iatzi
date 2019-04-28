<template>
    <div class="scoreGrid">
      <div class="players bold">Players</div>
      <div class="P" v-bind:class="{active : players.current === 0}">P1</div>
      <div class="P" v-bind:class="{active : players.current === 1}">P2</div>
      <div class="P" v-bind:class="{active : players.current === 2}">P3</div>
      <div class="P" v-bind:class="{active : players.current === 3}">P4</div>
      <div class="scoreColumn">
        <score-name  class="scoreName" v-for="(score, index) in scoreCard"
                    v-bind:score="score" v-bind:index="index"/>
      </div>
      <div class="scoreColumn" v-bind:class="{active : players.current === 0}">
        <score v-for="score in scoreCard" v-bind:score="score.playerScore[0]"/>
      </div>
      <div class="scoreColumn" v-bind:class="{active : players.current === 1}">
        <score v-for="score in scoreCard" v-bind:score="score.playerScore[1]"/>
      </div>
      <div class="scoreColumn" v-bind:class="{active : players.current === 2}">
        <score v-for="score in scoreCard" v-bind:score="score.playerScore[2]"/>
      </div>
      <div class="scoreColumn" v-bind:class="{active : players.current === 3}">
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

        players(){
          return this.$store.state.players
        }
      },
    }
</script>

<style scoped>
  .scoreGrid{
    display: grid;
    grid-template-columns: 35vw repeat(4, auto);
    grid-template-rows: 3.5vh auto;
    border-top: thin solid black;
  }

  .players{
    text-align: start;
  }

  .active{
    background-color: rgb(228,227,218);
  }

  .scoreColumn{
    display: flex;
    flex-direction: column;
    min-height: 100%;
    align-items: center;
    justify-content: space-evenly;

  }

  .scoreName{
    min-width: 100%;
    text-align: start;

  }

  .bold{
    font-weight: bolder;
  }


</style>
