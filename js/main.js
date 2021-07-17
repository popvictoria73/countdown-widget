 // Decalre  time varaibles 
 const days = document.querySelector(".days");
 const hours = document.querySelector(".hours");
 const minutes = document.querySelector(".minutes");
 const seconds = document.querySelector(".seconds");

 const timeInterval = setInterval(function () {
   updateCounterTime();
   addTheZero();
 }, 1000);

 function updateCounterTime() {
   seconds.innerHTML = parseInt(seconds.innerHTML, 10) - 1;

   if (parseInt(seconds.innerHTML, 10) < 0) {
     seconds.innerHTML = "59";
     minutes.innerHTML = parseInt(minutes.innerHTML, 10) - 1;
   }

   if (parseInt(minutes.innerHTML, 10) < 0) {
     minutes.innerHTML = "59";
     hours.innerHTML = parseInt(hours.innerHTML, 10) - 1;
   }

   if (parseInt(hours.innerHTML, 10) < 0) {
     hours.innerHTML = "23";
     days.innerHTML = parseInt(days.innerHTML, 10) - 1;
   }

   if (
     parseInt(days.innerHTML, 10) == 0 &&
     parseInt(hours.innerHTML, 10) == 0 &&
     parseInt(minutes.innerHTML, 10) == 0 &&
     parseInt(seconds.innerHTML, 10) == 0
   ) {
     clearInterval(timeInterval);
   }
 }

 // add zero if time number comes less than 10 
 function addTheZero() {
   if (parseInt(seconds.innerHTML, 10) < 10) {
     seconds.innerHTML = "0" + seconds.innerHTML;
   }

   if (
     (parseInt(minutes.innerHTML, 10) < 10 &&
       minutes.innerHTML[0] != "0") ||
     minutes.innerHTML.length == 1
   ) {
     minutes.innerHTML = "0" + minutes.innerHTML;
   }

   if (
     (parseInt(hours.innerHTML, 10) < 10 && hours.innerHTML[0] != "0") ||
     minutes.innerHTML.length == 1
   ) {
     hours.innerHTML = "0" + hours.innerHTML;
   }

   if (
     (parseInt(days.innerHTML, 10) < 10 && days.innerHTML[0] != "0") ||
     minutes.innerHTML.length == 1
   ) {
     days.innerHTML = "0" + days.innerHTML;
   }
 }