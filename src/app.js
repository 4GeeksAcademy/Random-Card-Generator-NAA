import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  //write your code here
    // setInterval(() => {
    const generateCard = () => {
    const card = document.querySelector('.card');
    card.className = 'card'; // Reset class to remove previous suit
    const suit = generateRandomSuit();
    const number = generateRandomNumber();
    card.classList.add(suit);
    card.innerHTML = number;
  // }, 10000); // every 10 seconds
  };


let generateRandomNumber = () => {
   let numbers =  ["A" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"10" ,"J" ,"Q" ,"K"];
   let indexNumbers = Math.floor(Math.random() * numbers.length);
   return numbers[indexNumbers];

};

let generateRandomSuit = () => {
   let suit = ["diamond" ,"heart" ,"spade" ,"club" ];
   let indexSuit = Math.floor(Math.random() * suit.length);
   return suit [indexSuit];
};

window.onload = () => {
  generateCard(); // generate one on load

  const button = document.getElementById("generateCardBtn");
  button.addEventListener("click", generateCard);
};