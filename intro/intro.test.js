// const sum = require('./intro');
// describe("Testing Sum function", () => {
//     test("checking the result ", () => {
//         expect(sum(2, 2)).not.toBe(5)
//     })

//     it("this will add the 2 number", () => {
//         expect(sum(2, 2)).toBe(4)
//     })
//     // it("toBe",()=>{
//     //     const oj={};
//     //     expect(oj).toBe({})
//     // })
//     it("toEqual", () => {
//         const oj = {};
//         expect(oj).toEqual({})
//     })

// })



// //truthy and falsy
// //falsy null undefined 0 ""

// describe("truthy and falsy", () => {
//     it("null", () => {
//         const n = null;
//         expect(n).toBeFalsy()
//         //  expect(n).toBeTruthy()
//         expect(n).toBeNull()
//         expect(n).not.toBeUndefined()
//     })
// })

// //numbers
// describe("numbers", () => {
//     test("greater ", () => {
//         const val = 2 + 2;
//         expect(val).toBeGreaterThan(3)
//         expect(val).toBeGreaterThanOrEqual(4)
//         expect(val).toBeLessThan(5)
//         expect(val).toBeLessThanOrEqual(4)
//     });

//     test("greater ", () => {
//         const val = 2.0 + 1.0;
//         expect(val).toBeCloseTo(2.9999999)
//     })
// })


// //strings

// describe("strings",()=>{
//     it("ckecking th estrings",()=>{
//         expect("team").not.toMatch(/I/)
//     })
// })

// //arrays
// describe("arrays",()=>{
//      const arr=[1,2,3,4,5,6,7];
//      it("",()=>{
//         expect(arr).toContain(3)
//      })
 
// })


// //exception 

// function exceptionThrow(){
//     throw new Error("Cannot  Contain anything")
// }
// describe("Exception",()=>{
   
//     expect(()=> exceptionThrow()).toThrow(Error)
// })


let fruits=["apple","mango","grapes"]
beforeAll(()=>{
    console.log("Before All")
})
beforeEach(()=>{
    console.log("Before Each")
    let fruits=["apple","mango","grapes"]
})

afterEach(()=>{
    console.log("After Each")
})

afterAll(()=>{
    console.log("After All")
})


describe("Checking the hooks",()=>{
test("adds banna at end",()=>{
    fruits.push("banana")
    expect( fruits[fruits.length-1]).toBe("banana")

})
test("add pineapple in first",()=>{
    fruits.unshift("pineapple")
    expect( fruits[0]).toBe("pineapple")

})
test("return the length",()=>{
    fruits.unshift("watermelon")
    expect( fruits[0]).toBe("watermelon")

})
 
})