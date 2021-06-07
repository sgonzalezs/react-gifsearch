import { getGifs } from "../../helpers/getGifs";

describe('Tests file getGifs.js fetch', () => {

    test('Must contain 10 elements', async() => {
       
        const gifs=await getGifs('Soccer');
        expect(gifs.length).toBe(10);
    });
    
    test('Must contain 0 elements', async() => {
       
        const gifs=await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
});
