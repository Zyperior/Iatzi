import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentDices:[
      {id: 1, value: 1, locked: false},
      {id: 2, value: 2, locked: false},
      {id: 3, value: 3, locked: false},
      {id: 4, value: 4, locked: false},
      {id: 5, value: 5, locked: false},
    ],
    scoreCard:[
      {id: 1, name:"Ones", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 2, name:"Twos", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 3, name:"Threes", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 4, name:"Fours", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 5, name:"Fives", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 6, name:"Sixes", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 7, name:"Bonus", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 8, name:"Pair", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 9, name:"Two-Pair", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 10, name:"Three of a kind", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 11, name:"Four of a kind", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 12, name:"Small straight", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 13, name:"Large straight", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 14, name:"Full house", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 15, name:"Chance", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 16, name:"Iatzi", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {id: 17, name:"Total", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
    ],
    diceValueArray : [],
    rollNumber : {current: 0},
    players : {amount: 1, current: -1},
    gameStarted : false,
  },
  mutations: {

    setPlayerAmount: function(state, amount){
      state.players.amount = parseInt(amount);
    },

    startGame: function(state){
      state.gameStarted = true;
      Vue.set(state.players, 'current', 0);
    },

    rollDices: function(state){

      if(state.rollNumber.current < 3){
        // Reset array for dice values
        state.diceValueArray = [];

        //Reset all possible score values
        state.scoreCard.forEach((dice)=>{ Vue.set(dice, 'possibleScore', 0)});

        state.currentDices.forEach(function(dice) {

          if(!dice.locked){

            //Set a random value between 1-6 (Roll a dice)
            let rolledDiceId = Math.floor((Math.random() * 6) + 1);

            Vue.set(dice, 'id', rolledDiceId);
            Vue.set(dice, 'value', rolledDiceId);
          }

          state.diceValueArray.push(dice.value)
        });

        //Sort the dice value array and add it to a simplified name
        let sortedValues = state.diceValueArray.sort();

        //Set a counting array for how many of each possible value there is.
        let diceCount = [0,0,0,0,0,0];
        for(let i = 0; i < sortedValues.length; i++){
          //Increase the value of the index in the counting array that matches the value in dice value array
          diceCount[sortedValues[i] - 1]++;
        }

        //Set variables to check what the two highest counts are in the counting array
        let highestCount1 = 0;
        let highestCount2 = 0;

        for(let i = 0; i < diceCount.length; i++){

          if(diceCount[i] > 0){
            //Set the current dice "Upper" score to their total value
            Vue.set(state.scoreCard[i], 'possibleScore', diceCount[i]*(i + 1));
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

        // Below we check the two highest counts if they match any of the possible combinations
        if(diceCount[highestCount1] === 5){

          //Iatzi
          Vue.set(state.scoreCard[15], 'possibleScore', 50);

          //Four of a kind
          Vue.set(state.scoreCard[10], 'possibleScore', 4 * (highestCount1 + 1));

          //Three of a kind
          Vue.set(state.scoreCard[9], 'possibleScore', 3 * (highestCount1 + 1));

          //Pair
          Vue.set(state.scoreCard[7], 'possibleScore', 2 *(highestCount1 + 1));

        }
        else if(diceCount[highestCount1] === 4){

          //Four of a kind
          Vue.set(state.scoreCard[10], 'possibleScore', 4 * (highestCount1 + 1));

          //Three of a kind
          Vue.set(state.scoreCard[9], 'possibleScore', 3 * (highestCount1 + 1));

          //Pair
          Vue.set(state.scoreCard[7], 'possibleScore', 2 * (highestCount1 + 1));

        }
        else if(diceCount[highestCount1] === 3){

          if(diceCount[highestCount2] === 2){

            //Full house
            Vue.set(state.scoreCard[13], 'possibleScore', 3 * (highestCount1 + 1) + 2 * (highestCount2 + 1));

            //Three of a kind
            Vue.set(state.scoreCard[9], 'possibleScore', 3 * (highestCount1 + 1));

            //Two-pair
            Vue.set(state.scoreCard[8], 'possibleScore', 2 * (highestCount1 + 1) + 2 * (highestCount2 + 1));

            //Pair
            if(highestCount1 > highestCount2){
              Vue.set(state.scoreCard[7], 'possibleScore', 2 * (highestCount1 + 1));
            }
            else{
              Vue.set(state.scoreCard[7], 'possibleScore', 2 * (highestCount2 + 1));
            }

          }
          else{

            //Three of a kind
            Vue.set(state.scoreCard[9], 'possibleScore', 3 * (highestCount1 + 1));

            //Pair
            Vue.set(state.scoreCard[7], 'possibleScore', 2 * (highestCount1 + 1));

          }
        }
        else if(diceCount[highestCount1] === 2){

          if(diceCount[highestCount2] === 2){

            //Two-pair
            Vue.set(state.scoreCard[8], 'possibleScore', 2 * (highestCount1 + 1) + 2 * (highestCount2 + 1));

            //Pair
            if(highestCount1 > highestCount2){
              Vue.set(state.scoreCard[7], 'possibleScore', 2 * (highestCount1 + 1));
            }
            else{
              Vue.set(state.scoreCard[7], 'possibleScore', 2 * (highestCount2 + 1));
            }

          }
          else{

            //Pair
            Vue.set(state.scoreCard[7], 'possibleScore', 2 * (highestCount1 + 1));

          }
        }

        if(
          diceCount[0] > 0 &&
          diceCount[1] > 0 &&
          diceCount[2] > 0 &&
          diceCount[3] > 0 &&
          diceCount[4] > 0
        ){
          //Small straight
          Vue.set(state.scoreCard[11], 'possibleScore', 15);
        }
        else if(
          diceCount[1] > 0 &&
          diceCount[2] > 0 &&
          diceCount[3] > 0 &&
          diceCount[4] > 0 &&
          diceCount[5] > 0
        ){
          //Large straight
          Vue.set(state.scoreCard[12], 'possibleScore', 20);
        }

        let chanceScore = 0;
        for(let i = 0; i < diceCount.length; i++){
          chanceScore = chanceScore + (diceCount[i]*(i + 1));
        }
        //Chance
        Vue.set(state.scoreCard[14], 'possibleScore', chanceScore);

        //Increase dice rollNumber
        let currentRollNr = state.rollNumber.current;
        currentRollNr++;
        Vue.set(state.rollNumber, 'current', currentRollNr);
      }

    },

    //If round initialized and not "Bonus" or "Total" and if the score has not already been set
    //Set score, calculate bonus and total points, cycle to next player
    setScore: function(state, index){
      if(state.rollNumber.current > 0){
        if(index !== 6 || index !== 16){
          if(state.scoreCard[index].playerScore[state.players.current] < 0){
            Vue.set(state.scoreCard[index].playerScore, state.players.current, state.scoreCard[index].possibleScore);
            this.commit('checkBonus', state.players.current);
            this.commit('sumTotal', state.players.current);
            this.commit('nextPlayer');

            state.currentDices.forEach((dice)=> {
              dice.locked = false;
            });

            Vue.set(state.rollNumber, 'current', 0);
          }
        }
      }
    },

    checkBonus: function(state, playerID){
      let sum = 0;
      for(let i = 0; i < 6; i++){
        let current = state.scoreCard[i].playerScore[playerID];
        if(current === -1){
          current = 0;
        }

        sum = sum + current;
      }

      if(sum > 66){
        state.scoreCard[6].playerScore[playerID] = 50;
      }
    },

    sumTotal: function(state, playerID) {
      let sum = 0;
      state.scoreCard.forEach(function(score){
        //Reset all possible scores to 0
        Vue.set(score, 'possibleScore', 0);

        if(score.name !== 'Total'){
          let current = score.playerScore[playerID];
          if(current === -1){
            current = 0;
          }

          sum = sum + current;
        }
        else{
          score.playerScore[playerID] = sum;
        }
      });

    },

    nextPlayer: function(state){
      let nextPlayer = state.players.current + 1;

      if(nextPlayer === state.players.amount){
        nextPlayer = 0;

      }

      Vue.set(state.players,'current', nextPlayer);
    },

    lockDice: function(state, index){
      if(state.rollNumber.current > 0){
        state.currentDices[index].locked = !state.currentDices[index].locked;
      }
    }
  }
})
