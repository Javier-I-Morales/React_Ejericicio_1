import React from "react";


const Header = () => {
    return ( 
        <div class="container-fluid">
            <div className="container">
                <header class="  d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <h1>
                        <b>Bienvenido a "Mi Tienda"</b> 
                    </h1>
                    <div class="col-md-3 text-end">
                        <button type="button" class="btn btn-primary me-2">Entrar</button>
                        <button type="button" class="btn btn-primary">Logue<em>ATR</em></button>
                    </div>
                </header> 
            </div> 

        </div>
        
    );
}
 
export default Header;