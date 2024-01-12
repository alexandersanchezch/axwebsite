import Fade from 'react-reveal/Fade'
import React from 'react'

const Portfolio = ({
    title,
    subtitle,
    description1,
    description2,
    description3,
    description4,
    ctalink,
    ctatext,
}) => {
    return (
        <div id="portfolio">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h2>{title}</h2>

                        <h6 className="mt-4">{subtitle}</h6>

                        <Fade>
                            <div className="card mt-4">
                                <div className="img">
                                    <img
                                        src="./assets/img/lvdere-projects-weebo.png"
                                        alt="2"
                                    />
                                </div>
                                <div className="text">
                                    <h3>WeeBo</h3>
                                    <p>{description1}</p>
                                </div>
                            </div>
                        </Fade>

                        <Fade>
                            <div className="card mt-4">
                                <div className="img">
                                    <img
                                        src="./assets/img/lvdere-projects-travelfly.png"
                                        alt="4"
                                    />
                                </div>
                                <div className="text">
                                    <h3>Travel Fly Store</h3>
                                    <p>{description2}</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6">
                        <Fade>
                            <div className="card">
                                <div className="img">
                                    <img
                                        src="./assets/img/lvdere-projects-centroesteticoandino.png"
                                        alt="1"
                                    />
                                </div>
                                <div className="text">
                                    <h3>Centro Estetico Andino</h3>
                                    <p>{description3}</p>
                                </div>
                            </div>
                        </Fade>

                        <Fade>
                            <div className="card mt-4">
                                <div className="img">
                                    <img
                                        src="./assets/img/lvdere-projects-auzealous.png"
                                        alt="3"
                                    />
                                </div>
                                <div className="text">
                                    <h3>Au Zealous</h3>
                                    <p>{description4}</p>
                                </div>
                            </div>
                        </Fade>

                        <div className="text-center mt-5 pt-4">
                            <a href={ctalink}>
                                <button className="btn mt-2">{ctatext}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
