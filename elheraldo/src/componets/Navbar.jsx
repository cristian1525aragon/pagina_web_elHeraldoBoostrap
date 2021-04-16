import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        
        <nav class="navbar navbar-default" data-spy="affix" data-offset-top="178">
    <div class="container-fluid">
      <ul class="nav navbar-nav">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Noticias</a></li>
        <li><a href="#">Judiciales</a></li>
        <li><a href="#">Deportes</a></li>
        <li><a href="#">Clasificados</a></li>
        <li><a href="#">Política</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
            aria-expanded="false">Más <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Región</a></li>
            <li><a href="#">Pais</a></li>
            <li><a href="#">Mundo</a></li>
            <li><a href="#">Entretenimiento</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
    );
}

export default Navbar;