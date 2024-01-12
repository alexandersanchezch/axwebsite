import React from 'react'
import Fade from 'react-reveal/Fade'

const SocialLinks = () => {
    return (
        <div id="social-links" className="py-5">
            <Fade bottom cascade>
                <div className="container-fluid social d-flex justify-content-center align-items-center">
                    <div className="item">
                        <img
                            src="./assets/vector/partner-lvdere-wewe.svg"
                            alt="wewe lvdere partner"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="./assets/vector/partner-lvdere-notarify.svg"
                            alt="notarify lvdere partner"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="./assets/vector/partner-lvdere-digithon.svg"
                            alt="digithon lvdere partner"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="./assets/vector/partner-lvdere-igloo.svg"
                            alt="igloo lvdere partner"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="./assets/vector/partner-lvdere-orbity.svg"
                            alt="orbity lvdere partner"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default SocialLinks
