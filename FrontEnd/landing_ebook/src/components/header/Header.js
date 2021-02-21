import React from 'react';

const URL_PRINC = 'http://localhost:8080/archivio/loginUtente';
const PATH_USERS = '?email=gianmarco.polizzi@hotmail.it';

export default function Header(){

    const getUtenti = async() => {
        console.log('Dati');
        await fetch(URL_PRINC+PATH_USERS)
        .then(response => response.json())
        .then((users) => {
            return (
                console.log(users),
                users
             )
        }
        )
    }
        
    
    return(
        <>
        <header className="Header">
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <h1>Ciao sono l'Header</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 offset-3">
                        <button onClick={getUtenti} className="btn btn-info">Chiama dati</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        {/*
                        {
                        getUtenti.map((users, index) => {
                            
                            return (
                            <h2 key={index}>{users}</h2>
                            )
                            
                        })
                    }
                         */}
                    
                    </div>
                    
                </div>
            </div>
        </header>
        </>
    )
}