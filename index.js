let imgValue;
let botParse;

document.getElementById("gunting").onclick = function () {
  bot();
  if (botParse == "gunting") {
    window.alert(`You tie!, You choose Scissors and bot choose Scissors`);
  } else if (botParse == "batu") {
    window.alert(`You lose!, You choose Scissors and bot choose Rock`);
  } else {
    window.alert(`You win!, You choose Scissors and bot choose Paper`);
  }
};

document.getElementById("gunting").onclick = function () {
  bot();
  if (botParse == "gunting") {
    window.alert(`You tie!, You choose Scissors and bot choose Scissors`);
  } else if (botParse == "batu") {
    window.alert(`You lose!, You choose Scissors and bot choose Rock`);
  } else {
    window.alert(`You win!, You choose Scissors and bot choose Paper`);
  }
};
  

function bot() {
  let botValue;
  botValue = Math.random();

  if (botValue < 0.3) {
    botParse = "gunting";
  } else if (botValue < 0.6) {
    botParse = "batu";
  } else {
    botParse = "kertas";
  }

  return botParse;
}
console.log();
