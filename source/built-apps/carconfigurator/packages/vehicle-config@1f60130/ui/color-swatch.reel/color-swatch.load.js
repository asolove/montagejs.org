montageDefine("1f60130","ui/color-swatch.reel/color-swatch",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.ColorSwatch=r.create(i,{_color:{value:null},color:{get:function(){return this._color},set:function(e){if(e===this._color)return;this._color=e,this.needsDraw=!0}},colorChip:{value:null},didCreate:{value:function(){this.addPropertyChangeListener("color.red",this),this.addPropertyChangeListener("color.green",this),this.addPropertyChangeListener("color.blue",this)}},handleChange:{value:function(){this.needsDraw=!0}},draw:{value:function(){var e=this.colorChip.style,t;this.color?(t=this.color,e.backgroundColor="rgb("+t.red+","+t.green+","+t.blue+")"):e.backgroundColor="rgb(0,0,0)"}}})}})