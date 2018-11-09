
function goback() {
    window.history.back()
}

let AutomaPlayers = ["Blue","Orange","White","Yellow","Black","Brown","Red"];
let Players = [];
let Buildings = [];
let Cards = [];
let PlayerCards1 = [];
let PlayerCards2 = [];
let PlayerCards3 = [];
let PlayerBuildings1 = [];
let PlayerBuildings2 = [];
let PlayerBuildings3 = [];
var PlayerNumber;
var PlayerColor;
var DifficultyLevel;
var TurnCounter = [];
var CreateGameVar = 1;
let Cards1 = [];
let Cards2 = [];
let Cards3 = [];

function CreateGame(){

  Players = [];
  PlayerNumber = document.getElementById("PlayerSelection").value;
  PlayerColor = document.getElementById("PlayerColor").value;
  DifficultyLevel = document.getElementById("Difficulty").value;

//resetting the players on the playertable
console.log(AutomaPlayers);
for (i=1;i<=4;i++){
  name = "Player "+ i;
  document.getElementById(name).innerHTML = "";
  }

//Setting up difficulty and arrays
//Easy: No Card #2 and Automa starts with 0 VP.
  if (DifficultyLevel == "Automalein - Easy"){
    PlayerCards1 = [1,4,5,7,13];
    PlayerCards2 = [1,4,5,7,13];
    PlayerCards3 = [1,4,5,7,13];
    Cards1 = [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards2 = [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards3 = [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    for (i=0;i<PlayerCards1.length;i++){
      for (j=0;j<Cards1.length;j++){
        if(PlayerCards1[i] == Cards1[j]){
        Cards1.splice(j,1);
        Cards2.splice(j,1);
        Cards3.splice(j,1);
      }
    }
  }
  }
//Normal: All 6 cards and 10 VP.
  if (DifficultyLevel == "Automa - Normal"){
    PlayerCards1 = [1,2,4,5,7,13];
    PlayerCards2 = [1,2,4,5,7,13];
    PlayerCards3 = [1,2,4,5,7,13];
    Cards1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    for (i=0;i<PlayerCards1.length;i++){
      for (j=0;j<Cards1.length;j++){
        if(PlayerCards1[i] == Cards1[j]){
        Cards1.splice(j,1);
        Cards2.splice(j,1);
        Cards3.splice(j,1);
      }
    }
  }
  }
//All 6 cards plus card # 9 to initial deck.
  if (DifficultyLevel == "Automachtig - Hard"){
    PlayerCards4 = [1,2,4,5,7,9,13];
    PlayerCards2 = [1,2,4,5,7,9,13];
    PlayerCards3 = [1,2,4,5,7,9,13];
    Cards4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    for (i=0;i<PlayerCards4.length;i++){
      for (j=0;j<Cards4.length;j++){
        if(PlayerCards4[i] == Cards4[j]){
        Cards4.splice(j,1);
        Cards2.splice(j,1);
        Cards3.splice(j,1);
      }
    }
  }
  }
//All 6 cards plus card # 9 & 15 to initial deck.
  if (DifficultyLevel == "Ultoma - Very Hard"){
    PlayerCards4 = [1,2,4,5,7,9,13,15];
    PlayerCards2 = [1,2,4,5,7,9,13,15];
    PlayerCards3 = [1,2,4,5,7,9,13,15];
    Cards4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    for (i=0;i<PlayerCards4.length;i++){
      for (j=0;j<Cards4.length;j++){
        if(PlayerCards4[i] == Cards4[j]){
        Cards4.splice(j,1);
        Cards2.splice(j,1);
        Cards3.splice(j,1);
      }
    }
  }
  }
//All 6 cards plus card # 9 & 15 to initial deck.
  if (DifficultyLevel == "Alptrauma - Extreme"){
    Cards4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    Cards3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    for (i=0;i<PlayerCards4.length;i++){
      for (j=0;j<Cards4.length;j++){
        if(PlayerCards4[i] == Cards4[j]){
        Cards4.splice(j,1);
        Cards2.splice(j,1);
        Cards3.splice(j,1);
      }
    }
  }
  }

  console.log("Cards",PlayerCards1,Cards1);

// DELETES the Player chosen from the array
   for (var i = 0; i <= AutomaPlayers.length-1; i++){
      if (AutomaPlayers[i] == PlayerColor) {
        AutomaPlayers.splice (i,1)
      }
    }

      console.log("A",AutomaPlayers, PlayerColor);

//Adds the Color Chosen by the player
      Players.push(PlayerColor);

var counter = 0;

//This section verifies whether the player has checked any Automas boxes and if
// he or she checked enough of them, none of them, fewer or if the random box
//is selected.

  if(document.getElementById("Automa8").checked){
  counter = 1;
  for (i=1;i<=7;i++){
    if(document.getElementById("Automa"+i).checked){
      counter = counter + 1
    }

  }
}

  if(counter > 1){
      window.alert("You cannot select 'Random' and 'colors' at the same time");
      document.location.reload(true);
  }

  //Just checked for random and colors checkbox checked

  counter = 0;
  if(document.getElementById("Automa8").checked == false){
  for (i=1;i<=7;i++){
      if(document.getElementById("Automa"+i).checked){
      counter = counter + 1;
  }
  }
//more automas selected
    if(counter > PlayerNumber){
      window.alert("You've selected more Automas than you are allowed to");
      document.location.reload(true);
      return;

    }
//not enough selected
    if(counter < PlayerNumber || counter == 0){
      window.alert("You have to select more Automas");
      document.location.reload(true);
      return;

    }

//Reads the input for Automa PlayerSelection
  for (i=1;i<=8;i++){
    console.log("Automa" + i);
    if(document.getElementById("Automa"+i).checked &&  document.getElementById("Automa"+i).value == PlayerColor){
      window.alert("Please do not select the same color for the Player and Automas");
      document.location.reload(true);
      return;
    }
    if(document.getElementById("Automa"+i).checked){
      Players.push(document.getElementById("Automa"+i).value);
    }
  }
}
console.log(AutomaPlayers,Players,DifficultyLevel);

//If the random was checked and we verified no other was checked as well, then
//we will randomize the Automa Players based on the list of Automas available
//and the number of players.
if(document.getElementById("Automa8").checked){
  for (let i = 1; i <= PlayerNumber; i++){
      size = AutomaPlayers.length;
      num = Math.floor(Math.random()*size);
      Players.push(AutomaPlayers[num])
      AutomaPlayers.splice(num,1)

    }
}
//console.log("P",Players);


//All Players have been chosen, sets a new array for the turn order.
let TurnOrder = Players.slice();
console.log("P",Players);

//This throws back onto the html table header the colors of the players
  for (i=1;i<=Players.length;i++){
    name = "Player "+ i;
    document.getElementById(name).innerHTML = "<span class=" + Players[i-1] + "Player>" + Players[i-1] + "</span>";
    }

    document.getElementById("playertable").style.borderStyle = "solid";
    document.getElementById("playertable").style.borderSize = "1px";
    document.getElementById("playertable").style.borderColor = "Black";

    for (i=1;i<=Players.length;i++){
    document.getElementById("P" + i + " ROW").style.width = "1200px";
    document.getElementById("P" + i + " ROW").style.height = "300px";
    }

//Thid part throws back the selected difficulty and number of players.
document.getElementById("ChosenDifficulty").innerHTML = DifficultyLevel;
document.getElementById("NumberofPlayers").innerHTML = Players.length;
document.getElementById("P1_Move").innerHTML = "Your Turn";

//This part is creating the Automa decks. Each difficulty has its o
    numero = Math.floor(Math.random()*Cards1.length);
    PlayerCards4.push(Cards1[numero]);
    Cards4.splice(numero,1);
    numero = Math.floor(Math.random()*Cards2.length);
    PlayerCards2.push(Cards2[numero]);
    Cards2.splice(numero,1);
    numero = Math.floor(Math.random()*Cards3.length);
    PlayerCards3.push(Cards3[numero]);
    Cards3.splice(numero,1);

  console.log("AQUI@",PlayerCards1,Cards1,PlayerCards2,Cards2,PlayerCards3,Cards3);

      TurnCounter = [0];
      AutomaPlayers = ResetDecks();
      let Player1 = Players[0];
      let Player2 = Players[1];
      let Player3;
      let Player4;
      if (Players.length == 3) Player3 = Players[2];
      if (Players.length == 4) Player4 = Players[3];
      console.log(Players.length,Player1,Player2, Player3,Player4);
}


var valor;
let array = [];
var side;

function ReadCardNumber(Number){
    switch (Number) {
      case 1:
        valor = "<img src=GaiaProject/Gaia_1.jpg>";
        pass = true;
        break;
      case 2:
        valor = "<img src=GaiaProject/Gaia_2.jpg>";
        pass = true;
        break;
      case 3:
        valor = "<img src=GaiaProject/Gaia_3.jpg>";
        pass = true;
        break;
      case 4:
        valor = "<img src=GaiaProject/Gaia_4.jpg>";
        pass = false;
        break;
      case 5:
        valor = "<img src=GaiaProject/Gaia_5.jpg>";
        pass = true;
        break;
      case 6:
        valor = "<img src=GaiaProject/Gaia_6.jpg>";
        pass = false;
        break;
      case 7:
        valor = "<img src=GaiaProject/Gaia_7.jpg>";
        pass = false;
        break;
      case 8:
        valor = "<img src=GaiaProject/Gaia_8.jpg>";
        pass = true;
        break;
      case 9:
        valor = "<img src=GaiaProject/Gaia_9.jpg>";
        pass = false;
        break;
      case 10:
        valor = "<img src=GaiaProject/Gaia_10.jpg>";
        pass = true;
        break;
      case 11:
        valor = "<img src=GaiaProject/Gaia_11.jpg>";
        pass = false;
        break;
      case 12:
        valor = "<img src=GaiaProject/Gaia_12.jpg>";
        pass = true;
        break;
      case 13:
        valor = "<img src=GaiaProject/Gaia_13.jpg>";
        pass = false;
        break;
      case 14:
        valor = "<img src=GaiaProject/Gaia_14.jpg>";
        pass = false;
        break;
      case 15:
        valor = "<img src=GaiaProject/Gaia_15.jpg>";
        pass = false;
        break;
      case 16:
        valor = "<img src=GaiaProject/Gaia_16.jpg>";
        pass = true;
        break;
      case 17:
        valor = "<img src=GaiaProject/Gaia_17.jpg>";
        pass = false;
        break;
       }
return array = [valor,pass];
}

let turno = 0;
let newTurn = true;

function NextPlayer(){
  TotalPlayers = Players.length;
  PlayerOrder = Players.slice(0);

  //Create Variables for each players

    if (TurnCounter[TurnCounter.length-1] == 0){
      document.getElementById("P1_Move").innerHTML = "";
      TurnCounter.push(2)
    }
  turno = TurnCounter[TurnCounter.length-1];

  if (newTurn == true) { //copying the card arrays before starting the new turn.
    PlayerCardsCopy2 = PlayerCards2.slice(0);
    PlayerCardsCopy3 = PlayerCards3.slice(0);
    PlayerCardsCopy4 = PlayerCards4.slice(0);
  }

  console.log(PlayerCardsCopy2,PlayerCards2);
  switch (TotalPlayers) {
    case 2:

        if(TurnCounter[TurnCounter.length-1] == 1) {
          TurnCounter.push(2);
          document.getElementById("P1_Move").innerHTML = "Your Turn";
          document.getElementById("P2_Move").innerHTML = "";
        } //END IF
        else{
          TurnCounter.push(1);
          document.getElementById("P1_Move").innerHTML = "";
          document.getElementById("P2 Card 1").innerHTML = "";
          document.getElementById("P2 Card 2").innerHTML = "";
          if (TurnCounter.length == 3){
              PreviousNumber = Math.floor(Math.random()*PlayerCards2.length)
          }
          PlayerCards2.splice(PreviousNumber,1);
          document.getElementById("P2_Move").innerHTML = "P2 Move";
          document.getElementById("P2 Card 1").innerHTML = ReadCardNumber(PreviousNumber)[0];
          NewNumber = Math.floor(Math.random()*PlayerCards2.length)
          document.getElementById("P2 Card 2").innerHTML = ReadCardNumber(NewNumber);
          console.log(PreviousNumber,NewNumber);
          PreviousNumber = NewNumber;
          console.log(PlayerCards2 ,TurnCounter, PreviousNumber, NewNumber);
        } //end ELSE
        console.log(TurnCounter, PreviousNumber, NewNumber);

        if (newTurn == false && PlayerOrder.length == 0) {
          newTurn = true;


        }

      break;
    case 3:

      break;
    case 4:

      break;

  } //End switch

//console.log(Player1,Player4);



//      document.getElementById("P1 Move").innerHTML = "Your Turn";
//      document.getElementById("P2 Move").innerHTML = "";


  //debugger
//  document.getElementById("Move Description P2").innerHTML = ""
//  document.getElementById("Move Description P3").innerHTML = ""
//  document.getElementById("Move Description P4").innerHTML = ""

//   if (TotalPlayers == 2){
//     if (turno == 2) {
//       TurnCounter.push(1);
//       //console.log(PlayerCards1);
//       Card = Math.floor(Math.random()*PlayerCards1.length);
//       document.getElementById("Move Description P2").innerHTML = ReadCardNumber(PlayerCards1[Card]);
//       //console.log(PlayerCards1[Card],ReadCardNumber(PlayerCards1[Card]));
//       PlayerCards1.splice(Card,1);
//         if (PlayerCards1 == 0 || PlayerCards1.length == "undefined"){
//           PlayerCards1 = ResetDecks();
//         }
//       }
//     if (turno == 1) {
//
//       TurnCounter.push(2);
//     }
//
// }
//
//
// if (TotalPlayers == 3){
//       if (turno == 2) {
//         TurnCounter.push(3);
//         //console.log(PlayerCards1);
//         Card = Math.floor(Math.random()*PlayerCards1.length);
//         document.getElementById("Move Description P2").innerHTML = ReadCardNumber(PlayerCards1[Card]);
//         //console.log(PlayerCards1[Card],ReadCardNumber(PlayerCards1[Card]));
//         PlayerCards1.splice(Card,1);
//           if (PlayerCards1 == 0 || PlayerCards1.length == "undefined"){
//             PlayerCards1 = ResetDecks();
//           }
//         }
//
//     if (turno == 3) {
//         TurnCounter.push(1);
//         //console.log(PlayerCards2);
//         Card = Math.floor(Math.random()*PlayerCards2.length);
//         document.getElementById("Move Description P3").innerHTML = ReadCardNumber(PlayerCards2[Card]);
//         //console.log(PlayerCards2[Card],ReadCardNumber(PlayerCards2[Card]));
//         PlayerCards2.splice(Card,1);
//           if (PlayerCards2 == 0 || PlayerCards2.length == "undefined"){
//             PlayerCards2 = ResetDecks();
//           }
//         }
//      if (turno == 1) {
//           TurnCounter.push(2);
//         }
//
//   }
//
//  if (TotalPlayers == 4) {
//
//     if (turno == 2) {
//       TurnCounter.push(3);
//       //console.log(PlayerCards1);
//       Card = Math.floor(Math.random()*PlayerCards1.length);
//       document.getElementById("Move Description P2").innerHTML = ReadCardNumber(PlayerCards1[Card]);
//       //console.log(PlayerCards1[Card],ReadCardNumber(PlayerCards1[Card]));
//       PlayerCards1.splice(Card,1);
//         if (PlayerCards1 == 0 || PlayerCards1.length == "undefined"){
//           PlayerCards1 = ResetDecks();
//         }
//       }
//
//   if (turno == 3) {
//       TurnCounter.push(4);
//       //console.log(PlayerCards2);
//       Card = Math.floor(Math.random()*PlayerCards2.length);
//       document.getElementById("Move Description P3").innerHTML = ReadCardNumber(PlayerCards2[Card]);
//       //console.log(PlayerCards2[Card],ReadCardNumber(PlayerCards2[Card]));
//       PlayerCards2.splice(Card,1);
//         if (PlayerCards2 == 0 || PlayerCards2.length == "undefined"){
//           PlayerCards2 = ResetDecks();
//         }
//       }
//
//   if (turno == 4) {
//     TurnCounter.push(1);
//     //console.log(PlayerCards3);
//     Card = Math.floor(Math.random()*PlayerCards3.length);
//     document.getElementById("Move Description P4").innerHTML = ReadCardNumber(PlayerCards3[Card]);
//     //console.log(PlayerCards3[Card],ReadCardNumber(PlayerCards3[Card]));
//     PlayerCards3.splice(Card,1);
//       if (PlayerCards3 == 0 || PlayerCards3.length == "undefined"){
//         PlayerCards3 = ResetDecks();
//       }
//     }
//     if (turno == 1) {
//       TurnCounter.push(2);
//     }
//
//   }


    //PlayerCards.splice(Card,1);
    //document.getElementById("Player 1 Move").innerHTML = "";

  console.log('Players:', TotalPlayers,'Turno:',turno,TurnCounter);
  //console.log(TurnCounter, TurnCounter[TurnCounter.length-1]);

}

//Resets the Automa card deck
function ResetDecks(){
  if (DifficultyLevel == "Easy"){
    NewCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  }

  if (DifficultyLevel == "Normal"){
    NewCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  }

  if (DifficultyLevel == "Hard"){
    NewCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  }

  if (AutomaPlayers.length != 7){
    NewCards = ["Blue","Orange","White","Yellow","Black","Brown","Red"]

  }

  return NewCards;
}

function Calculate() {
      for (i=1;i<=Players.length;i++) {
          v1 = Number(document.getElementById('P'+i+'CoinScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'BldgScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'DelivScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'TSScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'HazScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'CattleScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'ObjScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'MTScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'WorkerScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'BoardScore').value);
          v1 = v1 + Number(document.getElementById('P'+i+'MktScore').value);
          document.getElementById("Total P"+ i).innerHTML = v1;
      }
}

function CleanFields(){
  for (i=1;i<=Players.length;i++) {
      document.getElementById('P'+i+'CoinScore').value = "";
      document.getElementById('P'+i+'BldgScore').value = "";
      document.getElementById('P'+i+'DelivScore').value = "";
      document.getElementById('P'+i+'TSScore').value = "";
      document.getElementById('P'+i+'HazScore').value = "";
      document.getElementById('P'+i+'CattleScore').value = "";
      document.getElementById('P'+i+'ObjScore').value = "";
      document.getElementById('P'+i+'MTScore').value = "";
      document.getElementById('P'+i+'WorkerScore').value = "";
      document.getElementById('P'+i+'BoardScore').value = "";
      document.getElementById('P'+i+'MktScore').value = "";
      document.getElementById("Total P"+ i).innerHTML = "";
    }

}
