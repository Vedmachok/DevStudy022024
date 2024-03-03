define("AkhRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"color": "#CBF1EC",
					"visible": true,
					"alignItems": "stretch",
					"justifyContent": "start",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "MainHeaderTop",
				"values": {
					"wrap": "wrap",
					"visible": true,
					"color": "#CBF1EC",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"direction": "row",
					"gap": "small"
				}
			},
			{
				"operation": "merge",
				"name": "MainHeaderBottom",
				"values": {
					"color": "#CBF1EC",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"visible": true,
					"color": "#CBF1EC",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"color": "#CBF1EC",
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"visible": true,
					"styleType": "fullyColored",
					"mode": "tab",
					"bodyBackgroundColor": "#CBF1EC",
					"selectedTabTitleColor": "#000000",
					"tabTitleColor": "#CBE9E6",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "crt-color-turquoise",
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "home-tab-icon"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "AkhRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "cdb6d584-8cd8-4ec6-b852-bb266f5273c4",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "small",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "MyPushButtonRequest"
					},
					"clickMode": "default",
					"icon": "sum-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AkhName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AkhName",
					"control": "$AkhName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AkhNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_AkhNumber_bk9brfk",
					"labelPosition": "auto",
					"control": "$PDS_AkhNumber_bk9brfk",
					"multiline": false,
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AkhPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AkhPrice_xolbiws",
					"labelPosition": "auto",
					"control": "$PDS_AkhPrice_xolbiws"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AkhCurrency",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AkhCurrency_ns8unwj",
					"labelPosition": "auto",
					"control": "$PDS_AkhCurrency_ns8unwj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_3a63x4h",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3a63x4h_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AkhCurrency",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AkhArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AkhArea_fktcfnj",
					"labelPosition": "auto",
					"control": "$PDS_AkhArea_fktcfnj"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AkhCommission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AkhCommission_b9uqxnj",
					"labelPosition": "auto",
					"control": "$PDS_AkhCommission_b9uqxnj",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AkhType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AkhType_16yayrw",
					"labelPosition": "auto",
					"control": "$PDS_AkhType_16yayrw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_lozrpec",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lozrpec_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AkhType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AkhOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AkhOfferType_8qwuakw",
					"labelPosition": "auto",
					"control": "$PDS_AkhOfferType_8qwuakw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_9qtx7ay",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9qtx7ay_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AkhOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AkhManager",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_AkhManager_yhu5onn",
					"labelPosition": "auto",
					"control": "$PDS_AkhManager_yhu5onn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_evfg3st",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_evfg3st_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "AkhManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AkhCommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AkhOfferTypeAkhCommissionPercent",
					"control": "$PDS_AkhOfferTypeAkhCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AkhComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_AkhComment_5cps2zw",
					"labelPosition": "auto",
					"control": "$PDS_AkhComment_5cps2zw",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AkhName": {
						"modelConfig": {
							"path": "PDS.AkhName"
						}
					},
					"PDS_AkhArea_fktcfnj": {
						"modelConfig": {
							"path": "PDS.AkhArea"
						}
					},
					"PDS_AkhPrice_xolbiws": {
						"modelConfig": {
							"path": "PDS.AkhPrice"
						}
					},
					"PDS_AkhCurrency_ns8unwj": {
						"modelConfig": {
							"path": "PDS.AkhCurrency"
						}
					},
					"PDS_AkhType_16yayrw": {
						"modelConfig": {
							"path": "PDS.AkhType"
						}
					},
					"PDS_AkhOfferType_8qwuakw": {
						"modelConfig": {
							"path": "PDS.AkhOfferType"
						}
					},
					"PDS_AkhComment_5cps2zw": {
						"modelConfig": {
							"path": "PDS.AkhComment"
						}
					},
					"PDS_AkhManager_yhu5onn": {
						"modelConfig": {
							"path": "PDS.AkhManager"
						}
					},
					"PDS_AkhNumber_bk9brfk": {
						"modelConfig": {
							"path": "PDS.AkhNumber"
						}
					},
					"PDS_AkhCommission_b9uqxnj": {
						"modelConfig": {
							"path": "PDS.AkhCommission"
						}
					},
					"PDS_AkhOfferTypeAkhCommissionPercent": {
						"modelConfig": {
							"path": "PDS.AkhOfferTypeAkhCommissionPercent"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "AkhRealtyFreedomUI",
							"attributes": {
								"AkhOfferTypeAkhCommissionPercent": {
									"path": "AkhOfferType.AkhCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			/*when the button is clicked, the method is called*/
			{
				request: "MyPushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_AkhPrice_xolbiws;
					this.console.log("Price = " + price);
					request.$context.PDS_AkhPrice_xolbiws = price * 0.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			/*the method works when the values of the price fields are Offer type changed or the commission is recalculated*/
						{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					if (request.attributeName === 'PDS_AkhPrice_xolbiws' || 						// if price changed
					   request.attributeName === 'PDS_AkhOfferTypeAkhCommissionPercent' ) { 		// or percent changed
						var price = await request.$context.PDS_AkhPrice_xolbiws;
						var percent = await request.$context.PDS_AkhOfferTypeAkhCommissionPercent;
						var commission = price * percent / 100;
						request.$context.PDS_AkhCommission_b9uqxnj = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});