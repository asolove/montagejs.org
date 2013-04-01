montageDefine("9290b07","core/meta/validation-rule",{dependencies:["montage","core/selector","core/meta/validation-semantics","core/logger"],factory:function(e,t,n){"use strict";var r=e("montage").Montage,i=e("core/selector").Selector,s=e("core/meta/validation-semantics").PropertyValidationSemantics,o=e("core/logger").logger("blueprint"),u=t.PropertyValidationRule=r.create(r,{initWithNameAndBlueprint:{value:function(e,t){return this._name=e,this._blueprint=t,this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("blueprint",this.blueprint,"reference"),e.setProperty("messageKey",this.messageKey),e.setProperties()}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this._blueprint=e.getProperty("blueprint"),this._messageKey=e.getProperty("messageKey");var t=r.getSerializablePropertyNames(this);for(var n=0,i=t.length;n<i;n++){var s=t[n];this[s]=e.getProperty(s)}}},_blueprint:{value:null},blueprint:{get:function(){return this._blueprint}},identifier:{get:function(){return[this.blueprint.identifier,"rule",this.name].join("_")}},_name:{value:""},name:{get:function(){return this._name}},_validationSelector:{value:null},validationSelector:{serializable:!1,get:function(){return this._validationSelector||(this._validationSelector=i["false"]),this._validationSelector},set:function(e){this._validationSelector=e}},_messageKey:{value:""},messageKey:{serializable:!1,get:function(){return!this._messageKey||this._messageKey.length===0?this._name:this._messageKey},set:function(e){this._messageKey=e}},_propertyValidationEvaluator:{value:null},evaluateRule:{value:function(e){if(this._propertyValidationEvaluator===null){var t=s.create().initWithBlueprint(this.blueprint);this._propertyValidationEvaluator=t.compile(this.selector.syntax)}return this._propertyValidationEvaluator(e)}}})}})