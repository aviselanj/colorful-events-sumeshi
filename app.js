'use strict'

const stopWatch = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"), 
};
 
const searchDropMenu = document.getElementById("search-dropdown");

function EventDetail(eventName, location, date) {
  this.eventName = eventName;
  this.location = location;
  this.eventDate = new Date(date).getTime();
  this.interval = null;
  this.days= 0;
  this.hours= 0;
  this.minutes = 0;
  this.seconds= 0;
  //methods
  this.bio = function(){
    console.log(this.eventName + " will be held in " + this.location + " on " + this.date + " hurry and get your tickets before event ends!");
  }
  this.start = function(){
    this.interval= setInterval(()=>{
      const now = new Date().getTime();
      const timeDiff = this.eventDate.getTime() - now;

      if(timeDiff <= 0){
        clearInterval(this.interval);
        alert("Event Expired");
      }else{
        this.days = Math.round(timeDiff / (1000 * 60 * 60 * 24));
        this.hours = Math.round(
          (timeDiff % (1000 * 60 *60 * 24)/(1000 *60 *60))
        );
        this.minutes = Math.round(
          (timeDiff % (1000 * 60 * 60) / (1000 * 60))
        );
        this.seconds = Math.round(
          (timeDiff % (1000 * 60) / 1000));
        this.milliseconds = timeDiff % 100;
        this.renderStopWatch();
      }
    }, 1000);
  };
  this.stop = function(){
    if(this.interval){
      clearInterval(this.interval);
    }
  };


const greetingTimeout = setTimeout(greeting, 50000);


function greeting(){
  alert("Thank you for viewing Sumeshi! Don't forget to register for your 10% discount");
}
greetingTimeout;

//Countdown timer
//Set date for event
const nearYouDate = new Date("Nov 4, 2023 15:30:01").getTime();


let watch = function setInterval (){
  // Get todays date
  const today = new Date().getTime();
}
// Find the distance between now and event
const timeDiff = nearYouDate - watch();
//Time calculations
let days = Math.round(timeDiff/ (1000 * 60 * 60 * 24));
let hours = Math.round(timeDiff % (1000 * 60 *60 * 24)/(1000 *60 *60));
let minutes = Math.round(timeDiff % (1000 * 60 * 60) / (1000 * 60));
let seconds = Math.round(timeDiff % (1000 * 60) / 1000);






  

this.renderSearchContent = function(){
  const searchList = document.createElement("li");
  const href = this.eventName.toLowerCase().replaceAll(" ", "-") + ".html";
  searchList.innerHTML = `<a class="dropdown-item" href="${href}">${this.eventName}</a>`
  searchDropMenu.appendChild(searchList);
}

  this.renderStopWatch = function(){
  stopWatch.days.textContent = this.days;
  stopWatch.hours.textContent = this.hours;
  stopWatch.minutes.textContent = this.minutes;
  stopWatch.seconds.textContent = this.seconds;
  };

  this.renderEventDetails = function (){
    const dateStr = this.date.toDateString();
    const timeStr = this.date.toLocaleTimeString();

    document.getElementById(date).textContent = dateStr;
    document.getElementById(time).textContent = timeStr;
  };
}


const sumeshiEvents = [
  // sushi event
  new EventDetail("Sushi Rolls", "New Orleans, La", "2023-11-05T14:00:00"),
  // poke bowl event
  new EventDetail("Poke Bowls", "Atlanta, Ga", "2023-12-15T13:15:00"),
  // habachi event
  new EventDetail("Habachi", "Houston, Tx", "2024-01-01T11:00:00")
]


function handleSearch(event){
  event.preventDefault();

  searchDropMenu.innerHTML = "";
  searchDropMenu.classList.add("show");
const filteredEvents = sumeshiEvents.filter((i)=>
  i.eventName.toLowerCase().includes(event.target.value.toLowerCase())
);
console.log(filteredEvents);
filteredEvents.forEach((i)=> i.renderSearchContent());
}
