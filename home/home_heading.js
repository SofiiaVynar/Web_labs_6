import React from 'react';
import store from './Fotoes/store.png';
import './home_heading.css';

function Heading() {
    return (
        <section className="heading">
            <div className="heading-content">
                <div className="text">
                    <h2>La'laurel</h2>
                    <p>Ви просили - ми зробили! Наш персональний онлайн сайт парфумерії La'laurel.
                        Більше 1000 парфумів за вигідною ціною та з безкоштовною доставкою.</p>                              
                        
                    <h3>"Твої духи - твої правила."</h3>
                </div>
                <img src = {store} alt="Ексклюзивні духи" />
            </div>
        </section>
    );
}

export default Heading;
