montageDefine("e98bf51","spec/dict-spec",{dependencies:["../dict","./dict"],factory:function(e,t,n){var r=e("../dict"),i=e("./dict");describe("Dict",function(){i(r),it("should throw errors for non-string keys",function(){var e=r();expect(function(){e.get(0)}).toThrow(),expect(function(){e.set(0,10)}).toThrow(),expect(function(){e.has(0)}).toThrow(),expect(function(){e.delete(0)}).toThrow()})})}})