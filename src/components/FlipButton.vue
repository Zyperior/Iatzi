<!--Representation: Flip score card button
    Functionality: Flip the card
    Author: Andreas Albihn, 2019-->
<template>
  <div @click="flipCard">Flip</div>
</template>

<script>
    export default {
      name: "FlipButton",
      methods:{
        flipCard: function(){
          this.$store.commit('flipCard')
        }
      }
    }
</script>

