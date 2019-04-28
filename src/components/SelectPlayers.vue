<!--Testing out Vuelidate in this file.
    The validation is redundant because of input filters and limitation params
    I will keep it in for example only-->

<template>
  <label>
    Players <input class="inputField" type="text" maxlength="1" min="1" max="4" v-model="amount" @keydown="validateInput">
  </label>
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
      methods:{
        validateInput(e){
          if(e.key !== 'Backspace'){
            let char = String.fromCharCode(e.which);
            if(!(/[1-4]/).test(char)){
              e.preventDefault();
            }
          }
        }
      },
      watch: {
        amount(value) {
          this.$v.$touch();
          if(this.$v.$invalid){
            this.$emit('invalid-amount', true);
          }
          else{
            this.$emit('invalid-amount', false);
            this.$store.commit('setPlayerAmount', value)
          }
        }
      }
    }
</script>

<style scoped>

  .inputField{
    max-width: 6vmin;
    padding-left: 4vmin;
  }

</style>
