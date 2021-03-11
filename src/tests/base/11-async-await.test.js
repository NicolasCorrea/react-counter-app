import { getImagen } from "../../base/11-async-await"

describe('test on 11-async-await', () => {

    test('should return a url of a image', async () => {

        const url = await getImagen();

        expect(url.includes("https://")).toBe(true)

    })


})
