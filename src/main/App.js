import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import '../../src/custom.css';
import Rotas from './rotas';
import Navbar from '../components/navbar';
import 'toastr/build/toastr.min.js';
import 'toastr/build/toastr.css';

class App extends React.Component{
  
  render(){
    return(
    <>
      <Navbar/>
      <div className='container'>
        <Rotas/>
      </div>
    </>
    )
  }
}

export default App;
