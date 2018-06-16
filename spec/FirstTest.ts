describe("My first Test Suite", () =>{

    it("Test Case# 1", () =>{
    
        let a = 2;        
        expect(a).toBe(2);
    });    
       
    it("Test Case# 2",()=>{
        let a;
        expect(a).toBeUndefined();
   
    });

});