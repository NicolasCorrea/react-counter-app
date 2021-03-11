import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('test on 02 template string', () => {
    
    test('getSaludo should return Hola nicolas!', () => {
        const name = "Nicolas";
        
        const regard = getSaludo(name);
        
        expect(regard).toBe("Hola "+name+"!");
    })
    
    
    test('getSaludo should be return hola carlos! when no params ', () => {
        const regard = getSaludo();
        
        expect(regard).toBe("Hola carlos!");
    })
    
})

