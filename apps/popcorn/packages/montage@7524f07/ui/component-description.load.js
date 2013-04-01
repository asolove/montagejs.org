montageDefine("7524f07","ui/component-description",{dependencies:["montage","core/enum","core/promise","core/selector","core/selector/semantics","core/serializer","core/deserializer","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/enum").Enum,s=e("core/promise").Promise,o=e("core/selector").Selector,u=e("core/selector/semantics").Semantics,a=e("core/serializer").Serializer,f=e("core/deserializer").Deserializer,l=e("core/logger").logger("component-description"),c=t.ComponentDescription=r.create(r,{_component:{serializable:!1,enumerable:!1,value:null},component:{get:function(){return this._component}},initWithComponent:{value:function(e){return this._component=e,this._component.description=this,this}},getComponentDescriptionFromComponentModule:{value:function(t){var n=r.getInfoForObject(t),i=n.moduleId,o=i.lastIndexOf("/"),u=i+"/"+i.slice(o===-1?0:o+1,-5)+"-description.json",a=s.defer();return n.require.async(u).then(function(r){f.create().initWithObjectAndRequire(r,n.require,u).deserializeObject(function(e){e?(e._component=t,a.resolve(e)):a.reject("No Component Description found "+u)},e)},a.reject),a.promise}},identifier:{get:function(){return[this.component.identifier,"description"].join("_")}},_componentPropertyDescriptions:{serializable:!0,enumerable:!1,distinct:!0,value:{}},componentPropertyDescriptions:{get:function(){var e=[],t;for(t in this._componentPropertyDescriptions)e.push(this._componentPropertyDescriptions[t]);return e}},componentPropertyDescriptionForName:{value:function(e){return this._componentPropertyDescriptions[e]}},addComponentPropertyDescription:{value:function(e){var t=this._componentPropertyDescriptions[e];return t==null&&(t=p.create().initWithPropertyAndComponentDescription(e,this),this._componentPropertyDescriptions[e]=t),t}},removeComponentPropertyDescription:{value:function(e){var t=this._componentPropertyDescriptions[e];return t!=null&&delete this._componentPropertyDescriptions[e],t}},_componentPropertyDescriptionGroups:{serializable:!0,enumerable:!1,distinct:!0,value:{}},componentPropertyDescriptionGroups:{get:function(){var e=[];for(var t in this._componentPropertyDescriptionGroups)e.push(t);return e}},componentPropertyDescriptionGroupForName:{value:function(e){var t=this._componentPropertyDescriptionGroups[e];return t!=null?t:[]}},addComponentPropertyDescriptionGroup:{value:function(e){var t=this._componentPropertyDescriptionGroups[e];return t==null&&(t=[],this._componentPropertyDescriptionGroups[e]=t),t}},removeComponentPropertyDescriptionGroup:{value:function(e){var t=this._componentPropertyDescriptionGroups[e];return t!=null&&delete this._componentPropertyDescriptionGroups[e],t}},addComponentPropertyDescriptionToGroup:{value:function(e,t){var n=this._componentPropertyDescriptionGroups[t];n==null&&(n=this.addComponentPropertyDescriptionGroup(t));var r=this._componentPropertyDescriptions[e];r==null&&(r=this.addComponentPropertyDescription(e));var i=n.indexOf(r);return i<0&&n.push(r),n}},removeComponentPropertyDescriptionFromGroup:{value:function(e,t){var n=this._componentPropertyDescriptionGroups[t],r=this._componentPropertyDescriptions[e];if(n!=null&&r!=null){var i=n.indexOf(r);i>=0&&n.splice(i,1)}return n!=null?n:[]}},_componentPropertyValidationRules:{serializable:!0,enumerable:!1,distinct:!0,value:{}},componentPropertyValidationRules:{get:function(){var e=[];for(var t in this._componentPropertyValidationRules)e.push(this._componentPropertyValidationRules[t]);return e}},componentPropertyValidationRuleForName:{value:function(e){return this._componentPropertyValidationRules[e]}},addComponentPropertyValidationRule:{value:function(e){var t=this._componentPropertyValidationRules[e];return t==null&&(t=d.create().initWithNameAndComponentDescription(e,this),this._componentPropertyValidationRules[e]=t),t}},removeComponentPropertyValidationRule:{value:function(e){var t=this._componentPropertyValidationRules[e];return t!=null&&delete this._componentPropertyValidationRules[e],t}},evaluateRules:{value:function(){var e=[];for(var t in this._componentPropertyValidationRules){var n=this._componentPropertyValidationRules[t];n.evaluateRule()&&e.push(n.messageKey)}return e}}}),h=i.create().initWithMembers("string","number","boolean","date","enum","set","list","map","url","object"),p=t.ComponentPropertyDescription=r.create(r,{_componentDescription:{serializable:!0,enumerable:!1,value:null},componentDescription:{get:function(){return this._componentDescription}},_name:{serializable:!0,enumerable:!1,value:""},name:{get:function(){return this._name}},initWithPropertyAndComponentDescription:{value:function(e,t){return this._name=e,this._componentDescription=t,this}},identifier:{get:function(){return[this.componentDescription.identifier,this.name].join("_")}},writable:{get:function(){return r.getPropertyProperty(this.componentDescription.component,this.name,"writable")}},serializable:{get:function(){return r.getPropertyProperty(this.componentDescription.component,this.name,"serializable")}},distinct:{get:function(){return r.getPropertyProperty(this.componentDescription.component,this.name,"distinct")}},_valueType:{serializable:!0,enumerable:!1,value:null},valueType:{serializable:!1,get:function(){return this._valueType===""?"string":this._valueType},set:function(e){this._valueType=e}},_enumValues:{serializable:!0,enumerable:!1,value:null},enumValues:{serializable:!1,get:function(){return this._enumValues?this._enumValues_enumValues:[]},set:function(e){Array.isArray(e)&&(this._enumValues=e)}},helpString:{serializable:!0,value:""}}),d=t.ComponentPropertyValidationRule=r.create(r,{_componentDescription:{serializable:!0,enumerable:!1,value:null},componentDescription:{get:function(){return this._componentDescription}},identifier:{get:function(){return[this.componentDescription.identifier,"rule",this.name].join("_")}},_name:{serializable:!0,enumerable:!1,value:""},name:{get:function(){return this._name}},initWithNameAndComponentDescription:{value:function(e,t){return this._name=e,this._componentDescription=t,this}},_validationSelector:{enumerable:!1,value:null},validationSelector:{serializable:!1,get:function(){return this._validationSelector||(this._validationSelector=o.false),this._validationSelector},set:function(e){this._validationSelector=e}},_messageKey:{serializable:!0,enumerable:!1,value:""},messageKey:{serializable:!1,get:function(){return!this._messageKey||this._messageKey.length==0?ths._name:this._messageKey},set:function(e){this._messageKey=e}},_propertyValidationEvaluator:{serializable:!1,enumerable:!1,value:null},evaluateRule:{value:function(){if(_propertyValidationEvaluator===null){var e=v.create().initWithComponentDescription(this.componentDescription);_propertyValidationEvaluator=e.compile(this.selector.syntax)}return _propertyValidationEvaluator(this.componentDescription.component)}}}),v=t.PropertyValidationSemantics=u.create(u,{_componentDescription:{serializable:!0,enumerable:!1,value:null},componentDescription:{get:function(){return this._componentDescription}},initWithComponentDescription:{value:function(e){return this._componentDescription=e,this}},compile:{value:function(e,t){u.compile.call(self,e,t)}},operators:{value:{isBound:function(e){return!e}}},evaluators:{value:{isBound:function(e,t){var n=this;return function(r,i){var r=n.count(e(r,i));return t(r,i)}}}}});for(var m in u.operators)v.operators[m]=u.operators[m];for(var m in u.evaluators)v.evaluators[m]=u.evaluators[m]}})