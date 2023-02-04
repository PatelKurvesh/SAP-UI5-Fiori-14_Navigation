sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-14_Navigation.controller.View1", {
		
		onInit : function(){
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/fruits.json");
			this.getView().setModel(oModel);
		}

	});
});