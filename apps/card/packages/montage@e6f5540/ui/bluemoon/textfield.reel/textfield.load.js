montageDefine("e6f5540","ui/bluemoon/textfield.reel/textfield",{dependencies:["montage","ui/editable-text"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/editable-text").EditableText,s=t.Textfield=r.create(i,{delegate:{enumerable:!0,value:null},_placeholder:{value:null},placeholder:{get:function(){return this._placeholder},set:function(e){this._placeholder!==e&&(this._placeholder=e,this.needsDraw=!0)}},_drawSpecific:{enumerable:!1,value:function(){this.element.classList.add("montage-Textfield"),this.element.placeholder=this._placeholder}}})}})