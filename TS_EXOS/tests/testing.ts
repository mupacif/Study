import {} from 'jasmine';
describe("Testing", () =>{
    it("should pass", () =>{
   let msg = "Welcome to TypeScript";
    //I want to print the msg first like a log
    expect(msg).toBe("Welcome to TypeScript")
    })
})