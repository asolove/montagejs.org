var Montage=require("montage").Montage;exports.Point=Montage.create(Montage,{init:{enumerable:!1,value:function(e,t){return this.x=e===null?0:e,this.y=t===null?0:t,this}},interpolate:{enumerable:!1,value:function(e,t,n,r){var i,s;return i=t.x+(n.x-t.x)*e,s=t.y+(n.y-t.y)*e,r>0&&(i=Math.round(i*r)/r,s=Math.round(s*r)/r),exports.Point.create().init(i,s)}},x:{enumerable:!0,value:0},y:{enumerable:!0,value:0}})