montageDefine("e98bf51","demo/array-demo",{dependencies:["../shim-array","../iterator"],factory:function(e,t,n){e("../shim-array");var r=e("../iterator"),i=[1,2,3],s=new r(i);s.forEach(console.log);var s=new r(i.iterate(0,2));s.forEach(console.log),console.log(Array.from([1,2,3]))}})