import React from 'react'
import { useFetchGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {
    
    const {data: images, loading} = useFetchGifs( category);

    return (

        <>
            <h3  className = "card animate__animated animate__fadeInDown"> { category } </h3>

            { loading  && <p className="card animate__animated animate__flash">Loading</p>}

            <div className="card-grid">

                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />     
                    ))
                }

            </div>    


            {/* codigo usado para mostrar imagenes 
            
            <ol>
                {
                    images.map( ({id, title}) => (
                        <li key = {id}> {title}</li>
                    ))
                }
            </ol> */}

            {/* codigo usado para useEffect 
            <h3> { count } </h3>
            <button onClick={ () => setCount( count + 1 )}></button> */}    
        </>
    )

    
}


