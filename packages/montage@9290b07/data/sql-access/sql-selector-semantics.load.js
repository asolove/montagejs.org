montageDefine("9290b07","data/sql-access/sql-selector-semantics",{dependencies:["montage","core/selector/semantics","data/sql-access/sql-mapping","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/selector/semantics").Semantics,s=e("data/sql-access/sql-mapping").SqlBinderMapping,o=e("data/sql-access/sql-mapping").SqlBlueprintMapping,u=e("data/sql-access/sql-mapping").SqlAttributeMapping,a=e("data/sql-access/sql-mapping").SqlAssociationMapping,f=e("core/logger").logger("sql-selector-semantics"),l=t.SqlSemantics=i.create(i,{_store:{value:null,serializable:!0},store:{get:function(){return this._store}},_transactionID:{value:null,serializable:!0},transactionID:{get:function(){return this._transactionID}},initWithStore:{value:function(e,t){return this._store=e,this._transactionID=t,this}}})}})