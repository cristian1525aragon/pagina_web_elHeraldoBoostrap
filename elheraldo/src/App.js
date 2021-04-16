
import { Fragment } from 'react';
import './App.css';

import Footer from './componets/Footer';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import Noticia from './componets/Noticia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Fragment>
       <Header titulo='EL HERALDO' />
       <Navbar />
       <Noticia></Noticia>
       <Footer > </Footer>
       </Fragment>
       
     
      </header>
    </div>
  );
}

export default App;
