montageDefine("9290b07","ui/autocomplete/result-item.reel/result-item",{dependencies:["montage","ui/component","ui/dynamic-text.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/dynamic-text.reel").DynamicText;t.ResultItem=r.create(s,{textPropertyPath:{value:null},_object:{value:null},object:{get:function(){return this._object},set:function(e){e&&(this._object=e),this._object&&(this.textPropertyPath?this.value=this._object[this.textPropertyPath]:this.value=this._object)}}})}})