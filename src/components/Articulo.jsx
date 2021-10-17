import React from 'react'
import { Fragment } from 'react';


const Articulo = ({producto, productos, changuito, setChanguito}) => {

    const {id , articulo, precio} = producto;

    const seleccionarProducto = (id) => {

        var producto = productos.filter(
            producto => producto.id === id
        )[0];
        setChanguito([...changuito, producto]);
    }

    const eliminarProducto = (id) => {
        // me quedo con los productos que no son el q borro
        console.log(producto.key)
        const pro = []
        //const pro = changuito.filter(producto => producto.id !== id)
        changuito.forEach( element => { element.id !== id ? pro.push(element) : id = -1 })
        setChanguito(pro)
    }

    return (
        <Fragment>
            <div>
                <h3>{id} - {articulo} - {precio}</h3>
                {
                    productos
                    ?
                        <button 
                            type='button'
                            onClick={ () => seleccionarProducto(id)}
                        >Comprar
                        </button>
                    :
                        <button
                            type='button'
                            onClick={ () => eliminarProducto(id)}
                        >Eliminar
                        </button>
                }
            </div>
        </Fragment>
        );
}
 
export default Articulo;