<template>
  <div v-bind:class="{bold : score.name === 'Bonus' || score.name === 'Total',
                      possible : score.possibleScore > 0,
                      chosen: score.playerScore[currentPlayer] > -1 &&
                      (score.name !== 'Total' && score.name !== 'Bonus')}"
                      @click="setScore">{{score.name}}</div>
</template>

<script>
    export default {
      name: "scoreName",
      props: ['score', 'index'],
      computed:{
        currentPlayer(){
          return this.$store.state.players.current
        }
      },
      methods:{
        setScore(){
          this.$store.dispatch('setScore', this.index)
        }
      }
    }
</script>

<style scoped>

  div{
    border-bottom: thin solid rgb(213,211,198);
    min-height: 3vmax;
  }

  .possible{
    color: green;
    font-weight: bold;
  }

  .chosen{
    color: rgb(213,211,198);
    font-weight: normal;
  }

</style>
