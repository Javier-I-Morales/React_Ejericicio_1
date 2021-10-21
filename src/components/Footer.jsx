import React from 'react';


const Footer = ({frase}) => {
    return ( 
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Locales</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contacto</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Nosotros</a></li>
        </ul>
        <p class="text-center text-muted">Una Compañia Familiar © 2021 Company, Inc</p>
      </footer>
    </div> );
}
 
export default Footer;