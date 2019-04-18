import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentDices:[
        {id: 1, value: 1, locked: false},
        {id: 2, value: 2, locked: false},
        {id: 3, value: 3, locked: false},
        {id: 4, value: 4, locked: false},
        {id: 5, value: 5, locked: false},
        ]
  },
  mutations: {
      rollDices: function(state){

          state.currentDices.forEach(function(dice) {
              if(dice.locked === false){
                  let rolledDiceId = Math.floor((Math.random() * 6) +1);

                  Vue.set(dice, 'id', rolledDiceId);
                  Vue.set(dice, 'value', rolledDiceId);
              }

          });

      },

      lockDice: function(state, index){
          console.log(index);
          state.currentDices[index].locked = !state.currentDices[index].locked;
      }
  },
  actions: {

  }
})
