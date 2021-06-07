import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('Tests file GifGridItem.js', () => {
    
    const title='Category Title';
    const url='http://localhost/category-image.jpg';
    const wrapper=shallow(<GifGridItem url={url} title={title} />);

    test('load Component', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('must contain a text', () => {

        const p=wrapper.find('p');
        expect(p.text().trim()).toBe(title);
        
    });

    test('must contain an image with url and title alt', () => {

        const img=wrapper.find('img')

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('must contain the class animate__fadeIn', () => {
        
        const div=wrapper.find('div');
        
        const class_animate=div.prop('className').split(" ")[2];
        const className=div.prop('className');

        expect(class_animate).toBe('animate__fadeIn');
        expect(className.includes('animate__fadeIn')).toBe(true);
        
    });
    
});
