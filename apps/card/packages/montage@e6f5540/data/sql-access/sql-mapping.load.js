montageDefine("e6f5540","data/sql-access/sql-mapping",{dependencies:["montage","data/mapping","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("data/mapping").BinderMapping,s=e("data/mapping").BlueprintMapping,o=e("data/mapping").AttributeMapping,u=e("data/mapping").AssociationMapping,a=e("core/logger").logger("sql-mapping"),f=t.SqlBinderMapping=r.create(i,{}),l=t.SqlBlueprintMapping=r.create(s,{_tableName:{value:"",serializable:!0},tableName:{get:function(){return this._tableName},set:function(e){this._tableName=e}}}),c=t.SqlAttributeMapping=r.create(o,{_columnName:{value:"",serializable:!0},columnName:{get:function(){return this._columnName},set:function(e){this._columnName=e}},_columnType:{value:"",serializable:!0},columnType:{get:function(){return this._columnType},set:function(e){this._columnType=e}},_columnWidth:{value:0,serializable:!0},columnWidth:{get:function(){return this._columnWidth},set:function(e){this._columnWidth=e}},_columnPrecision:{value:0,serializable:!0},columnPrecision:{get:function(){return this._columnPrecision},set:function(e){this._columnPrecision=e}},_columnScale:{value:0,serializable:!0},columnScale:{get:function(){return this._columnScale},set:function(e){this._columnScale=e}}}),h=t.SqlAssociationMapping=r.create(u,{})}})