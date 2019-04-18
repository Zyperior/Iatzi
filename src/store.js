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
    ],
    possibleCombosUpper:[
      {id: 1, name:"Ones", score: 0},
      {id: 2, name:"Twos", score: 0},
      {id: 3, name:"Threes", score: 0},
      {id: 4, name:"Fours", score: 0},
      {id: 5, name:"Fives", score: 0},
      {id: 6, name:"Sixes", score: 0},
    ],
    possibleCombosLower:[
      {id: 1, name:"Pair", score: 0},
      {id: 2, name:"Two Pair", score: 0},
      {id: 3, name:"Three of a kind", score: 0},
      {id: 4, name:"Four of a kind", score: 0},
      {id: 1, name:"Small straight", score: 0},
      {id: 2, name:"Large straight", score: 0},
      {id: 3, name:"Full house", score: 0},
      {id: 4, name:"Chance", score: 0},
      {id: 4, name:"Iatzi", score: 0},
    ]
  },
  mutations: {
    rollDices: function(state){

      let diceArr = [];

      state.currentDices.forEach(function(dice) {

        if(dice.locked === false){
          let rolledDiceId = Math.floor((Math.random() * 6) +1);

          Vue.set(dice, 'id', rolledDiceId);
          Vue.set(dice, 'value', rolledDiceId);
        }

        diceArr.push(dice.value)

      });

      diceArr.sort();
      diceArr = diceArr.join("");
      state.possibleCombos = [];

      let count = [0,0,0,0,0,0];
      for(let i = 0; i<5; i++){
        count[diceArr[i]-1]++;
      }

      let top
      console.log(count)
      // if (/(.)\1{4}/.test(diceArr)) { state.possibleCombos.push("Iatzi!"); }
      // if (/(.)\1{3}/.test(diceArr)) { state.possibleCombos.push("Four of a Kind"); }
      // if (/(.)\1{2}(.)\2|(.)\3(.)\4{2}/.test(diceArr)) { state.possibleCombos.push("Full House");}
      // if (/(.)\1{2}/.test(diceArr)) { state.possibleCombos.push("Three of a Kind"); }
      // if (/(.)\1{1}/.test(diceArr)) { state.possibleCombos.push("Pair"); }
      // if (/1234|2345|3456/.test(diceArr.replace(/(.)\1/,"$1"))) { state.possibleCombos.push("Small Straight"); }
      //
      // console.log(state.possibleCombos)

      },

      lockDice: function(state, index){
          console.log(index);
          state.currentDices[index].locked = !state.currentDices[index].locked;
      }
  },
  actions: {

  }
})
