<template>
  <div class="name" v-bind:class="{bold : score.name === 'Bonus' || score.name === 'Total' || score.name ==='Players',
                      possible : score.possibleScore > 0,
                      chosen: score.values[currentPlayer] > -1 &&
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

  .name:hover{
    cursor: pointer;
  }

  .bold{
    font-weight: bolder;
  }

  .possible{
    color: green;
    font-weight: bold;
  }

  .chosen{
    color: rgb(213,211,198);
    font-weight: normal;
  }

  .chosen:hover{
    cursor: not-allowed;
  }


</style>
