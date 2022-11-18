// One-Time Setup
// In some cases, you only need to do setup once, at the beginning of a file. This can be especially
//  bothersome when the setup is asynchronous, so you can't do it inline. Jest provides beforeAll and afterAll hooks to handle this situation.

let fruits=["apple","mango","grapes"]
beforeAll(()=>{
    console.log("Before All")
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
 
})



//Scoping
// By default, the beforeAll and afterAll blocks apply to every test in a file. You can also group tests 
// together using a describe block. When they are inside a describe block, the beforeAll and afterAll blocks only
//  apply to the tests within that describe block.

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll


// Order of Execution

// Jest executes all describe handlers in a test file before it executes any of the actual tests. 
// This is another reason to do setup and teardown inside before* and after* handlers rather than inside the describe blocks. 
// Once the describe blocks are complete, by default Jest runs all the tests serially in the order they were encountered in the collection phase,
//  waiting for each to finish and be tidied up before moving on.


describe('describe outer', () => {
    console.log('describe outer-a');
  
    describe('describe inner 1', () => {
      console.log('describe inner 1');
  
      test('test 1', () => console.log('test 1'));
    });
  
    console.log('describe outer-b');
  
    test('test 2', () => console.log('test 2'));
  
    describe('describe inner 2', () => {
      console.log('describe inner 2');
  
      test('test 3', () => console.log('test 3'));
    });
  
    console.log('describe outer-c');
  });
  
  // describe outer-a
  // describe inner 1
  // describe outer-b
  // describe inner 2
  // describe outer-c
  // test 1
  // test 2
  // test 3



//   General Advice
// if a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. 
// To run only one test with Jest, temporarily change that test command to a test.only:

test.only('this will be the only test that runs', () => {
    expect(true).toBe(false);
  });
  
  test('this test will not run', () => {
    expect('A').toBe('A');
  });