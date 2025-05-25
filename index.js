let imgValue;
let botParse;

document.getElementById("gunting").onclick = function () {
  document.getElementById("loader").style.display = "block";
  document.getElementById("loading").style.display = "block";
  document.getElementById("loading").textContent = "Loading...";
  setTimeout(function () {
    document.getElementById("loading").textContent = "Data Loaded";
    document.getElementById("loader").style.display = "none";
  }, 1600);
  setTimeout(function () {
    bot();
    if (botParse == "gunting") {
      window.alert(`You tie!, You choose Scissors and bot choose Scissors`);
    } else if (botParse == "batu") {
      window.alert(`You lose!, You choose Scissors and bot choose Rock`);
    } else {
      window.alert(`You win!, You choose Scissors and bot choose Paper`);
    }
    document.getElementById("loading").style.display = "none";
  }, 2000);
};

document.getElementById("batu").onclick = function () {
  document.getElementById("loader").style.display = "block";
  document.getElementById("loading").style.display = "block";
  document.getElementById("loading").textContent = "Loading...";
  setTimeout(function () {
    document.getElementById("loading").textContent = "Data Loaded";
    document.getElementById("loader").style.display = "none";
  }, 1600);
  setTimeout(function () {
    bot();
    if (botParse == "gunting") {
      window.alert(`You win!, You choose Rock and bot choose Scissors`);
    } else if (botParse == "batu") {
      window.alert(`You Tie!, You choose Rock and bot choose Rock`);
    } else {
      window.alert(`You lose!, You choose Rock and bot choose Paper`);
    }
    document.getElementById("loading").style.display = "none";
  }, 2000);
};

document.getElementById("kertas").onclick = function () {
  document.getElementById("loader").style.display = "block";
  document.getElementById("loading").style.display = "block";
  document.getElementById("loading").textContent = "Loading...";
  setTimeout(function () {
    document.getElementById("loading").textContent = "Data Loaded";
    document.getElementById("loader").style.display = "none";
  }, 1600);
  setTimeout(function () {
    bot();
    if (botParse == "gunting") {
      window.alert(`You lose!, You choose Paper and bot choose Scissors`);
    } else if (botParse == "batu") {
      window.alert(`You win!, You choose Paper and bot choose Rock`);
    } else {
      window.alert(`You tie!, You choose Paper and bot choose Paper`);
    }
    document.getElementById("loading").style.display = "none";
  }, 2000);
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
