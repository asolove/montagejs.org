montageDefine("e98bf51","demo/lru-map-demo",{dependencies:["../lru-map"],factory:function(e,t,n){var r=e("../lru-map"),i=new r({a:10,b:20,c:30},3);i.set("a",10),console.log(i.toObject()),i.set("b",20),console.log(i.toObject()),i.set("d",40),console.log(i.toObject()),i["delete"]("d"),console.log(i.toObject())}})