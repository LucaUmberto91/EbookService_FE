import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registrazione.css';



export default function Registrazione(props){

    const [utente, setUtente] = useState('');


    const registraUtente = (e) => {
        e.preventDefault();
        let nome = document.getElementById('inputName').value;
        let cognome = document.getElementById('inputSurname').value;
        let email = document.getElementById('inputEmail').value;
        setUtente({name : nome, surname : cognome, email : email})
    }

    

    useEffect(() => {
        console.log('Hook utente: ',utente);
        //Spedisco le info
        if(utente!==''){
            props.inviaDatiUtente(utente);
        }
    },[utente])


    return(
        <>
            <div className='container-fluid registrazione'>
                <div className='row'>
                    <div className='col-10 offset-1 col-md-5'>
                        <h4 className='titolo text-center'>L'anima di un individuo risiede nei libri che legge...</h4>
                    </div>
                    <div className='col-10 offset-1 col-md-5 offset-md-1'>
                        <form className='form-reg' onSubmit={registraUtente}>
                            <h2 className='text-center'>Iscriviti Gratis</h2>
                            <p className='text-center'>Iscriviti gratuitamente per iniziare a scaricare e leggere i nostri e-book direttamente sul tuo dispositivo</p>
                            <div className='form-group ml-3 mr-3'>
                                <label>Nome</label>
                                <input type='name' className='form-control' id='inputName' placeholder='Mario'></input>
                            </div>
                            <div className='form-group ml-3 mr-3'>
                                <label>Cognome</label>
                                <input type='surname' className='form-control' id='inputSurname' placeholder='Rossi'></input>
                            </div>
                            <div className='form-group ml-3 mr-3'>
                                <label>Indirizzo Email</label>
                                <input type='email' className='form-control' id='inputEmail' placeholder='example@email.it'></input>
                            </div>
                            <br></br>
                            <div className='text-center'>
                                <button type="submit" className="btn btn-success">REGISTRATI</button>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}