sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("com.sap.time.controller.Countdown.Countdown", {

      onInit: function () {

        


        this.myTimer = {
      
          "days": 0,
          "hours": 0,
          "minutes": 0,
          "seconds": 0
      
        }
      
        var mytilesModel = new JSONModel(this.myTimer);
        this.getView().setModel(mytilesModel, "timer");
      
        // calculate time  function  is called 
        setInterval(this.calculateTime.bind(this), 1000);
      
      }
      ,//end of oninit
      calculateTime: function () {

        let techedDate = new Date("May 10 2023");
        let currentDate = new Date();
        let diff = techedDate.getTime() - currentDate.getTime();
        this.myTimer.days = Math.floor(diff / (1000 * 60 * 60 * 24));
        this.myTimer.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.myTimer.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        this.myTimer.seconds = Math.floor((diff % (1000 * 60)) / (1000));
        this.getView().getModel("timer").setData(this.myTimer);

      },
      

    });
  }
);
