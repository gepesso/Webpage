
function goback() {
    window.history.back()
}

function AboutMe(){
    window.location.href="GWT.html"
}

let AutomaPlayers = ["Blue","Green","White","Yellow","Black"];
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
var BuildingSides;
var DifficultyLevel;
var TurnCounter = [];

function CreateGame(){
  Players = [];
  AutomaPlayers = ["Blue","Green","White","Yellow","Black"];
  PlayerNumber = document.getElementById("PlayerSelection").value;
  PlayerColor = document.getElementById("PlayerColor").value;
  BuildingSides = document.getElementById("Building").value;
  DifficultyLevel = document.getElementById("Difficulty").value;

//resetting the players on the playertable

for (i=1;i<=4;i++){
  name = "Player "+ i;
  document.getElementById(name).innerHTML = "";
  }

//Setting up difficulty and arrays
  if (DifficultyLevel == "Easy"){
    Buildings = [1,2,3,4,5];
    Cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    FirstDelivery = "Wichita";
  }

  if (DifficultyLevel == "Normal"){
    Buildings = [1,2,3,4,5,6,7,8,9,10];
    Cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    FirstDelivery = "Colorado Springs";
  }

  if (DifficultyLevel == "Hard"){
    Buildings = [6,7,8,9,10];
    Cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    FirstDelivery = "Santa Fe";
  }


// DELETES the Player chosen from the array
   for (var i = 0; i < 4; i++){
      if (AutomaPlayers[i] == PlayerColor) {
        AutomaPlayers.splice (i,1)
      }
    }

//Adds the Color Chosen by the player
      Players.push(PlayerColor);

//Randomly chooses other players based on # of Automas
  for (let i = 1; i <= PlayerNumber; i++){
      size = AutomaPlayers.length;
      num = Math.floor(Math.random()*size);
      Players.push(AutomaPlayers[num])
      AutomaPlayers.splice(num,1)
  }
//All Players have been chosen
  //console.log(Players, AutomaPlayers);
  for (i=1;i<=Players.length;i++){
    name = "Player "+ i;
    document.getElementById(name).innerHTML = Players[i-1];
    }

document.getElementById("ChosenDifficulty").innerHTML = DifficultyLevel;
document.getElementById("NumberofPlayers").innerHTML = Players.length;
document.getElementById("BuildingSides").innerHTML = BuildingSides;
document.getElementById("Player 1 Move").innerHTML = "Your Turn";

      PlayerCards1 = Cards;
      PlayerCards2 = Cards;
      PlayerCards3 = Cards;
      PlayerBuildings1 = Buildings;
      PlayerBuildings2 = Buildings;
      PlayerBuildings3 = Buildings;
      TurnCounter = [0];

}


var valor;
var side;

function ReadCardNumber(Number){
    switch (Number) {
      case 1:
        valor = "Move Forward 1<br/>Move Train up to 3 Spaces forward<br/> \
        If Brisco’s train is ahead of your train when reaching a \
        station, stop, place a disk in the station, and gain the tile if possible<br/>";
        break;
      case 2:
        valor = "Move Forward 1<br/>Move Train up to 3 Spaces forward<br/> \
        If Brisco’s train is ahead of your train when reaching a \
        station, stop, place a disk in the station, and gain the tile if possible<br/>";
        break;
      case 3:
        valor = "Move Forward 1<br/>Take the <b>least</b> expensive worker<br/> \
        If there are multiple to choose from, choose the top, left least expensive worker<br/>";
        break;
      case 4:
        valor = "Move Forward 1<br/>Take the cattle card worth the <b>highest</b> amount of victory points<br/>";
        break;
      case 5:
        valor = "Move Forward 1<br/>Take the cattle card worth the <b>lowest</b> amount of victory points<br/>";
        break;
      case 6:
        valor = "Move Forward 1<br/>Take the <b>least</b> expensive worker<br/> \
        If there are multiple to choose from, choose the top, left least expensive worker<br/>";
        break;
      case 7:
        valor = "Move Forward 1<br/>Take the teepee tile with the <b>highest</b> dollar value<br/>";
        break;
      case 8:
        valor = "Move Forward 1<br/>Take the hazard tile with the <b>highest</b> amount of victory points<br/>";
        break;
      case 9:
        BuildingNumber = BuildingNumberDraw(turno);
        console.log(BuildingNumber);
        valor = "Move Forward 1<br/>Place the building #%s from Brisco's bag of buildings\
        and place it on <b>Side %b</b> in the next space in front of you on the trail";
          if (BuildingSides == "Both"){
            side = Math.floor(Math.random()*1);
            if (side == 0) BuildingSides = "A";
            if (side == 1) BuildingSides = "B";
            valor = valor.replace("%b",BuildingSides);
          }
          else {
            valor = valor.replace("%b",BuildingSides);
          }
        valor = valor.replace("%s",BuildingNumber);
        console.log(side);
        break;
      case 10:
        valor = "Move Forward based on current speed<br/>3, 4 or 5 spaces";
        break;
      case 11:
        valor = "Move Forward based on current speed<br/>3, 4 or 5 spaces";
        break;
      case 12:
        valor = "Move Forward 1<br/>Take an objective card that is worth the <b>highest</b> \
        amount of victory points";
        break;
      case 13:
        valor = "Move Forward 1";
        break;
      case 14:
        valor = "Move Forward 1";
        break;
      case 15:
        valor = "Move Forward 1";
        break;
      case 16:
        valor = "Move Forward 1";
        break;
      default:
    }

return valor;
}

