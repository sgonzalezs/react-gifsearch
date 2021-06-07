import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Tests file AddCategory.js', () => {

    const setCategories=jest.fn();
    let wrapper=shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper=shallow(<AddCategory setCategories={setCategories} />);
    });

    test('test Snapshot component', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    }); 

    test('must change the input', () => {
        
        const input=wrapper.find('input');
        const value='Technology';
        input.simulate('change', {target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('NO post submit', () => {
       wrapper.find('form').simulate('submit', {preventDefault:()=>{}}); 
       expect(setCategories).not.toHaveBeenCalled();
    });

    test('Must call setCategories and clean the textbox', () => {

        const value='Movies';
        wrapper.find('input').simulate('change', {target:{value}});
        
        wrapper.find('form').simulate('submit', {preventDefault:()=>{}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);

        // Validamos que se haya llamado el metodo setCategories con una funcion
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
});
