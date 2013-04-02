montageDefine("1b6c26a","core/meta/validation-rule",{dependencies:["montage","core/selector","core/meta/validation-semantics","core/logger"],factory:function(e,n){"use strict";var t=e("montage").Montage,s=e("core/selector").Selector,a=e("core/meta/validation-semantics").PropertyValidationSemantics;e("core/logger").logger("blueprint"),n.PropertyValidationRule=t.specialize({constructor:{value:function(){this.super()}},initWithNameAndBlueprint:{value:function(e,n){return this._name=e,this._owner=n,this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("blueprint",this.owner,"reference"),e.setProperty("messageKey",this.messageKey),e.setAllProperties()}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this._owner=e.getProperty("blueprint"),this._messageKey=e.getProperty("messageKey");for(var n=t.getSerializablePropertyNames(this),s=0,a=n.length;a>s;s++){var o=n[s];this[o]=e.getProperty(o)}}},_owner:{value:null},owner:{get:function(){return this._owner}},identifier:{get:function(){return[this.blueprint.identifier,"rule",this.name].join("_")}},_name:{value:""},name:{get:function(){return this._name}},_validationSelector:{value:null},validationSelector:{serializable:!1,get:function(){return this._validationSelector||(this._validationSelector=s["false"]),this._validationSelector},set:function(e){this._validationSelector=e}},_messageKey:{value:""},messageKey:{serializable:!1,get:function(){return this._messageKey&&0!==this._messageKey.length?this._messageKey:this._name},set:function(e){this._messageKey=e}},_propertyValidationEvaluator:{value:null},evaluateRule:{value:function(e){if(null===this._propertyValidationEvaluator){var n=(new a).initWithBlueprint(this.blueprint);this._propertyValidationEvaluator=n.compile(this.selector.syntax)}return this._propertyValidationEvaluator(e)}},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});