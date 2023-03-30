sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
  ],
  function (BaseController,JSONModel,FlattenedDataset,ChartFormatter,Format) {
    "use strict";

    return BaseController.extend("com.sap.time.controller.covid19.covid19", {


      dataPath : "https://api.rootnet.in/covid19-in/stats/history",
      oVizFrame : null,

      onInit() {

        Format.numericFormatter(ChartFormatter.getInstance());
        var formatPattern = ChartFormatter.DefaultPattern;
       

        var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
        oVizFrame.setVizProperties({
            plotArea: {
                dataLabel: {
                    formatString:formatPattern.SHORTFLOAT_MFD2,
                    visible: true
                }
            },
            valueAxis: {
                label: {
                    formatString: formatPattern.SHORTFLOAT
                },
                title: {
                    visible: true
                }
            },
            categoryAxis: {
                title: {
                    visible: true
                }
            },
            title: {
                visible: true,
                text: 'Covid cases history'
            }
        });
        var dataModel = new JSONModel(this.dataPath);
        oVizFrame.setModel(dataModel);

        var oPopOver = this.getView().byId("idPopOver");
        oPopOver.connect(oVizFrame.getVizUid());
        oPopOver.setFormatString(formatPattern.STANDARDFLOAT);


        
        
        

      },



		onPressList: function(oEvent) {
  
      this.getOwnerComponent().getRouter().navTo("second-list");

			
		},

		onPressGraph: function(oEvent) {

      console.log("on Graph is pressed")
       this.getOwnerComponent().getRouter().navTo("second-pie");

		},
    onReloadToInitialScreen :function(oEvent){

      var sRouteName = oEvent.getParameter("name");

      // checking if the currenct route is not the inital route 
      if(sRouteName !== "RouteView1"){

        this.getOwnerComponent().getRouter().navTo("RouteView1")
      }


    }

    });
  }
);
