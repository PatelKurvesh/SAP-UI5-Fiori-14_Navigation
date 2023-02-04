sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-14_Navigation.controller.View1", {
		
		onInit : function(){
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/fruits.json");
			this.getView().setModel(oModel);
		},
		onNext :function(){
			var oView2 = sap.ui.getCore().byId("__xmlview0--idApp").getPages()[1];
			 sap.ui.getCore().byId("__xmlview0--idApp").to(oView2);          
		},
		onItemPress : function(oEvent){
			
			var oItem = oEvent.getParameter("listItem");
			var sPath = oItem.getBindingContext().sPath;
			var oView2 = sap.ui.getCore().byId("__xmlview0--idApp").getPages()[1];
			oView2.bindElement(sPath);
			sap.ui.getCore().byId("__xmlview0--idApp").to(oView2);
			
		}

	});
});