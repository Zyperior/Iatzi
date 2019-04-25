<template>
  <div v-bind:class="{bold : score.name === 'Bonus' || score.name === 'Total',
                      possible : score.possibleScore > 0 && score.playerScore[currentPlayer.id] < 0}"
                      @click="setScore">{{score.name}}</div>
</template>

<script>
    export default {
      name: "scoreName",
      props: ['score', 'index'],
      computed:{
        currentPlayer(){
          return this.$store.state.currentPlayer
        }
      },
      methods:{
        setScore(){
          this.$store.commit('setScore', this.index)
        }
      }
    }
</script>

<style scoped>

</style>
