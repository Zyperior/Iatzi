import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentDices:[
      {value: 1, locked: false, rolling: 0},
      {value: 2, locked: false, rolling: 0},
      {value: 3, locked: false, rolling: 0},
      {value: 4, locked: false, rolling: 0},
      {value: 5, locked: false, rolling: 0},
    ],
    scoreCard:[
      {name:"Ones", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Twos", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Threes", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Fours", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Fives", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Sixes", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Bonus", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Pair", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Two-Pair", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Three of a kind", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Four of a kind", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Small straight", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Large straight", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Full house", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Chance", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Iatzi", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
      {name:"Total", possibleScore: 0, playerScore : [-1, -1, -1, -1]},
    ],
    diceValueArray : [],
    rollNumber : {current: 0},
    players : {amount: 1, current: -1, winner: -1},
    gameStarted : false,
  },
  methods:{

  },
  mutations: {

    setPlayerAmount: function(state, amount){
      state.players.amount = parseInt(amount);
    },

    startGame: function(state){
      state.gameStarted = true;
      Vue.set(state.players, 'current', 0);
    },

    lockDice: function(state, index){
      if(state.rollNumber.current > 0){
        state.currentDices[index].locked = !state.currentDices[index].locked;
      }
    },

    rollDices: function(state){

      if(state.rollNumber.current < 3){
        // Reset array for dice values
        state.diceValueArray = [];

        //Reset all possible score values
        state.scoreCard.forEach((dice)=>{ Vue.set(dice, 'possibleScore', 0)});

        state.currentDices.forEach(function(dice) {

          if(!dice.locked){

            let rollTimer = (Math.floor((Math.random() * 15) + 1) * 100);
            let rollDirection = Math.floor((Math.random() * 2) + 1);

            Vue.set(dice, 'rolling', rollDirection);

            setTimeout(function () {
              Vue.set(dice, 'rolling', 0);
            },rollTimer);
            //Set a random value between 1-6 (Roll a dice)
            let rolledDiceValue = Math.floor((Math.random() * 6) + 1);

            Vue.set(dice, 'value', rolledDiceValue);
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

    nextPlayer: function(state){

      state.currentDices.forEach((dice)=> {
        dice.locked = false;
      });
      Vue.set(state.rollNumber, 'current', 0);

      let nextPlayer = state.players.current + 1;

      if(nextPlayer === state.players.amount){
        nextPlayer = 0;

      }

      Vue.set(state.players,'current', nextPlayer);
    },

    winControl: function(state){

      let totalScore = state.scoreCard[16];
      let highestTotal = 0;
      let winner = 0;

      for(let i=0; i < state.players.amount; i++){
        if(totalScore.playerScore[i] >  highestTotal){
          highestTotal = totalScore.playerScore[i];
          winner = i;
        }
      }
      console.log(winner);
      Vue.set(state.players, 'winner', winner);
    }

  },
  actions:{

    //If round initialized and not "Bonus" or "Total" and if the score has not already been set
    //Set score, calculate bonus and total points,
    //If final round, check who won, else cycle to next player
    setScore: function({state}, index){
      if(state.rollNumber.current > 0){
        if(index !== 6 || index !== 16){
          if(state.scoreCard[index].playerScore[state.players.current] < 0){

            Vue.set(state.scoreCard[index].playerScore, state.players.current, state.scoreCard[index].possibleScore);

            let self = this;

            self.dispatch('checkBonus', state.players.current).then(function(){

              self.dispatch('sumTotal', state.players.current).then(function(){

                self.dispatch('endGameControl').then(function () {

                  self.commit('winControl');

                },function () {

                  self.commit('nextPlayer');

                });
              });
            });
          }
        }
      }
    },

    //Check if Bonus has not already been set,
    //For the first 6 values of the current player scores, sum them (if not yet chosen, add 0)
    //If total sum is above 66, set Bonus to 50
    //If all have been chosen and still not over 66, set Bonus to 0
    checkBonus: function({state}, playerID){

      return new Promise(function (resolve) {

        if(state.scoreCard[6].playerScore[playerID] < 0){

          let sum = 0;
          let notYetChosen = 0;

          for(let i = 0; i < 6; i++){
            let current = state.scoreCard[i].playerScore[playerID];
            if(current === -1){
              notYetChosen++;
              current = 0;
            }

            sum = sum + current;
          }

          if(sum > 66){
            Vue.set(state.scoreCard[6].playerScore, playerID,50);
          }
          else if(notYetChosen === 0){
            Vue.set(state.scoreCard[6].playerScore, playerID,0);
          }
        }
        resolve();
      });

    },

    sumTotal: function({state}, playerID) {

      return new Promise(resolve => {

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
            Vue.set(score.playerScore, playerID, sum);
          }
        });

        resolve();

      });

    },

    endGameControl: function({state}){

      return new Promise((resolve, reject) => {
        let lastPlayer = state.players.amount-1;
        state.scoreCard.forEach((score)=>{

          if(score.playerScore[lastPlayer] === -1){
            reject();
          }
        });

        resolve();
      });
    },

  }
})
