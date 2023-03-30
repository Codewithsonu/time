sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.time.controller.View1", {
            onInit: function () {
                var mytilesModel = new JSONModel("../model/tiles.json");


                this.getView().setModel(mytilesModel, "tiles");

                console.log("OnInit")

            },
            onPress: function (oRoute) {

                if (oRoute.substring(0, 4) == "EXT-") {

                    
                    let selecteditem = JSON.parse(this.getView().getModel("tiles").getJSON()).find(item => { if (item.router == oRoute) { return item } })
                    sap.m.URLHelper.redirect(selecteditem.url);

                    
                } 
                {
                    this.getOwnerComponent().getRouter().navTo(oRoute);

                }


            }

        });
    });
