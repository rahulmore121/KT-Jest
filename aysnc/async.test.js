const asyn=require('./async')

describe("Testing async ",()=>{
    it("Async function return promise",async ()=>{
        const res=await asyn();
        expect(res).toBe("Resolved")
    })
})