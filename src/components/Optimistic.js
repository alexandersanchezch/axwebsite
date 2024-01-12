import React from 'react'
import { Fade } from 'react-reveal'

function Optimistic({ title, description1, description2 }) {
    return (
        <div id="services">
            <div className="container-fluid  ">
                <div className="row">
                    <div className="col-md-6 order-2 order-md-1 left d-flex justify-content-center align-items-start flex-column">
                        <Fade cascade>
                            <div className="text">
                                <h2 className="darkest-blue">{title}</h2>
                                <h6 className="mt-3 gray font-weight-normal ">
                                    {description1}
                                </h6>
                                <h6 className="mt-3 gray font-weight-normal ">
                                    {description2}
                                </h6>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6 order-1 order-md-2 right">
                        <Fade>
                            <img
                                src="./assets/img/services-img.png"
                                className="right-img full-img"
                                alt=""
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Optimistic
