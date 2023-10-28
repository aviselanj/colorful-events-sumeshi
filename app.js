'use strict'

  
  
 
  // Handle Form Submission
 let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("validationServerUsername");
  

 if (username.value == "") {
    alert("Please ensure you input a value in all fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value}`
    );

    username.value = "";
   
  }
});


const greetingTimeout = setTimeout(greeting, 10000);


function greeting(){
  alert("Thank you for viewing Sumeshi! Don't forget to register for your 10% discount");
}
greetingTimeout;

//Countdown timer
//Set date for event
const nearYouDate = new Date("Nov 4, 2023 15:30:01").getTime();


let watch = setInterval(function(){
  // Get todays date
  const today = new Date().getTime();

// Find the distance between now and event
const timeDiff = nearYouDate - today;
//Time calculations
let days = Math.round(timeDiff/ (1000 * 60 * 60 * 24));
let hours = Math.round(timeDiff % (1000 * 60 *60 * 24)/(1000 *60 *60));
let minutes = Math.round(timeDiff % (1000 * 60 * 60) / (1000 * 60));
let seconds = Math.round(timeDiff % (1000 * 60) / 1000);



// Display result
document.getElementById("demo").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes and " + seconds + " seconds untill the festivities!";

// If the count down is finished, write some text
if (timeDiff < 0) {
  clearInterval(watch);
  document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);


function EventDetail(eventName, location, date) {
  this.eventName = eventName;
  this.location = location;
  this.date = date;
  //methods
  this.bio = function(){
    console.log(this.eventName + " will be held in " + this.location + " on " + this.date + " hurry and get your tickets before event ends!");
  }
}



function EventsMaster(){
  this.events = [];

  //methods
  this.add = function(newEvent){
    this.events.push(newEvent)
  }
  this.getBio = function(){
    this.events.forEach(
      function(x){
        x.bio();
      }
    )
  }
  
}
const eventsMaster = new EventsMaster();

const sushiRollEvent = eventsMaster.add(new EventDetail("Sushi Rolls", "New Orleans, La", "November 5, 2023"));
const pokeBowlEvent = eventsMaster.add(new EventDetail("Poke Bowls", "Atlanta, Ga", "December 15, 2023"));
const habachiGrillEvent = eventsMaster.add(new EventDetail("Habachi Grill", "Houston, Tx", "Januray 1, 2024"));

let eventArr = [
  sushiRollEvent,
  pokeBowlEvent,
  habachiGrillEvent
]

eventsMaster.getBio();

function search_eventl() { 
  let input = document.getElementById('search').value 
  input=input.toLowerCase(); 
    
  for (i = 0; i < eventArr.length; i++) {  
      if (!eventArr[i].toLowerCase().includes(input)) { 
          eventArr[i].style.display="none"; 
      } 
      else { 
          eventArr[i].style.display="list-item";                  
      } 
  } 
} 