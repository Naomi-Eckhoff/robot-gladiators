var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple valuse at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  enemyHealth -= playerAttack;

  console.log(
    playerName + " attacked " + enemyName + ". "
    + enemyName + " now has " + enemyHealth + " health remaining."
  );

  playerHealth -= enemyAttack;

  console.log(
    enemyName + " attacked " + playerName + ". "
    + playerName + " now has " + playerHealth + " health remaining."
  );
};

fight();
