montageDefine("8c9da00","data/query",{dependencies:["montage","core/selector","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/selector").Selector,s=e("core/logger").logger("query"),o=t.Query=r.create(r,{_blueprint:{value:null,serializable:!0},blueprint:{get:function(){return this._blueprint}},_selector:{value:null,serializable:!0},selector:{get:function(){return this._selector}},name:{serializable:!0,enumerable:!0,value:""},_parameters:{value:{},serializable:!0,distinct:!0,enumerable:!1,writable:!1},parameters:{get:function(){return this._parameters}},initWithBlueprint:{enumerable:!0,value:function(e){return this.initWithBlueprintSelectorAndParameters(e,null,null)}},initWithBlueprintAndSelector:{enumerable:!0,value:function(e,t){return this.initWithBlueprintSelectorAndParameters(e,t,null)}},initWithBlueprintSelectorAndParameters:{enumerable:!0,value:function(e,t,n){this._blueprint=e;if(t!=null){if(!i.isPrototypeOf(t))throw new Error("Selector is not a selector: "+JSON.stringify(t));this._selector=t}if(n!=null){var r=Object.getOwnPropertyNames(n),s,o,u;for(u=0;typeof (o=r[u])!="undefined";u++)s=n[o],this._parameters[o]=s}return this}},where:{value:function(e){if(e!=null){if(!i.isPrototypeOf(e))throw new Error("Selector is not a selector: "+JSON.stringify(e));this._selector=e}return this}}})}})