montageDefine("07a3bed","ui/composer/swipe-composer",{dependencies:["montage","ui/composer/composer"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/composer/composer").Composer;t.SwipeComposer=r.create(i,{load:{value:function(){document.addEventListener("touchstart",this,!0)}},unload:{value:function(){document.removeEventListener("touchstart",this,!0)}},_startX:{enumerable:!1,value:0},_startY:{enumerable:!1,value:0},_deltaX:{enumerable:!1,value:0},_deltaY:{enumerable:!1,value:0},_threshold:{enumerable:!1,value:50},_thresholdSwipeAngle:{enumerable:!1,value:20},_startTimestamp:{enumerable:!1,value:0},captureTouchstart:{value:function(e){this._reset();var t=e.touches,n=t[0];this._startX=n.clientX,this._startY=n.clientY,this._startTimestamp=e.timeStamp,document.addEventListener("touchmove",this,!0),document.addEventListener("touchend",this,!0),document.addEventListener("touchcancel",this,!0)}},_reset:{enumerable:!1,value:function(){this._startX=0,this._startY=0,this._deltaX=0,this._deltaY=0,this._startSwipeAngle=null}},_startSwipeAngle:{enumerable:!1,value:null},captureTouchcancel:{value:function(e){document.removeEventListener("touchmove",this,!0),document.removeEventListener("touchend",this,!0),document.removeEventListener("touchcancel",this,!0)}},captureTouchmove:{value:function(e){e.preventDefault();var t=e.changedTouches[0],n,r;this._deltaX=t.clientX-this._startX,this._deltaY=t.clientY-this._startY;var i=this._deltaX,s=this._deltaY,o=this._threshold,u=this._findSwipeAngle(i,s);this._startSwipeAngle!=null&&Math.abs(this._startSwipeAngle-u)>this._thresholdSwipeAngle&&(this._startSwipeAngle=null),this._startSwipeAngle==null&&(this._startSwipeAngle=u,this._startX=t.clientX,this._startY=t.clientY,this._deltaX=0,this._deltaY=0),i>o&&s>o?r="DIAGONAL":i>o&&s<o?this._deltaX>0?r="RIGHT":r="LEFT":i<o&&s>o&&(this._deltaY>0?r="DOWN":r="UP");if(i!=0||s!=0)n=document.createEvent("CustomEvent"),n.initCustomEvent("swipemove",!0,!1,null),n.direction=r,n.angle=this._startSwipeAngle,n.velocity=this._findVelocity(e.timeStamp-this._startTimestamp),n.startX=this._startX,n.startY=this._startY,n.dX=this._deltaX,n.dY=this._deltaY,this.dispatchEvent(n)}},_findSwipeAngle:{enumerable:!1,value:function(e,t){var n=-1*(Math.atan2(t,e)*180/3.14);return n.toFixed(2)}},captureTouchend:{value:function(e){if(e==null)return;var t=Math.abs(this._deltaX),n=Math.abs(this._deltaY),r=this._threshold,i,s;if(t<r&&n<r){this.captureTouchcancel();return}document.removeEventListener("touchmove",this,!0),t>r&&n>r?i="DIAGONAL":t>r&&n<r?this._deltaX>0?i="RIGHT":i="LEFT":t<r&&n>r&&(this._deltaY>0?i="DOWN":i="UP"),s=document.createEvent("CustomEvent"),s.initCustomEvent("swipe",!0,!1,null),s.direction=i,s.angle=this._startSwipeAngle,s.velocity=this._findVelocity(e.timeStamp-this._startTimestamp),s.startX=this._startX,s.startY=this._startY,s.dX=this._deltaX,s.dY=this._deltaY,this.dispatchEvent(s)}},_findVelocity:{enumerable:!1,value:function(e){return Math.sqrt(this._deltaX*this._deltaX+this._deltaY*this._deltaY)/e}}})}})