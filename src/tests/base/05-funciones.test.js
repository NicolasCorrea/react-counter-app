import { getUser, getUsuarioActivo } from "../../base/05-funciones";


describe('test on 05-funciones', () => {

    test('getUser should return a object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();
        
        expect(user).toEqual(userTest)
        
    })
    
    test('getUserActivo should return a object', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'nicolas'
        };
        
        const user = getUsuarioActivo('nicolas');
        
        expect(user).toEqual(userTest)
        
    })


})
