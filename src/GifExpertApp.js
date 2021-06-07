import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=({defaultCategories=[]})=>{

    // const [categories, setCategories] = useState(['space']);
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd=()=>{
    //     /**
    //      * 1 - Obtenemos las categorias del primer estado con ...categories
    //      * y agregamos la nueva categoria (Space)
    //      */

    //     // const newCategories=[...categories, 'Space'];
    //     // setCategories(newCategories);

    //     /**
    //      * 2 - Obtenemos el estado anterior por medio de un callback
    //      * y agregamos la nueva categoria (Space)
    //      */
    //     setCategories((catgs)=>{
    //         return [...catgs, 'space'];
    //     });
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
                {
                    categories.map((category)=>{
                        return(
                            <GifGrid 
                                key={category} 
                                category={category} 
                            />
                        )
                    })
                }
        </>
    );
}

export default GifExpertApp;