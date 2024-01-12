import React from 'react'
import Fade from 'react-reveal/Fade'

const Services = ({
    title,
    subtitle,
    icon1title,
    icon1description,
    icon2title,
    icon2description,
    icon3title,
    icon3description,
    icon4title,
    icon4description,
    icon5title,
    icon5description,
    icon6title,
    icon6description,
    icon7title,
    icon7description,
    icon8title,
    icon8description,
}) => {
    return (
        <div className="services-container">
            <div id="services">
                <img
                    src="./assets/vector/bg-services-line.svg"
                    className="line"
                    alt="bg"
                />
                <div className="container-fluid">
                    <img
                        src="./assets/vector/bg-services.svg"
                        className="stroke"
                        alt="bg"
                    />
                    <div className="text">
                        <h2>{title}</h2>
                        <h6 className="mt-3">{subtitle}</h6>
                    </div>

                    <Fade bottom cascade>
                        <div className="row cards-container">
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="img">
                                        <img
                                            src="./assets/vector/feature-blockchain.svg"
                                            alt="feature-1"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>{icon1title}</h4>
                                        <p>{icon1description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="img">
                                        <img
                                            src="./assets/vector/feature-ai.svg"
                                            alt="feature-2"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>{icon2title}</h4>
                                        <p>{icon2description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="img">
                                        <img
                                            src="./assets/vector/feature-hosting.svg"
                                            alt="feature-3"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>{icon3title}</h4>
                                        <p>{icon3description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="img">
                                        <img
                                            src="./assets/vector/feature-ecommerce.svg"
                                            alt="feature-4"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>{icon4title}</h4>
                                        <p>{icon4description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="img">
                                        <img
                                            src="./assets/vector/feature-crypto.svg"
                                            alt="feature-4"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>{icon5title}</h4>
                                        <p>{icon5description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="img">
                                        <img
                                            src="./assets/vector/feature-iiot.svg"
                                            alt="feature-4"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>{icon6title}</h4>
                                        <p>{icon6description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="img">
                                        <img
                                            src="./assets/vector/feature-apps.svg"
                                            alt="feature-4"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>{icon7title}</h4>
                                        <p>{icon7description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="img">
                                        <img
                                            src="./assets/vector/feature-ads.svg"
                                            alt="feature-4"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>{icon8title}</h4>
                                        <p>{icon8description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Services
