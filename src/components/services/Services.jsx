
import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">Ce que j'offre</span>


        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Concepteur <br /> des Produits
                    </h3>
                </div>
                <span className="services__button" onClick={() =>toggleTab(1)}>Voir plus <i className="uil uil-arrow-right services__button-icon">
                    </i></span>

                    <div className={toggleState ===1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Concepteur des Produits</h3>
                            <p className="services__modal-description">
                                Je resoud les problèmes inhérants à la conception d'un produit dont il supervise toute la durée de vie.
                                D'où la conception est faite à la lumière des objectifs commerciaux et des contraintes budgétaires d'une entreprise...
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Je maitrise les logiciels de conception et modelisation d'un SI
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Respect des normes de qualité de la modélisation
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       J'adopte les méthodes et outils de résolution de problème
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Je position la marque de votre entreprise
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Conception, developpement et maquettage de produits de votre entreprise 
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">UI/ UX <br /> Designer</h3>
                </div>
                <span onClick={() =>toggleTab(2)} className="services__button">Voir plus <i className="uil uil-arrow-right services__button-icon">
                    </i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">UI/ UX Designer</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore nihil,
                                 et exercitationem distinctio velit quo dolorum iure commodi repudiandae, quisquam
                                  saepe omnis necessitatibus fugiat eum, soluta eaque. Sint, officiis!
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user interface
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       I create UX element interactions
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I position your company brand
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Design and mockupsof products for companies
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Visual <br /> Designer</h3>
                </div>
                <span onClick={() =>toggleTab(3)} className="services__button">Voir plus <i className="uil uil-arrow-right services__button-icon">
                    </i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore nihil,
                                 et exercitationem distinctio velit quo dolorum iure commodi repudiandae, quisquam
                                  saepe omnis necessitatibus fugiat eum, soluta eaque. Sint, officiis!
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user interface
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       I create UX element interactions
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I position your company brand
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Design and mockupsof products for companies
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>

    </section>
  )
}

export default Services