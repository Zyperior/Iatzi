<!--Representation: The player amount input field
    Functionality: Set the amount of players, emit error if amount is invalid
    Used as a test-component for Vuelidate
    Author: Andreas Albihn, 2019-->
<template>
     <input class="inputField" type="text" maxlength="1" min="1" max="4" v-model="amount">
</template>

<script>
    import { between, required } from 'vuelidate/lib/validators'

    export default {
      name: "SelectPlayers",
      data(){
        return {
          amount: 1
        }
      },
      validations:{
        amount:{
          required,
          numeric: between(1,4),
        }
      },
      watch: {
        amount(value) {
          this.$v.$touch();
          if(this.$v.$invalid){
            this.$emit('amount-validation', true);
          }
          else{
            this.$emit('amount-validation', false);
            this.$store.commit('setPlayerAmount', value)
          }
        }
      }
    }
</script>

