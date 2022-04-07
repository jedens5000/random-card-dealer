/* eslint-disable */
import "bootstrap";
import "./style.css";

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

function toggleImg() {
  var x = document.getElementById("ace");
  x.style.display === "flex"
    ? (x.style.display = "none")
    : (x.style.display = "none");
}

document.clickFunction = clickFunction => {
  var suit = suits[Math.floor(Math.random() * suits.length)];
  var value = values[Math.floor(Math.random() * values.length)];
  if (suit === "♦️" || suit === "♥️") {
    document.querySelector("#suitTop").style.color = "red";
    document.querySelector("#suitBottom").style.color = "red";
    document.querySelector("#cardName").style.color = "red";
  } else {
    document.querySelector("#suitTop").style.color = "black";
    document.querySelector("#suitBottom").style.color = "black";
    document.querySelector("#cardName").style.color = "black";
  }
  document.querySelector("#suitTop").innerHTML = suit;
  document.querySelector("#suitBottom").innerHTML = suit;
  document.querySelector("#cardName").innerHTML = value;
};

var btn = document.getElementById("myBtn");
btn.addEventListener("click", toggleImg);
