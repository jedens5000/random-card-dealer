/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♠️", "♣️", "♦️", "♥️"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
var suit = suits[Math.floor(Math.random() * suits.length)];
var value = values[Math.floor(Math.random() * values.length)];
////////////////THIS WORKS ONLOAD START//////////////////////////////////////
////////////////THIS WORKS ONLOAD START//////////////////////////////////////
// window.onload = () => {
//   if (suit === "♦️" || suit === "♥️") {
//     document.querySelector("#suitTop").style.color = "red";
//     document.querySelector("#suitBottom").style.color = "red";
//     document.querySelector("#cardName").style.color = "red";
//   }
//   document.querySelector("#suitTop").innerHTML = suit;
//   document.querySelector("#suitBottom").innerHTML = suit;
//   document.querySelector("#cardName").innerHTML = value;
// };
////////////////END****THIS WORKS ONLOAD START////////////////////////////////////
////////////////END****THIS WORKS ONLOAD START////////////////////////////////////

// CLICK FUNCTION TEST

// document.getElementById("myBtn").addEventListener("click", clickFunction);

// function clickFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

window.clickFunction = () => {
  if (suit === "♦️" || suit === "♥️") {
    document.querySelector("#suitTop").style.color = "red";
    document.querySelector("#suitBottom").style.color = "red";
    document.querySelector("#cardName").style.color = "red";
  }
  document.querySelector("#suitTop").innerHTML = suit;
  document.querySelector("#suitBottom").innerHTML = suit;
  document.querySelector("#cardName").innerHTML = value;
};
