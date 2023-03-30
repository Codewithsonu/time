sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
   
  ],
  function (BaseController, JSONModel, formatter) {
    "use strict";
    return BaseController.extend("com.sap.time.controller.vacc.Vacc", {
  
      onInit() {

        let myVaccModel = new JSONModel("../model/vacc.json");
        this.getView().setModel(myVaccModel, "vacc");

        let myViewConfig = {
          "table": true,
          "calendar": false
        };


        let myViewModel = new JSONModel(myViewConfig);
        this.getView().setModel(myViewModel, "View");

      },
      formatDate:function(input){
        
        return new Date(input);

      },
      formatState:function(input){
        let currentDate = new Date();
        let inputDate = new Date(input);

        if (inputDate < currentDate){
          return 'Success';

        }else if (inputDate > currentDate){
          return 'Warning';
        }else{
          return 'Error';
        }
      }


    });
  }
);
