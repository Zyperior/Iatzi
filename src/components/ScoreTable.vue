<template>
    <div class="scoreGrid">
      <div class="scoreColumn">
        <score-name class="scoreName" v-for="(score, index) in scoreCard" :score="score" :index="index" :class="{topRowName:index === 0}"/>
      </div>
      <div class="scoreColumn" :class="{active : players.current === 0}">
        <score class="scoreValue" v-for="(score, index) in scoreCard" :score="score.values[0]" :player="0" :class="{topRowValue:index === 0}"/>
      </div>
      <div class="scoreColumn" :class="{active : players.current === 1}">
        <score class="scoreValue" v-for="(score, index) in scoreCard" :score="score.values[1]" :player="1" :class="{topRowValue:index === 0}"/>
      </div>
      <div class="scoreColumn" :class="{active : players.current === 2}">
        <score class="scoreValue" v-for="(score, index) in scoreCard" :score="score.values[2]" :player="2" :class="{topRowValue:index === 0}"/>
      </div>
      <div class="scoreColumn" :class="{active : players.current === 3}">
        <score class="scoreValue" v-for="(score, index) in scoreCard" :score="score.values[3]" :player="3" :class="{topRowValue:index === 0}"/>
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
    grid-template-columns: 33% repeat(4, auto);
    grid-template-rows: auto;
  }

  .players{
    margin-left: 3%;
    text-align: start;
  }

  .active{
    background-color: rgb(228,227,218);
  }

  .scoreColumn{
    display: flex;
    flex-direction: column;
    min-height: 99%;
    align-items: center;
    justify-content: space-evenly;
  }

  .scoreName{
    min-width: 95%;
    text-align: start;
    border-bottom: thin solid rgb(213,211,198);
    padding-left: 5%;
    min-height: 5%;
  }

  .scoreValue{
    border-bottom: thin solid rgb(213,211,198);
    min-width: 80%;
    min-height: 5%;
  }

  .bold{
    font-weight: bolder;
  }

  .topRowValue{
    min-width: 100%;
    border-top: thin solid black;
    border-bottom: thin solid black;
  }

  .topRowName{
    min-width: 100%;
    margin-left: 5%;
    border-top: thin solid black;
    border-bottom: thin solid black;
  }

  @media screen and (orientation: landscape){
    .scoreColumn{
      border-bottom: solid black;
    }

  }

  @media screen and (min-width: 1200px) and (orientation: landscape){
    .scoreGrid{
      display: grid;
      grid-template-columns: 40% repeat(4, auto);
      grid-template-rows: auto;
      margin-top: 4vmin;
      font-size: 2.4vmin;
    }

    .scoreColumn{
      border-bottom: none;
    }

    .topRow{
      min-width: 98%;
    }

  }


</style>
