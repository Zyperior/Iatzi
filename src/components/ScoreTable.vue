<template>
    <div class="scoreGrid">
      <div class="scoreColumn">
        <score-name class="scoreName" v-for="(score, index) in scoreCard" :score="score" :index="index"
                    :class="{topRowName:index === 0}"/>
      </div>
      <div class="scoreColumn" :class="{active : players.current === 0}">
        <score class="scoreValue" v-for="(score, index) in scoreCard" :value="score.values[0]" :player="0"
               :class="{topRowValue:index === 0, winner : theWinner === 0}"/>
      </div>
      <div class="scoreColumn" :class="{active : players.current === 1}">
        <score class="scoreValue" v-for="(score, index) in scoreCard" :value="score.values[1]" :player="1"
               :class="{topRowValue:index === 0, winner : theWinner === 1}"/>
      </div>
      <div class="scoreColumn" :class="{active : players.current === 2}">
        <score class="scoreValue" v-for="(score, index) in scoreCard" :value="score.values[2]" :player="2"
               :class="{topRowValue:index === 0, winner : theWinner === 2}"/>
      </div>
      <div class="scoreColumn" :class="{active : players.current === 3}">
        <score class="scoreValue" v-for="(score, index) in scoreCard" :value="score.values[3]" :player="3"
               :class="{topRowValue:index === 0, winner : theWinner === 3}"/>
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
        },

        theWinner() {
          return this.$store.state.players.winner;
        }
      },
    }
</script>

<style scoped>

  .scoreGrid{
    display: grid;
    grid-template-columns: 38% repeat(4, 15.5%);
    grid-template-rows: auto;
  }

  .scoreColumn{
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-evenly;
  }

  .active{
    background-color: rgb(228,227,218);
  }

  .scoreName{
    min-width: 95%;
    text-align: start;
    border-bottom: thin solid rgb(213,211,198);
    padding-left: 5%;
    min-height: 5%;
    max-height: 5%;
  }

  .scoreValue{
    border-bottom: thin solid rgb(213,211,198);
    max-width: 80%;
    min-width: 80%;
    min-height: 5%;
    max-height: 5%;

  }

  .topRowValue{
    min-width: 100%;
    min-height: 5%;
    max-height: 5%;
    border-top: thin solid black;
    border-bottom: thin solid black;
  }

  .topRowName{
    min-width: 100%;
    margin-left: 5%;
    min-height: 5%;
    max-height: 5%;
    border-top: thin solid black;
    border-bottom: thin solid black;
  }

  .winner{
    font-weight: 900;
    color: green;
    text-shadow: 1vmin 1vmin 1vmax 1vmax greenyellow;
  }

  @media screen and (orientation: landscape){

    .scoreColumn{
      border-bottom: solid black;
    }

  }

  @media screen and (min-width: 1200px) and (orientation: landscape){

    .scoreGrid{
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
