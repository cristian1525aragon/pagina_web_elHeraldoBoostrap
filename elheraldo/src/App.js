
import { Fragment } from 'react';
import './App.css';

import Footer from './componets/Footer';
import Header from './componets/Header';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Fragment>
       <Header titulo='EL HERALDO' />
       <Navbar />
       <Footer style="font-family: Georgia, 'Times New Roman', Times, serif;"> </Footer>
       </Fragment>
       
     
      </header>
    </div>
  );
}

export default App;
