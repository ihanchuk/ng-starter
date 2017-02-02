module.exports=function(){
    describe("easy test",function(){
        const ang = require("angular");
        it("Test if angular is defined",function(){
            return expect(ang).to.be.object;
        });
    });
};
