/*jshint esversion:11*/
define("AkhRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
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
				"name": "Button_AddVisits",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_AddVisits_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "small",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "AkhAddRealtyVisitsProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"clickMode": "default",
					"layoutConfig": {},
					"icon": null,
					"menuItems": []
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ButtonRunWebServise",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_jiqwzjt_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "small",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "akh.RunWebServiceButtonRequest"
					},
					"clickMode": "default",
					"icon": "gear-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
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
				"index": 2
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
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_xdhjsi2",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_xdhjsi2_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#000000",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_j7p5e5y",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_xdhjsi2",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mf6tbd6",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_j7p5e5y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_abd6rt2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_abd6rt2_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AkhRealtyVisitFreedomUi",
							"defaultValues": [
								{
									"attributeName": "AkhParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_mf6tbd6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_s8lym86",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_s8lym86_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_3eti2hdDS"
						}
					}
				},
				"parentName": "FlexContainer_mf6tbd6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_58kt39v",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_58kt39v_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_mf6tbd6",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_63yp0ug",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_63yp0ug_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_3eti2hd"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_58kt39v",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_7g5rfbh",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_7g5rfbh_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AkhRealtyVisitFreedomUi"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_58kt39v",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_iwqbiu9",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_iwqbiu9_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_3eti2hd"
					]
				},
				"parentName": "FlexContainer_mf6tbd6",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_m5b6e2h",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_xdhjsi2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3eti2hd",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_3eti2hd",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_3eti2hdDS_Id",
					"columns": [
						{
							"id": "c1da515b-63ec-21e7-b026-d613a36684b5",
							"code": "GridDetail_3eti2hdDS_AkhVisitDateAndTime",
							"path": "AkhVisitDateAndTime",
							"caption": "#ResourceString(GridDetail_3eti2hdDS_AkhVisitDateAndTime)#",
							"dataValueType": 7,
							"width": 181
						},
						{
							"id": "27ffc5d1-067e-f194-f22e-61b1c9420e43",
							"code": "GridDetail_3eti2hdDS_AkhPotentialCustomer",
							"path": "AkhPotentialCustomer",
							"caption": "#ResourceString(GridDetail_3eti2hdDS_AkhPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 185
						},
						{
							"id": "d59d735c-0716-0ee0-2e8c-49ab380f0c32",
							"code": "GridDetail_3eti2hdDS_AkhOwner",
							"path": "AkhOwner",
							"caption": "#ResourceString(GridDetail_3eti2hdDS_AkhOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 129
						},
						{
							"id": "58188c10-a72b-e5c5-1baf-f5cf6c7a0393",
							"code": "GridDetail_3eti2hdDS_AkhComment",
							"path": "AkhComment",
							"caption": "#ResourceString(GridDetail_3eti2hdDS_AkhComment)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_m5b6e2h",
				"propertyName": "items",
				"index": 0
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
						},
						"validators": {
							"MySuperValidator": {
								"type": "akh.AkhValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_AkhPrice_xolbiws": {
						"modelConfig": {
							"path": "PDS.AkhPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "akh.AkhValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
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
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
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
					},
					"GridDetail_3eti2hd": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_3eti2hdDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "AkhComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_3eti2hdDS_AkhVisitDateAndTime": {
									"modelConfig": {
										"path": "GridDetail_3eti2hdDS.AkhVisitDateAndTime"
									}
								},
								"GridDetail_3eti2hdDS_AkhPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_3eti2hdDS.AkhPotentialCustomer"
									}
								},
								"GridDetail_3eti2hdDS_AkhOwner": {
									"modelConfig": {
										"path": "GridDetail_3eti2hdDS.AkhOwner"
									}
								},
								"GridDetail_3eti2hdDS_AkhComment": {
									"modelConfig": {
										"path": "GridDetail_3eti2hdDS.AkhComment"
									}
								},
								"GridDetail_3eti2hdDS_Id": {
									"modelConfig": {
										"path": "GridDetail_3eti2hdDS.Id"
									}
								}
							}
						}
					},
					"PDS_AkhColumn11_j9uek28": {
						"modelConfig": {
							"path": "PDS.AkhColumn11"
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
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_3eti2hdDS": [
							{
								"attributePath": "AkhParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
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
					},
					"GridDetail_3eti2hdDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AkhRealtyVisitFreedomUi",
							"attributes": {
								"AkhVisitDateAndTime": {
									"path": "AkhVisitDateAndTime"
								},
								"AkhPotentialCustomer": {
									"path": "AkhPotentialCustomer"
								},
								"AkhOwner": {
									"path": "AkhOwner"
								},
								"AkhComment": {
									"path": "AkhComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				/*when the button is clicked, the method is called*/
				request: "MyPushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					//Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_AkhPrice_xolbiws;
					this.console.log("Price = " + price);
					request.$context.PDS_AkhPrice_xolbiws = price * 0.2;
					/*lookup value operation*/
					//debugger;
					var realtyTypeObject = await request.$context.PDS_AkhType_16yayrw;
					if(realtyTypeObject){
						var typeName = realtyTypeObject.displayValue;
						var typeId = realtyTypeObject.value;
						this.console.log("Type Id: " +  typeId + ", type name: " + typeName);
					}
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
								if (request.attributeName === 'PDS_AkhPrice_xolbiws') {
									const examination = 10000;
									const selectedPrice = await request.$context.PDS_AkhPrice_xolbiws;
									//const selectedStatusId = selectedStatus?.value;
									const checkingValue = selectedPrice >= examination;
									/* Check the request status. */
									if (checkingValue) {
										/* If the request is new, apply the required validator to the UsrDescription attribute. */
										request.$context.enableAttributeValidator('PDS_AkhComment_5cps2zw', 'required');
									} else {
										/* Do not apply the required validator to the UsrDescription attribute for non-new requests. */
										request.$context.disableAttributeValidator('PDS_AkhComment_5cps2zw', 'required');
									}
								}
								/* Call the next handler if it exists and return its result. */
								return next?.handle(request);
							}
						},
			{
				request: "akh.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Run web service button works...");

					var typeObject = await request.$context.PDS_AkhType_16yayrw;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}
					// get id from type lookup type object

					var offerTypeObject = await request.$context.PDS_AkhOfferType_8qwuakw;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
					// get id from type lookup offer type object
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetTotalAmountByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					//const endpoint = "http://localhost/D5_8.0.8.4758/0/rest/RealtyService/GetTotalAmountByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId,
						entityName: "AkhRealtyFreedomUI"
					};
					const response = await httpClientService.post(endpoint, params);
					
					this.console.log("response total price = " + response.body.GetTotalAmountByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"akh.AkhValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"akh.AkhValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});