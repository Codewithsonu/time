// Define the required modules for the controller
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
  "use strict";

  // Return a new controller object that extends BaseController
  return BaseController.extend("com.sap.time.controller.Countdown.Countdown", {
      
      // Initialize the countdown timer
      onInit: function () {
        
          // Define the initial values of the timer
          this.myTimer = {
              "days": 0,
              "hours": 0,
              "minutes": 0,
              "seconds": 0
          };
        
          // Create a new JSONModel to store the timer values and set it to the view
          var mytilesModel = new JSONModel(this.myTimer);
          this.getView().setModel(mytilesModel, "timer");
        
          // Call the calculateTime function every second to update the timer
          setInterval(this.calculateTime.bind(this), 1000);
        
      }, // end of onInit
      
      // Calculate the remaining time until the target date and update the timer values
      calculateTime: function () {
        
          // Define the target date for the countdown
          let techedDate = new Date("Jul 02 2023");
          
          // Get the current date and calculate the difference between the two dates
          let currentDate = new Date();
          let diff = techedDate.getTime() - currentDate.getTime();
          
          // Calculate the remaining days, hours, minutes, and seconds
          this.myTimer.days = Math.floor(diff / (1000 * 60 * 60 * 24));
          this.myTimer.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.myTimer.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          this.myTimer.seconds = Math.floor((diff % (1000 * 60)) / (1000));
          
          // Update the JSONModel with the new timer values
          this.getView().getModel("timer").setData(this.myTimer);
        
      }
    
  });
});
