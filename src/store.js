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
    diceValueArray: [],
    possibleCombosUpper:[
      {id: 1, name:"Ones", score: 0},
      {id: 2, name:"Twos", score: 0},
      {id: 3, name:"Threes", score: 0},
      {id: 4, name:"Fours", score: 0},
      {id: 5, name:"Fives", score: 0},
      {id: 6, name:"Sixes", score: 0}
    ],
    possibleCombosLower:[
      {id: 1, name:"Pair", score: 0},
      {id: 2, name:"Two-Pair", score: 0},
      {id: 3, name:"Three of a kind", score: 0},
      {id: 4, name:"Four of a kind", score: 0},
      {id: 5, name:"Small straight", score: 0},
      {id: 6, name:"Large straight", score: 0},
      {id: 7, name:"Full house", score: 0},
      {id: 8, name:"Chance", score: 0},
      {id: 9, name:"Iatzi", score: 0},
    ]
  },
  methods:{

  },
  mutations: {
    rollDices: function(state){

      //Reset array for dice values
      state.diceValueArray = [];

      //Reset all possible score values
      state.possibleCombosUpper.forEach((dice)=>{ Vue.set(dice, 'score', 0)});
      state.possibleCombosLower.forEach((dice)=>{ Vue.set(dice, 'score', 0)});

      //Loop through each dice
      state.currentDices.forEach(function(dice) {

        //If the dice isnt locked
        if(dice.locked === false){

          //Set a random value between 1-6 (Roll a dice)
          let rolledDiceId = Math.floor((Math.random() * 6) +1);

          //Set the dice id and value to that of the rolled dice
          Vue.set(dice, 'id', rolledDiceId);
          Vue.set(dice, 'value', rolledDiceId);
        }

        //Add the dice to the array for dice values
        state.diceValueArray.push(dice.value)

      });

      //Sort the dice value array and add it to a simplified name
      let sortedValues = state.diceValueArray.sort();

      //Set a counting array for how many of each possible value there is.
      let diceCount = [0,0,0,0,0,0];

      //Loop through the dice value array
      for(let i = 0; i < sortedValues.length; i++){
        //Increase the value of the index in the counting array that matches the value in dice value array
        diceCount[sortedValues[i]-1]++;
      }

      //Set variables to check what the two highest counts are in the counting array
      let highestCount1 = 0;
      let highestCount2 = 0;

      //Loop through the counting array
      for(let i = 0; i < diceCount.length; i++){

        //If the current dice total count is more than 0
        if(diceCount[i] > 0){
          //Set the current dice Upper score to their total value
          Vue.set(state.possibleCombosUpper[i], 'score', diceCount[i]*(i+1));
        }

        //Check each count value if they are higher than the current highest count
        if(diceCount[i] > diceCount[highestCount1]){
          //If so, set the second highest count to that of the former highest count
          highestCount2 = highestCount1;
          //and set the highest count to the current index
          highestCount1 = i;
        }
        //Else, check if each count are higher than the second highest count
        else if(diceCount[i] > diceCount[highestCount2]){
          //If so, set the second highest count to the current index
          highestCount2 = i;
        }
      }

      //Below we check the two highest counts if they match any of the possible combinations
      if(diceCount[highestCount1] === 5){

        //Iatzi
        Vue.set(state.possibleCombosLower[8], 'score', 50);

        //Four of a kind
        Vue.set(state.possibleCombosLower[3], 'score', 4*(highestCount1+1));

        //Three of a kind
        Vue.set(state.possibleCombosLower[2], 'score', 3*(highestCount1+1));

        //Pair
        Vue.set(state.possibleCombosLower[0], 'score', 2*(highestCount1+1))

      }
      else if(diceCount[highestCount1] === 4){

        //Four of a kind
        Vue.set(state.possibleCombosLower[3], 'score', 4*(highestCount1+1));

        //Three of a kind
        Vue.set(state.possibleCombosLower[2], 'score', 3*(highestCount1+1));

        //Pair
        Vue.set(state.possibleCombosLower[0], 'score', 2*(highestCount1+1));

      }
      else if(diceCount[highestCount1] === 3){

        if(diceCount[highestCount2] === 2){

          //Full house
          Vue.set(state.possibleCombosLower[6], 'score', 3*(highestCount1+1) + 2*(highestCount2+1));

          //Three of a kind
          Vue.set(state.possibleCombosLower[2], 'score', 3*(highestCount1+1));

          //Two-pair
          Vue.set(state.possibleCombosLower[1], 'score', 2*(highestCount1+1) + 2*(highestCount2+1));

          //Pair
          if(highestCount1 > highestCount2){
            Vue.set(state.possibleCombosLower[0], 'score', 2*(highestCount1+1));
          }
          else{
            Vue.set(state.possibleCombosLower[0], 'score', 2*(highestCount2+1));
          }

        }
        else{

          //Three of a kind
          Vue.set(state.possibleCombosLower[2], 'score', 3*(highestCount1+1));

          //Pair
          Vue.set(state.possibleCombosLower[0], 'score', 2*(highestCount1+1));

        }
      }
      else if(diceCount[highestCount1] === 2){

        if(diceCount[highestCount2] === 2){

          //Two-pair
          Vue.set(state.possibleCombosLower[1], 'score', 2*(highestCount1+1) + 2*(highestCount2+1));

          //Pair
          if(highestCount1 > highestCount2){
            Vue.set(state.possibleCombosLower[0], 'score', 2*(highestCount1+1));
          }
          else{
            Vue.set(state.possibleCombosLower[0], 'score', 2*(highestCount2+1));
          }

        }
        else{

          //Pair
          Vue.set(state.possibleCombosLower[0], 'score', 2*(highestCount1+1));

        }
      }

      else if(
        diceCount[0] > 0 &&
        diceCount[1] > 0 &&
        diceCount[2] > 0 &&
        diceCount[3] > 0 &&
        diceCount[4] > 0
        ){
        //Small straight
        Vue.set(state.possibleCombosLower[4], 'score', 15);
      }
      else if(
        diceCount[1] > 0 &&
        diceCount[2] > 0 &&
        diceCount[3] > 0 &&
        diceCount[4] > 0 &&
        diceCount[5] > 0
      ){
        //Large straight
        Vue.set(state.possibleCombosLower[5], 'score', 20);
      }

      let chanceScore = 0;
      for(let i = 0; i < diceCount.length; i++){
        chanceScore = chanceScore + (diceCount[i]*(i+1));
      }
      //Chance
      Vue.set(state.possibleCombosLower[7], 'score', chanceScore);

      //Print to console for control
      console.clear();
      console.log('Upper Scores');
      state.possibleCombosUpper.forEach((combo)=>{
        if(combo.score !== 0)
        console.log(combo.name + ' - Score: ' + combo.score)
      });
      console.log();
      console.log('Lower Scores');
      state.possibleCombosLower.forEach((combo)=>{
        if(combo.score !== 0)
          console.log(combo.name + ' - Score: ' + combo.score)
      })

    },


    lockDice: function(state, index){
      console.log(index);
      state.currentDices[index].locked = !state.currentDices[index].locked;
    }
  },
  actions: {

  }
})
