import Fade from 'react-reveal/Fade'
import React from 'react'

const Hero = ({ img, dots, title, subtitle, btnText, btnLink }) => {
    return (
        <div id="hero">
            <div className="container-fluid">
                <img
                    src="./assets/vector/bg-hero-line.svg"
                    className="line"
                    alt="line"
                />
                <div className="row">
                    <div className="col-md-6 order-2 order-md-1 left d-flex justify-content-center align-items-start flex-column">
                        <Fade cascade>
                            <div>
                                <h1>{title}</h1>
                                <h4 className="mt-4">{subtitle}</h4>

                                <div>
                                    <a href={btnLink}>
                                        <button className="btn mt-4">
                                            {btnText}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6 order-1 order-md-2 right">
                        {dots ? (
                            <img
                                src="./assets/vector/bg-hero-dots.svg"
                                className="dots"
                                alt="dots"
                            />
                        ) : (
                            ''
                        )}
                        <Fade>
                            <img src={img} className="right-img" alt="" />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
