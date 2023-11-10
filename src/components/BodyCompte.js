import React, { useState } from 'react'
import '../styles/bodyCompte.css';

function BodyCompte() {
    const [valeurSelectionnee, setValeurSelectionnee] = useState('');

    const handleChangement = (e) =>{
        setValeurSelectionnee(e.target.value);
    }

    return (
        <>
            <div className='line0'></div>
            <div className='line'></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <button className='little button'>Mes informations</button>
                        <button className='little button'>Historique des commandes</button>
                        <button className='little button'>Mes avis</button><br />
                        <button className='little button'>Mes favoris</button><br />
                        <button>Deconnexion</button>
                    </div>
                    <div className="col-md-9">
                        <h2 className='text-upercase mb-3'>Informations personnelles</h2>
                        <div className='line1'></div>

                        <div className='information mt-3'>
                            Nom : Lorem ipsum dolor sit amet,<br />
                            Prenom : Lorem ipsum dolor sit amet,<br />
                            Mot de passe : Lorem ipsum dolor sit amet,<br />
                            Email : Lorem ipsum dolor sit amet,<br />
                            Numero de téléphone : Lorem ipsum dolor sit amet,<br />
                            Adresse de livraison : Lorem ipsum dolor sit amet,<br />
                            Adresse de facturation : Lorem ipsum dolor sit amet,<br />
                        </div>
                        <button className='mt-3'>modifier</button>

                        <h2 className='text-upercase newsletter'>newsletter</h2>
                        <div className='line1'></div>
                        <div className='mt-3 mb-4'>Abonnez vous à la newsletter ! Ne ratez pas nos offres exceptionnels sur votre article préféré !</div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="oui"
                                    checked={valeurSelectionnee === 'oui'}
                                    onChange={handleChangement}
                                />
                                OUI
                            </label><br/>
                            <label>
                                <input
                                    type="radio"
                                    value="non"
                                    checked={valeurSelectionnee === 'non'}
                                    onChange={handleChangement}
                                />
                                NON
                            </label>
                        </div>
                        <button className='mt-3'>enregistrer</button>

                    </div>
                </div>
            </div>
        </>
        
    )
}

export default BodyCompte