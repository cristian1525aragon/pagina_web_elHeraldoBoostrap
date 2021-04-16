import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer>
         
         <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 well">
          <div class="col-md-3">
            <div class="panel panel-danger">
              <div class="panel-heading">
                <h3 class="panel-title">El Heraldo</h3>
              </div>
              

              <div class="panel-body">
                <p class="texto">El Heraldo es un periódico colombiano con sede en Barranquilla, fundado el 28 de
                  octubre de 1933 por Alberto Pumarejo, Juan B. Fernández Ortega y Luis Eduardo Manotas Llinás. Es en la
                  actualidad el diario de mayor circulación en la Región Caribe colombiana y quinto más leído a nivel
                  nacional.</p>
                <p class="text-center"><a href="https://elheraldo.co">Ir a la página principal</a></p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="panel panel-danger">
              <div class="panel-heading">
                <h3 class="panel-title">Contacto</h3>
              </div>
              <div class="panel-body">
                <p class="texto">Dirección sede Bogotá: Calle 88 # 13 A - 07</p>
                <p class="texto">Teléfono: (1)2185733</p>
                <p class="texto">correo electrónico: ElHeraldo@gmail.com </p>

              </div>
            </div>
          </div>


          <div class="col-md-3">
            <div class="panel panel-danger">
              <div class="panel-heading">
                <h3 class="panel-title">Links</h3>
              </div>
              <div class="panel-body">
                <ul class="nav nav-pills nav-stacked" >
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Noticias</a></li>
                  <li><a href="#">Judiciales</a></li>
                  <li><a href="#">Deportes</a></li>
                  <li><a href="#">Clasificados</a></li>
                  <li><a href="#">Política</a></li>
                </ul>
              </div>
            </div>
          </div>


          <div class="col-md-3">
            <div class="panel panel-danger">
              <div class="panel-heading">
                <h3 class="panel-title">suscribiete</h3>
              </div>
              <div class="panel-body">
                <p><span class="glyphicon glyphicon-usd"></span></p>
                <br></br>
                <p class="texto"> Suscribete al heraldo para poder recibir beneficios exclusivos y acceso a nuestras
                  revistas. </p>
                <center>
                  <button class="btn btn-danger">Suscribirme</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      </footer>
        
    );
}

export default Footer;