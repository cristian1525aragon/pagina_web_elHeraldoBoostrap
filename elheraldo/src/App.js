
import { Fragment } from 'react';
import './App.css';
import Header from './componets/Header';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Fragment>
       <Header titulo='EL HERALDO' />
       <Navbar />

       </Fragment>
     
      </header>
    </div>
  );
}

export default App;
