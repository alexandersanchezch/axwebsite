import React from 'react'

function Twocards({
    plan1,
    plan2,
    price1,
    price2,
    plan1bullet1,
    plan1bullet2,
    plan1bullet3,
    plan1bullet4,
    plan1bullet5,
    plan2bullet1,
    plan2bullet2,
    plan2bullet3,
    plan2bullet4,
    plan2bullet5,
    cta1text,
    cta2text,
    cta1link,
    cta2link,
}) {
    return (
        <div>
            <div id="subscription">
                <div className="container-fluid">
                    <div className="cardsubscription-container">
                        <div className="cardsubscription trimestral-plan">
                            <h2>{plan1}</h2>
                            <p>{price1}</p>
                            <ul>
                                <li>{plan1bullet1}</li>
                                <li>{plan1bullet2}</li>
                                <li>{plan1bullet3}</li>
                                <li>{plan1bullet4}</li>
                                <li>{plan1bullet5}</li>
                            </ul>
                            <a href={cta1link}>
                                <button>{cta1text}</button>
                            </a>
                        </div>
                        <div className="cardsubscription annual-plan">
                            <h2>{plan2}</h2>
                            <p>{price2}</p>

                            <ul>
                                <li>{plan2bullet1}</li>
                                <li>{plan2bullet2}</li>
                                <li>{plan2bullet3}</li>
                                <li>{plan2bullet4}</li>
                                <li>{plan2bullet5}</li>
                            </ul>
                            <a href={cta2link}>
                                <button>{cta2text}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Twocards
