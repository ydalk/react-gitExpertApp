import React, { useState } from 'react'
import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd =()=>{
    //     //ejemplos para agregar un elemento
    //     //setCategories( cats => [ ...cats, 'HunterXHunter']);
    //     setCategories ( [...categories, 'HunterXHunter']);


    // }


    return (
        <>
          <h2> GifExpertApp </h2>
          <AddCategory setCategories={ setCategories} />  
          <hr />  
        
          
          <ol>
              { 
                  categories.map( category => (
                      //se debe declarar el key de los array que no sea n index
                      //return <li key={ category}> {category} </li>

                    <GifGrid
                        key={ category }
                        category={ category } 
                    />
                  ))
               }
          </ol>
        </>
    )
}

