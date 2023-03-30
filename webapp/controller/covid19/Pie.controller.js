sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
], function(Controller,JSONModel,FlattenedDataset,ChartFormatter,Format) {
	"use strict";

	return Controller.extend("com.sap.time.controller.covid19.Pie", {
        
        dataPath : "https://api.rootnet.in/covid19-in/stats/latest",
        onInit: function() {
            
            Format.numericFormatter(ChartFormatter.getInstance());
            var formatPattern = ChartFormatter.DefaultPattern;
           
    
            var oVizFrame = this.oVizFrame = this.getView().byId("idVizFramepie");
            oVizFrame.setVizProperties({
                legend: {
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false
                }
            });
            var dataModel = new JSONModel(this.dataPath);
            oVizFrame.setModel(dataModel);
    
            var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

          
        }


	});
});