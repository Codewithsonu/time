sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
], function(Controller,JSONModel,FlattenedDataset,ChartFormatter,Format) {
    "use strict";
    return Controller.extend("com.sap.time.controller.covid19.List", {
        // controller logic goes here
        dataPath : "https://api.rootnet.in/covid19-in/stats/latest",
        onInit: function() {
            var dataModel= new JSONModel(this.dataPath);
            this.getView().setModel(dataModel,"Latest");

          
        }
        
    });
});