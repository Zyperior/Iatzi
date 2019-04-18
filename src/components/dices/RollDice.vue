<template>
    <button v-on:click="rollDice">Roll dices</button>
</template>

<script>
    export default {
        name: "RollDiceButton",
        methods:{
            rollDice(){
                this.$store.commit('rollDices')
            }
        }
    }

</script>

<style scoped>

</style>
