define("AkhRealtyVisitFreedomUiFormPageCard", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"color": "#CBF1EC"
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"color": "#CBF1EC",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "FooterContainer",
				"values": {
					"color": "#CBF1EC",
					"borderRadius": "none",
					"gap": "small"
				}
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_6o4j89i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.AkhRealtyVisitFreedomUiDS_AkhVisitDateAndTime_ega86ur",
					"labelPosition": "above",
					"control": "$AkhRealtyVisitFreedomUiDS_AkhVisitDateAndTime_ega86ur"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_hoi9ioa",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AkhRealtyVisitFreedomUiDS_AkhPotentialCustomer_vc1ni5a",
					"labelPosition": "above",
					"control": "$AkhRealtyVisitFreedomUiDS_AkhPotentialCustomer_vc1ni5a",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_2traxgm",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2traxgm_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hoi9ioa",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_dxb83s5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AkhRealtyVisitFreedomUiDS_AkhOwner_0p4vm05",
					"labelPosition": "above",
					"control": "$AkhRealtyVisitFreedomUiDS_AkhOwner_0p4vm05",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_k241192",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_k241192_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_dxb83s5",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_og3gxdp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.AkhRealtyVisitFreedomUiDS_AkhComment_cp4gcvb",
					"labelPosition": "above",
					"control": "$AkhRealtyVisitFreedomUiDS_AkhComment_cp4gcvb"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AkhRealtyVisitFreedomUiDS_AkhVisitDateAndTime_ega86ur": {
						"modelConfig": {
							"path": "AkhRealtyVisitFreedomUiDS.AkhVisitDateAndTime"
						}
					},
					"AkhRealtyVisitFreedomUiDS_AkhPotentialCustomer_vc1ni5a": {
						"modelConfig": {
							"path": "AkhRealtyVisitFreedomUiDS.AkhPotentialCustomer"
						}
					},
					"AkhRealtyVisitFreedomUiDS_AkhOwner_0p4vm05": {
						"modelConfig": {
							"path": "AkhRealtyVisitFreedomUiDS.AkhOwner"
						}
					},
					"AkhRealtyVisitFreedomUiDS_AkhComment_cp4gcvb": {
						"modelConfig": {
							"path": "AkhRealtyVisitFreedomUiDS.AkhComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"AkhRealtyVisitFreedomUiDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "AkhRealtyVisitFreedomUi"
							}
						}
					},
					"primaryDataSourceName": "AkhRealtyVisitFreedomUiDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});