import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      dices:[
        {id: 1, value: 1, locked: false},
        {id: 2, value: 2, locked: false},
        {id: 3, value: 3, locked: false},
        {id: 4, value: 4, locked: false},
        {id: 5, value: 5, locked: false},
        {id: 6, value: 6, locked: false}
      ],
      currentDices:[
        {id: 1, value: 1, locked: false},
        {id: 2, value: 2, locked: false},
        {id: 3, value: 3, locked: false},
        {id: 4, value: 4, locked: false},
        {id: 5, value: 5, locked: false},
        {id: 6, value: 6, locked: false}
        ]
  },
  mutations: {
      rollDices(state){
          for(let i = 0; i > 6; i++){
            let rolledDice = Math.floor((Math.random() * 6) +1);
            let dice = state.currentDices[i];
            if(dice.locked === false){
                state.currentDices.slice(i,i);
                state.currentDices.push(state.dices[rolledDice]);
            }

          }
      }
  },
  actions: {

  }
})
