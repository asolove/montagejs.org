montageDefine("e98bf51","demo/weak-map-demo",{dependencies:["../weak-map"],factory:function(e,t,n){var r=e("../weak-map");/native/.test(r.toString())?console.log("Using native WeakMap"):console.log("Using shim WeakMap");var i=new r,s={};i.set(s,10),console.log(i.toString()),console.log(i.get(s))}})