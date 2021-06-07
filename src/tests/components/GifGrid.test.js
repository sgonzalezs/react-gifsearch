import React from 'react';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
// Simulamos una peticion del custom hook
jest.mock('../../hooks/useFetchGifs');

describe('Tests file GifGrid', () => {

    const category='software';

    test('show component', () => {
        //Simulamos el objeto que retorna el custom hook
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper=shallow( <GifGrid category={category} /> );
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('Must show items when images are loaded', () => {
        
        const images=[{
            id:'ABC',
            url:'http://localhost/sample.jpg',
            title:'Sample title'
        }];
        useFetchGifs.mockReturnValue({
            data:images,
            loading:false
        });
        const wrapper=shallow( <GifGrid category={category} /> );
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(images.length);
    });
    
});
