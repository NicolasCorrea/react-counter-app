import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('test on 08-imp-exp', () => {
    
    test('should return a hero by id', () => {
        
        const id = 1;
        
        const heroe = getHeroeById(id);
        
        const heroesData = heroes;
        
        const heroeData = heroesData.find(h => h.id = id);
        
        expect(heroe).toEqual(heroeData)
        
    })
    
    test('should return undefined if hero doesnt exist', () => {
        
        const id = 10;
        
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);
    })
  
    test('should return an array of dc heros', () => {
        const owner = "DC";
        
        const heros = getHeroesByOwner(owner);
        
        const heroesData = heroes;
        const heroesFilter = heroesData.filter(h => h.owner === owner);
        expect(heros).toEqual(heroesFilter)
        
    })
    
    test('should return an array of marvel heros', () => {
        const owner = "Marvel";
        
        const heros = getHeroesByOwner(owner);
        
        const heroesData = heroes;
        const heroesFilter = heroesData.filter(h => h.owner === owner);
        expect(heros.length).toBe(2)
        
    })
    
})