var building;

function BuildingNumberDraw(turno) {

    switch (turno) {
      case 2:
          numba = Math.floor(Math.random()*PlayerBuildings1.length);
          building = PlayerBuildings1[numba];
          PlayerBuildings1.splice(numba,1);
      break;
      case 3:
          numba = Math.floor(Math.random()*PlayerBuildings2.length);
          building = PlayerBuildings2[numba];
          PlayerBuildings2.splice(numba,1);
      break;
      case 4:
          numba = Math.floor(Math.random()*PlayerBuildings3.length);
          building = PlayerBuildings3[numba];
          PlayerBuildings3.splice(numba,1);
      break;
    }
    console.log(turno,numba,building);
    //debugger

    return building;
}

let turno = 0;

function NextPlayer(){
  TotalPlayers = Players.length;
    //console.log(TurnCounter);
    if (TurnCounter[TurnCounter.length-1] == 0){
      document.getElementById("Player 1 Move").innerHTML = "";
      TurnCounter.push(2)
    }
  turno = TurnCounter[TurnCounter.length-1];

  switch (turno) {
    case 1:
      document.getElementById("Player 1 Move").innerHTML = "Your Turn";
      document.getElementById("Player 2 Move").innerHTML = "";
      document.getElementById("Player 3 Move").innerHTML = "";
      document.getElementById("Player 4 Move").innerHTML = "";
      break;
    case 2:
      document.getElementById("Player 2 Move").innerHTML = "P2 Turn";
      document.getElementById("Player 1 Move").innerHTML = "";
      document.getElementById("Player 3 Move").innerHTML = "";
      document.getElementById("Player 4 Move").innerHTML = "";
      break;
    case 3:
      document.getElementById("Player 3 Move").innerHTML = "P3 Turn";
      document.getElementById("Player 2 Move").innerHTML = "";
      document.getElementById("Player 1 Move").innerHTML = "";
      document.getElementById("Player 4 Move").innerHTML = "";
      break;
    case 4:
      document.getElementById("Player 4 Move").innerHTML = "P4 Turn";
      document.getElementById("Player 2 Move").innerHTML = "";
      document.getElementById("Player 3 Move").innerHTML = "";
      document.getElementById("Player 1 Move").innerHTML = "";
      break;

  }
  //debugger
  document.getElementById("Move Description P2").innerHTML = ""
  document.getElementById("Move Description P3").innerHTML = ""
  document.getElementById("Move Description P4").innerHTML = ""

  if (TotalPlayers == 2){
    if (turno == 2) {
      TurnCounter.push(1);
      //console.log(PlayerCards1);
      Card = Math.floor(Math.random()*PlayerCards1.length);
      document.getElementById("Move Description P2").innerHTML = ReadCardNumber(PlayerCards1[Card]);
      //console.log(PlayerCards1[Card],ReadCardNumber(PlayerCards1[Card]));
      PlayerCards1.splice(Card,1);
        if (PlayerCards1 == 0 || PlayerCards1.length == "undefined"){
          PlayerCards1 = ResetDecks();
        }
      }
    if (turno == 1) {

      TurnCounter.push(2);
    }

}


if (TotalPlayers == 3){
      if (turno == 2) {
        TurnCounter.push(3);
        //console.log(PlayerCards1);
        Card = Math.floor(Math.random()*PlayerCards1.length);
        document.getElementById("Move Description P2").innerHTML = ReadCardNumber(PlayerCards1[Card]);
        //console.log(PlayerCards1[Card],ReadCardNumber(PlayerCards1[Card]));
        PlayerCards1.splice(Card,1);
          if (PlayerCards1 == 0 || PlayerCards1.length == "undefined"){
            PlayerCards1 = ResetDecks();
          }
        }

    if (turno == 3) {
        TurnCounter.push(1);
        //console.log(PlayerCards2);
        Card = Math.floor(Math.random()*PlayerCards2.length);
        document.getElementById("Move Description P3").innerHTML = ReadCardNumber(PlayerCards2[Card]);
        //console.log(PlayerCards2[Card],ReadCardNumber(PlayerCards2[Card]));
        PlayerCards2.splice(Card,1);
          if (PlayerCards2 == 0 || PlayerCards2.length == "undefined"){
            PlayerCards2 = ResetDecks();
          }
        }
     if (turno == 1) {
          TurnCounter.push(2);
        }

  }

 if (TotalPlayers == 4) {

    if (turno == 2) {
      TurnCounter.push(3);
      //console.log(PlayerCards1);
      Card = Math.floor(Math.random()*PlayerCards1.length);
      document.getElementById("Move Description P2").innerHTML = ReadCardNumber(PlayerCards1[Card]);
      //console.log(PlayerCards1[Card],ReadCardNumber(PlayerCards1[Card]));
      PlayerCards1.splice(Card,1);
        if (PlayerCards1 == 0 || PlayerCards1.length == "undefined"){
          PlayerCards1 = ResetDecks();
        }
      }

  if (turno == 3) {
      TurnCounter.push(4);
      //console.log(PlayerCards2);
      Card = Math.floor(Math.random()*PlayerCards2.length);
      document.getElementById("Move Description P3").innerHTML = ReadCardNumber(PlayerCards2[Card]);
      //console.log(PlayerCards2[Card],ReadCardNumber(PlayerCards2[Card]));
      PlayerCards2.splice(Card,1);
        if (PlayerCards2 == 0 || PlayerCards2.length == "undefined"){
          PlayerCards2 = ResetDecks();
        }
      }

  if (turno == 4) {
    TurnCounter.push(1);
    //console.log(PlayerCards3);
    Card = Math.floor(Math.random()*PlayerCards3.length);
    document.getElementById("Move Description P4").innerHTML = ReadCardNumber(PlayerCards3[Card]);
    //console.log(PlayerCards3[Card],ReadCardNumber(PlayerCards3[Card]));
    PlayerCards3.splice(Card,1);
      if (PlayerCards3 == 0 || PlayerCards3.length == "undefined"){
        PlayerCards3 = ResetDecks();
      }
    }
    if (turno == 1) {
      TurnCounter.push(2);
    }

  }


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
  return NewCards;
}

