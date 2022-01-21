import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/header/Header';
import Registrazione from './components/header/Registrazione';
import Footer from './components/footer/footer';

const URL_REGISTRA = 'http://localhost:8080/archivio/registraUtente';

function App() {

  const [dati, setDati] = useState('');

  const invioDatiDB = () => {
    fetch(URL_REGISTRA, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dati),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}

useEffect(() => {
  if(dati!==''){
    invioDatiDB();
    console.log('Dati trasferiti ad APP: ', dati);
  }
},[dati])

  return (
    <>
    <Registrazione inviaDatiUtente={setDati}></Registrazione>

    <Header></Header>
    
    <div className="container">
      <div className="row">
          <div className="col-6 offset-3">
            <h2>Ciao sono il Body</h2>
          </div>
        </div>
    </div>

    <Footer></Footer>
    </>
  );
}

export default App;