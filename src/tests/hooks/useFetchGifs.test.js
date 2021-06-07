import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests File useFetchGifs', () => {
   
    test('Must return initial state', async() => {
       
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('Space'));
        const {data, loading}=result.current;

        await waitForNextUpdate({timeout: 2000 });
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });

    test('Must return an arr images and loading in false', async() => {

        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('Space'));

        await waitForNextUpdate({timeout: 2000});
        
        const {data, loading}=result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });
    
});