function Score() {
  if (turno == 0) return;
          for (i=1;i<=Players.length;i++) {
            document.getElementById("Player "+ i +" Score").innerHTML = "Player "+i;
            document.getElementById("Player "+ i +" Coin").innerHTML =  '<input id="P'+i+'CoinScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("Bldg P"+ i).innerHTML = '<input id="P'+i+'BldgScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("Delivery P"+ i).innerHTML = '<input id="P'+i+'DelivScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("TrainStation P"+ i).innerHTML = '<input id="P'+i+'TSScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("Hazard P"+ i).innerHTML = '<input id="P'+i+'HazScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("Cattle P"+ i).innerHTML = '<input id="P'+i+'CattleScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("Objectives P"+ i).innerHTML = '<input id="P'+i+'ObjScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("MasterTiles P"+ i).innerHTML = '<input id="P'+i+'MTScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("Worker P"+ i).innerHTML = '<input id="P'+i+'WorkerScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("Board P"+ i).innerHTML = '<input id="P'+i+'BoardScore" size="5" text-align="center">  &nbsp;';
            document.getElementById("Market P"+ i).innerHTML = '<input id="P'+i+'MktScore" size="5" text-align="center">  &nbsp;';
            //document.getElementById("Total P"+ i).innerHTML = '<input id="P'+i+'TotalScore" size="5" text-align="center">  &nbsp;';
          }

      document.getElementById("Coin Score").innerHTML = "<img src=GWT/coin.jpg>"
      document.getElementById("Bldg Score").innerHTML = "<img src=GWT/bldg.jpg>"
      document.getElementById("Delivery Score").innerHTML = "<img src=GWT/delivery.jpg>"
      document.getElementById("TrainStation Score").innerHTML = "<img src=GWT/station.jpg>"
      document.getElementById("Hazard Score").innerHTML = "<img src=GWT/Hazard.jpg>"
      document.getElementById("Cattle Score").innerHTML = "<img src=GWT/Cattle.jpg>"
      document.getElementById("Objectives Score").innerHTML = "<img src=GWT/Obj.jpg>"
      document.getElementById("MasterTiles Score").innerHTML = "<img src=GWT/MasterTile.jpg>"
      document.getElementById("Worker Score").innerHTML = "<img src=GWT/worker.jpg>"
      document.getElementById("Board Score").innerHTML = "<img src=GWT/3point.jpg>"
      document.getElementById("Market Score").innerHTML = "<img src=GWT/2point.jpg>"
      document.getElementById("Total Score").innerHTML = "<b>Total Score</b>"
      document.getElementById("FinalButton").innerHTML = '<button type="button" name="Calculate" onclick="Calculate()">Calculate</button>&nbsp';
      document.getElementById("CleanButton").innerHTML = '<button type="button" name="CleanFields" onclick="CleanFields()">Clean Fields</button>';

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
