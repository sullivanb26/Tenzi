const num = prompt("Pick a i,ber 1-6:");
console.log("Your number is: " + num);
var diceRoll;
var score = 0;
for (diceNum = 1; diceNum < 11; diceNum++) {
    console.log("Dice Number " + diceNum);
    do{
        diceRoll = Math.floor(Math.random() * 5) + 1;
        console.log("   >You rolled a " + diceRoll);
        score += 1;
    } while (diceRoll != num);
}

console.log("Your score is " + score);
if (score>50){
    console.log("Too high!!!!");
}
else {
    console.log("YAY YAYAYAYAYAYAYYA YOU WINNN!!N!N!N!N!N!!!!!111!!!!!1!!11");
}