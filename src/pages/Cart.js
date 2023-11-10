import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/cart.css';

function Cart() {
    return (
        <>
            <div className="container container-largeur">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <Link to="/eshop">
                                    <li className="breadcrumb-item">Eshop /</li>
                                </Link>
                                <Link to="/cart">
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    > Panier</li>
                                </Link>
                            </ol>
                        </nav>
                        <Link to="/cart">
                            <i className="fa-solid fa-2x fa-cart-plus"></i>
                        </Link>
                    </div>
                </div>
                <div className="recap">
                    <p>Récapitulatif du panier</p>
                </div>

                <div
                    className="d-flex justify-content-between align-items-center border-product"
                >
                    <div className="product d-flex align-items-center">
                        <img width="30%" src='' alt="" />
                        <div className="mx-4">
                            <h5>Title product</h5>
                            <span>Numéro de produit P000</span>
                        </div>
                    </div>
                    <div className="price">
                        <p>36</p>
                    </div>
                    <div className="qte bg-secondary">
                        <i className="fa-solid fa-minus mx-4"></i><span className="fs-4">1</span>
                        <i className="fa-regular fa-2x fa-plus mx-4"
                        ></i>
                    </div>
                    <div className="delete">
                        <i
                            // (click)="removeItem(productItem.id)"
                            className="fa-solid fa-2x fa-xmark"
                        ></i>
                    </div>
                </div>

                <div className="sous-total container-largeur">
                    <h4 className="float-end">
                        <strong> Sous Total : 22 </strong>
                    </h4>
                </div>
            </div>
            <section className="container container-largeur d-flex mx-auto my-5">
                <Link to='/eshop'><button
                    className="mx-2"
                >Continuer mes achats</button></Link>

                <Link to='/commande'><button
                    className="mx-2"
                >Passer commande</button></Link>
            </section>

            <br /><br />


            <h1 className="text-center">Ton panier est vide</h1>

        </>
    )
}

export default Cart