
describe('test on demo.test.js', () => {
    
    test('should be equals strings', () => {
       const message = "Hello world";
       
       const message2 = `Hello world`;
       
       expect(message).toBe(message2);
       
    })
    
})

