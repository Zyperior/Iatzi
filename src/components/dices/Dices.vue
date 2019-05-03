<!--Representation: All dices
    Author: Andreas Albihn, 2019-->
<template>
  <div>
    <div v-for="(dice, index) in currentDices">
      <Dice class="dice" :dice="dice" :index="index"></Dice>
    </div>
  </div>
</template>

<script>
  import Dice from './Dice'

  export default {
    name: "Dices",
    components:{
      Dice
    },
    computed: {
      currentDices() {
        return this.$store.state.currentDices
      }
    }
  }


</script>
