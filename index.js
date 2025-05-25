let imgValue;
let botParse;

document.getElementById("gunting").onclick = function () {
  bot();
  if (botParse == "gunting") {
    window.alert(``);
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
