import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Tests File GifExpertApp', () => {

    test('Show component <GifExpertApp/>', () => {

        const wrapper=shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('Must show a list of categories', () => {
        
        const categories=['Space', 'Andromada'];
        const wrapper=shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    
});
