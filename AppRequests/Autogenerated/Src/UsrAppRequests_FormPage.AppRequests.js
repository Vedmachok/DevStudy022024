define("UsrAppRequests_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
    return {
        viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
            {
                "operation": "insert",
                "name": "UsrName",
                "values": {
                    "layoutConfig": {
                        "column": 1,
                        "row": 1,
                        "colSpan": 1,
                        "rowSpan": 1
                    },
                    "type": "crt.Input",
                    "label": "$Resources.Strings.UsrName",
                    "control": "$UsrName"
                },
                "parentName": "LeftAreaProfileContainer",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "UsrStatus",
                "values": {
                    "layoutConfig": {
                        "column": 1,
                        "row": 2,
                        "colSpan": 1,
                        "rowSpan": 1
                    },
                    "type": "crt.ComboBox",
                    "loading": false,
                    "control": "$UsrStatus",
                    "label": "$Resources.Strings.UsrStatus",
                    "items": "$UsrStatus_List",
                    "attributeName": "UsrStatus",
                    "isAddAllowed": true,
                    "showValueAsLink": true
                },
                "parentName": "LeftAreaProfileContainer",
                "propertyName": "items",
                "index": 1
            },
            {
                "operation": "insert",
                "name": "UsrDescription",
                "values": {
                    "layoutConfig": {
                        "column": 1,
                        "row": 3,
                        "colSpan": 1,
                        "rowSpan": 1
                    },
                    "type": "crt.Input",
                    "control": "$UsrDescription",
                    "label": "$Resources.Strings.UsrDescription",
                    "multiline": false
                },
                "parentName": "LeftAreaProfileContainer",
                "propertyName": "items",
                "index": 2
            }
        ]/**SCHEMA_VIEW_CONFIG_DIFF*/,
        viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
            "attributes": {
                "UsrName": {
                    "modelConfig": {
                        "path": "PDS.UsrName"
                    }
                },
                "Id": {
                    "modelConfig": {
                        "path": "PDS.Id"
                    }
                },
                "UsrDescription": {
                    "modelConfig": {
                        "path": "PDS.UsrDescription"
                    },
                    "validators": {
                        "required": {
                            "type": "crt.Required"
                        }
                    }
                },
                "UsrStatus": {
                    "modelConfig": {
                        "path": "PDS.UsrStatus"
                    }
                },
                "UsrStatus_List": {
                    "isCollection": true,
                    "viewModelConfig": {
                        "attributes": {
                            "value": {
                                "modelConfig": {
                                    "path": "UsrStatus_List_DS.Id"
                                }
                            },
                            "displayValue": {
                                "modelConfig": {
                                    "path": "UsrStatus_List_DS.Name"
                                }
                            }
                        }
                    },
                    "modelConfig": {
                        "path": "UsrStatus_List_DS",
                        "sortingConfig": {
                            "attributeName": "UsrStatus_List_Sorting",
                            "default": [
                                {
                                    "columnName": "Name",
                                    "direction": "asc"
                                }
                            ]
                        },
                        "pagingConfig": {
                            "rowCount": 50,
                            "rowsOffset": null
                        }
                    },
                    "embeddedModel": {
                        "name": "UsrStatus_List_DS",
                        "config": {
                            "type": "crt.EntityDataSource",
                            "config": {
                                "entitySchemaName": "UsrRequestStatusLookup"
                            }
                        }
                    }
                },
                "UsrStatus_List_Sorting": {
                    "isCollection": true,
                    "viewModelConfig": {
                        "attributes": {
                            "columnName": {},
                            "direction": {}
                        }
                    }
                }
            }
        }/**SCHEMA_VIEW_MODEL_CONFIG*/,
        modelConfig: /**SCHEMA_MODEL_CONFIG*/{
            "dataSources": {
                "PDS": {
                    "type": "crt.EntityDataSource",
                    "config": {
                        "entitySchemaName": "UsrAppRequests"
                    }
                }
            }
        }/**SCHEMA_MODEL_CONFIG*/,
        handlers: /**SCHEMA_HANDLERS*/[
            {
                request: "crt.HandleViewModelAttributeChangeRequest",
                handler: async (request, next) => {
                    if (request.attributeName === 'UsrStatus') {
                        const newStatusId = '3be636fa-12b4-40eb-a050-91b1d774a75f';
                        const selectedStatus = await request.$context.UsrStatus;
                        const selectedStatusId = selectedStatus?.value;
                        const isNewRequest = selectedStatusId === newStatusId;
                        if (isNewRequest) {
                            /* Применение валидатора required к атрибуту UsrDescription. */
                            request.$context.enableAttributeValidator('UsrDescription', 'required');
                        } else {
                            /* Отключение применения валидатора required к атрибуту UsrDescription. */
                            request.$context.disableAttributeValidator('UsrDescription', 'required');
                        }
                        /* Вызываем следующий обработчик, если он присутствует, и возвращаем его результат. */
                        return next?.handle(request);
                    }
                }
            }
        ]/**SCHEMA_HANDLERS*/,
        converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
        validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
    };
});