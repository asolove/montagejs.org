montageDefine("ff685ea","ui/moviepopup.reel/moviepopup",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.Moviepopup=r.create(i,{TRAILER_URL:{value:"http://www.youtube.com/embed/%s"},player:{value:null},opening:{value:!1},handleCloseButtonAction:{value:function(){this.close()}},openTrailer:{value:function(e){this.player.src=this.TRAILER_URL.replace("%s",e),this.open()}},open:{value:function(){this.opening=!0,this.needsDraw=!0}},close:{value:function(){this.player.src=null,this.closing=!0,this.needsDraw=!0}},draw:{value:function(){this.opening?(this.element.classList.add("moviepopup-open"),this.opening=!1):this.closing&&(this.element.classList.remove("moviepopup-open"),this.closing=!1)}}})}})