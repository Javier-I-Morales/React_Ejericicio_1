import React from 'react';
import {Fragment} from 'react';
import './changuito.css';
import Articulo from './Articulo'

const Changuito = ({changuito, setChanguito}) => {

    return (
        <Fragment>
            <div class="changuito">
                <h3>Changuito de Compras</h3>
                {
                    changuito.map(
                        (producto, index) => (
                            <Articulo 
                                key = { index }
                                producto = { producto }
                                changuito = { changuito }
                                setChanguito={ setChanguito }
                            />
                        )
                    )
                }
            </div>
        </Fragment>
     );
}
 
export default Changuito;