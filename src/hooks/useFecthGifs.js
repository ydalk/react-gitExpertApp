import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

//este codigo sirve para realizar una carga automática
export const useFetchGifs = ( category ) => {

    //cuando se usa por primera vez el FecthGifs se iplementa 
    //este estado que carga por defecto                                                                                                                                                                                                                                                           
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
            getGifs( category )
            .then ( imgs => {

                setState({
                    data:imgs,
                    loading: false
                });
            })
        }, [ category ]) //si dejo vacio el segundo parametro, que debe ser un array,
        //esto hace que solo se renderice una vez, si lo lleno se renderiza 

    return state; //data: [], loading: true

}