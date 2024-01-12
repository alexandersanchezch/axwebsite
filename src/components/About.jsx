import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

SwiperCore.use([Pagination])

const About = ({ title, subtitle, review1, review2, review3 }) => {
    return (
        <div id="about">
            <img src="./assets/vector/bg-about.svg" className="bg" alt="bg" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <Fade>
                            <h2>{title}</h2>

                            <h6 className="f-200 mt-3">{subtitle}</h6>
                        </Fade>
                    </div>
                    <div className="col-md-7">
                        <Zoom>
                            <Swiper
                                pagination={true}
                                spaceBetween={50}
                                onSlideChange={() =>
                                    console.log('slide change')
                                }
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <div className="testimonial">
                                        <div className="header">
                                            <div className="user-info">
                                                <div className="user-img">
                                                    <img
                                                        src="./assets/img/lvdere-Federico-Monti.png"
                                                        alt="client"
                                                    />
                                                </div>
                                                <div className="ms-lg-4 ms-2">
                                                    <h6>Federico Monti</h6>
                                                    <small>
                                                        CEO & Founder
                                                        @notarify.io
                                                    </small>
                                                </div>
                                            </div>
                                            <img
                                                src="./assets/img/lvdere-customer-notarify.png"
                                                alt="Federico Monti"
                                                className="logo"
                                            />
                                        </div>
                                        <div className="body">
                                            <p>{review1}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial">
                                        <div className="header">
                                            <div className="user-info">
                                                <div className="user-img">
                                                    <img
                                                        src="./assets/img/lvdere-Diego-Endrizzi.png"
                                                        alt="client"
                                                    />
                                                </div>
                                                <div className="ms-lg-4 ms-2">
                                                    <h6>Diego Endrizzi</h6>
                                                    <small>
                                                        Entrepreneur
                                                        @diego_endrizzi_official
                                                    </small>
                                                </div>
                                            </div>
                                            <img
                                                src="./assets/img/lvdere-customer-wewe.png"
                                                alt="Diego Endrizzi"
                                                className="logo"
                                            />
                                        </div>
                                        <div className="body">
                                            <p>{review2}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial">
                                        <div className="header">
                                            <div className="user-info">
                                                <div className="user-img">
                                                    <img
                                                        src="./assets/img/lvdere-Samuele-Dassati.png"
                                                        alt="client"
                                                    />
                                                </div>
                                                <div className="ms-lg-4 ms-2">
                                                    <h6>Samuele Dassati</h6>
                                                    <small>
                                                        CEO & Founder IoT
                                                        StartUp @igloo.ooo
                                                    </small>
                                                </div>
                                            </div>
                                            <img
                                                src="./assets/img/lvdere-customer-igloo.png"
                                                alt="starbucks"
                                                className="logo"
                                            />
                                        </div>
                                        <div className="body">
                                            <p>{review3}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide> */}
                            </Swiper>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
