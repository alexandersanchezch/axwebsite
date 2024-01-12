import React from 'react'

function VideoSection({
    card1number,
    card2number,
    card3number,
    card4number,
    faq,
    faqsub,
}) {
    return (
        <div>
            <div id="services">
                <div className="container-fluid">
                    <div className="video-wrapper mb-150px">
                        <iframe
                            className="video-wrapper-img"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/DMPZ8saKAzY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <div className="video-wrapper-cards">
                            <div className="video-wrapper-card text-center">
                                <p className="darkest-blue fs-36px weight-8">
                                    20+
                                </p>
                                <p className="fs-20px darkest-blue weight-5">
                                    {card1number}
                                </p>
                            </div>
                            <div className="video-wrapper-card text-center">
                                <p className="darkest-blue fs-36px weight-8">
                                    10+
                                </p>
                                <p className="fs-20px darkest-blue weight-5">
                                    {card2number}
                                </p>
                            </div>
                            <div className="video-wrapper-card text-center">
                                <p className="darkest-blue fs-36px weight-8">
                                    30+
                                </p>
                                <p className="fs-20px darkest-blue weight-5">
                                    {card3number}
                                </p>
                            </div>
                            <div className="video-wrapper-card text-center">
                                <p className="darkest-blue fs-36px weight-8">
                                    20+
                                </p>
                                <p className="fs-20px darkest-blue weight-5">
                                    {card4number}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection
