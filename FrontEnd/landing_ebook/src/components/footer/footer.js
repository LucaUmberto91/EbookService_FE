import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'

export default function Footer(){

    return(
        <>
            <div className='container-fluid'>
                <div className='row footer-panel p-4'>
                    <div className='col-10 offset-1 col-sm-5 text-center'>
                        <h3>LOGO</h3>
                        <p>Storia dell'azienda e mission</p>
                        <p>Contatti</p>
                    </div>
                    <br></br>
                    <div className='col-10 offset-1 col-sm-5 offset-sm-1 text-center'>
                        <h3>INFO</h3>
                        <p>Privacy Policy</p>
                        <p>Termini e condizioni d'uso</p>
                        <p>Collegamenti esterni</p>
                        <p>Pagamenti</p>
                    </div>
                </div>
                {/* Copyright */}
                <div className='row copyright'>
                    <div className='col-12 text-light text-center p-3'>
                        © 2021 - 2022 React Book Project | All rigth are reserved to
                        <a className="link-footer text-light" href="https://github.com/LucaUmberto91" target="_blank"> Luca Umberto Miraglia </a>
                    </div>
                {/* Copyright */}
                </div>
            </div>
        </>
    )
}