 define("UsrAppRequests_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
					],
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'"
				}
			},
			{
				"operation": "insert",
				"name": "FlexContainer_6rfzk09",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "small"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions_p4bcvr1",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_p4bcvr1_caption)#",
					"folderTree": "FolderTree_gm5sany"
				},
				"parentName": "FlexContainer_6rfzk09",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTree_gm5sany",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_gm5sany_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "UsrAppRequests",
					"layoutConfig": {
						"width": 328.125
					}
				},
				"parentName": "SectionContentWrapper",				
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"ItemsSorting": {},
				"Items": {
					"isCollection": true,
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting"
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_gm5sany_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							}
						]
					}, 
					"viewModelConfig": {
						"attributes": {
							"PDS_Id": {
								"modelConfig": {
									"path": 'PDS.Id',
								}
							},
							"PDS_UsrName": {
								"modelConfig": {
									"path": "PDS.UsrName"
								}
							},
							"PDS_CreatedOn": {
								"modelConfig": {
									"path": "PDS.CreatedOn"
								}
							},
							"PDS_CreatedBy": {
								"modelConfig": {
									"path": "PDS.CreatedBy"
								}
							}
						}
					}
				},
				"FolderTree_gm5sany_visible": {
					"value": false
				},
				"FolderTree_gm5sany_items": {
					"isCollection": true,
					"viewModelConfig": {
						"attributes": {
							"Id": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.Id"
								}
							},
							"Name": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.Name"
								}
							},
							"ParentId": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.Parent.Id"
								}
							},
							"FilterData": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.FilterData"
								}
							}
						}
					},
					"modelConfig": {
						"path": "FolderTree_gm5sany_items_DS",
						"filterAttributes": [
							{
								"name": "FolderTree_gm5sany_items_DS_filter",
								"loadOnChange": true
							}
						]
					},
					"embeddedModel": {
						"name": "FolderTree_gm5sany_items_DS",
						"config": {
							"type": "crt.EntityDataSource",
							"config": {
								"entitySchemaName": "FolderTree"
							}
						}
					}
				},
				"FolderTree_gm5sany_active_folder_id": {},
				"FolderTree_gm5sany_active_folder_name": {},
				"FolderTree_gm5sany_active_folder_filter": {
					"value": {}
				},
				"FolderTree_gm5sany_items_DS_filter": {
					"value": {
						"isEnabled": true,
						"trimDateTimeParameterToDate": false,
						"filterType": 6,
						"logicalOperation": 0,
						"items": {
							"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"filterType": 1,
								"comparisonType": 3,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "EntitySchemaName"
								},
								"rightExpression": {
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "UsrAppRequests"
									}
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"hiddenInPageDesigner": true,
					"config": {
						"entitySchemaName": "UsrAppRequests"
					}
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/
	};
});
