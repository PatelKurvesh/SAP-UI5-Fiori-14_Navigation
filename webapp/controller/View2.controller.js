sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-14_Navigation.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf GithubSAP-UI5-Fiori-14_Navigation.view.View2
		 */
		onInit : function(){
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/fruits.json");
			this.getView().setModel(oModel);
		},
		onBack : function(){
			var oView1 = sap.ui.getCore().byId("__xmlview0--idApp").getPages()[0];
			sap.ui.getCore().byId("__xmlview0--idApp").to(oView1);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf GithubSAP-UI5-Fiori-14_Navigation.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf GithubSAP-UI5-Fiori-14_Navigation.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf GithubSAP-UI5-Fiori-14_Navigation.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});