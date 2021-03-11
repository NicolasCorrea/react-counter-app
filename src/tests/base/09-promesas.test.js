import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('test on 09-promesas', () => {

    test('should return a hero async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual(heroes[0]);
                done();
            });
    })

    test('should return a error if hero doenst exist', (done) => {
        const id = 10;

        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });

    })


})
