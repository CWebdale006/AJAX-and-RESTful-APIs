/*  Exercise 01_11_01

    Whole Spectrum Energy Solutions
    Author: Connor J Webdale 
    Date: 9.12.19

    Filename: script.js
*/

"use strict";

// global letiables
let selectedCity = "Tucson, AZ";
let weatherReport;

let httpRequest = false; 

function getRequestObject() {
   try {
      httpRequest = new XMLHttpRequest(); 
   }
   catch (requestError) {
       document.querySelector("p.error").innerHTML = "Forecast not supported by your browser." ;
       document.querySelector("p.error").style.display = "block";
       return false;
   }
   return httpRequest;
}

function getWeather(evt) {
   let latitude;
   let longitude;
   if (evt.type !== "load") {
      if (evt.target) {
         selectedCity = evt.target.innerHTML;
      } else if (evt.srcElement) {
         selectedCity = evt.srcElement.innerHTML;
      }
   }
   if (selectedCity === "Tucson, AZ") {
      latitude = 37.7577;
      longitude = -122.4376;
   } else if (selectedCity === "Chicago, IL") {
      latitude = 41.8337329;
      longitude = -87.7321555;
   } else if (selectedCity === "Montreal, QC") {
      latitude = 45.5601062;
      longitude = -73.7120832;
   }

   if (!httpRequest) {
      httpRequest = getRequestObject();
   }

   httpRequest.abort();
   httpRequest.open("get", "solar.php?" + "lat=" + latitude + "&lng=" + longitude, true );
   httpRequest.send(null);
   httpRequest.onreadystatechange = fillWeather;
}

function fillWeather() {
   if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      weatherReport = JSON.parse(httpRequest.responseText);

      // variables to set up our table 
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let dateValue = new Date(weatherReport.daily.data[0].time);
      let dayOfWeek = dateValue.getDay(); 
      let rows = document.querySelectorAll("section.week table tbody tr");
      document.querySelector("section.week table caption").
      innerHTML = selectedCity;

      // populating the table rows 
      for (let i =0; i < rows.length; i++) {
         let firstCell = rows[i].getElementsByTagName("td")[0];
         let secondCell = rows[i].getElementsByTagName("td")[1];
         let thirdCell = rows[i].getElementsByTagName("td")[2];
         firstCell.innerHTML = days[dayOfWeek];

         // fixing the day of the week displayed 
         if (dayOfWeek + 1 ===7) {
            dayOfWeek = 0;
         } else {
            dayOfWeek++;
         }

         let sun = Math.round((1-weatherReport.daily.data[i].cloudCover) *100, 0)
         if (sun >90) {
            secondCell.style.color = "rgb(255,171,0)";
         } else if (sun >80 && sun <= 90) {
            secondCell.style.color = "rgb(255,179,25)";
         } else if (sun >70 && sun <=80) {
            secondCell.style.color = "rgb(255,188,51)";
         } else if (sun > 60 && sun <=70) {
            secondCell.style.color = "rgb(255,196,77)";
         } else if (sun > 50 && sun <=60) {
            secondCell.style.color = "rgb(255,205,102)";
         } else if (sun > 40 && sun <=50) {
            secondCell.style.color = "rgb(255,213,128)";
         } else if (sun > 30 && sun <=40) {
            secondCell.style.color = "rgb(255,221,153)";
         } else if (sun > 20 && sun <=30) {
            secondCell.style.color = "rgb(255,230,179)";
         } else if (sun > 10 && sun <=20) {
            secondCell.style.color = "rgb(255,238, 204)";
         } else if (sun <=10) {
            secondCell.style.color = "rgb(255, 247, 230";
         }
         secondCell.style.fontSize = "2.5em";
         thirdCell.innerHTML = sun + "%";

         // attribution for the Dark Sky API
         document.querySelector("section.week p.credit").style.display = "block";
      }
      

      // adding 7 sun symbols for a week 
      document.querySelector("section.week table caption").style.display = "block";
      document.querySelector("section.week table").style.display = "inline-block";
   }
}

let locations = document.querySelectorAll("section ul li");
for (let i = 0; i < locations.length; i++) {
   if (locations[i].addEventListener) {
      locations[i].addEventListener("click", getWeather, false);
   } else if (locations[i].attachEvent) {
      locations[i].attachEvent("onclick", getWeather);
   }
}
if (window.addEventListener) {
   window.addEventListener("load", getWeather, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", getWeather);
}