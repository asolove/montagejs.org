montageDefine("9290b07","core/selector/abstract-semantics",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage,i=t.AbstractSemantics=r.create(r,{create:{value:function(e,t){var n=r.create(e,t),i=n.operators;return n.evaluatorArgumentLengths={},Object.keys(i).forEach(function(e){var t=i[e];n.evaluators[e]=function(){var e=Array.prototype.slice.call(arguments,0,t.length);return function(n,r,s){return t.apply(i,e.map(function(e){return e(n,r,s)}))}},n.evaluatorArgumentLengths[e]=t.length}),n}},evaluatorArgumentLengths:{value:null},compile:{value:function(e,t){var n=this;t={syntax:e,parents:t};if(e.type==="value")return function(e){return e};if(e.type==="parameters")return function(e,t){return t};if(e.type==="literal")return function(){return e.value};if(n.evaluators[e.type]){var r=n.evaluators[e.type],i=n.evaluatorArgumentLengths[e.type]||r.length,s=e.args.map(function(e){return n.compile(e,t)});return e.insensitive&&(s=s.map(function(e){return function(t,r,i){return e.call(n,t,r,i).toLowerCase()}})),r.apply(n,s.concat([t]))}throw new Error("Unknown evaluator "+e.type)}},evaluate:{value:function(e,t,n,r){return this.compile(e)(t,n,r)}}})}})