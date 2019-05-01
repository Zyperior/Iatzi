<template>
     <input class="inputField" type="text" maxlength="1" min="1" max="4" v-model="amount" @keydown="validateInput">
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

