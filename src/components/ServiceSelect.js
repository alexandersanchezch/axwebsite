import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation])

function ServiceSelect({
    title,

    service1title,
    service1description,
    service2title,
    service2description,
    service3title,
    service3description,
    service4title,
    service4description,
    service5title,
    service5description,

    step1title,
    step1description,

    step2title,
    step2description,

    step3title,
    step3description,

    ctalink,
    cta,
}) {
    let navigationPrevRef = React.useRef(null)
    let navigationNextRef = React.useRef(null)

    const [swiperIndex, setSwiperIndex] = React.useState(0)
    const swiperData = [
        {
            img: './assets/vector/community-web3-starterpack.svg',
        },
        {
            img: './assets/vector/community-academy.svg',
        },
        {
            img: './assets/vector/community-exclusive.svg',
        },
        {
            img: './assets/vector/community-mentoring.svg',
        },
        {
            img: './assets/vector/community-support.svg',
        },
    ]
    return (
        <div className="services-container">
            <div id="services">
                <img
                    src="./assets/vector/bg-services-line.svg"
                    className="line"
                    alt="bg"
                />
                <div className="container-fluid ">
                    <img
                        src="./assets/vector/bg-services.svg"
                        className="stroke"
                        alt="bg"
                    />

                    <h2 className="darkest-blue text-center mb-5 upper">
                        {title}
                    </h2>

                    <div className="services_selector upper">
                        <div className="services_selector_left">
                            <button
                                className="swiper_navigation_btn_left"
                                ref={navigationPrevRef}
                            >
                                <img src="./assets/img/btn-left.png" alt="" />
                            </button>
                            <button
                                className="swiper_navigation_btn_right"
                                ref={navigationNextRef}
                            >
                                <img src="./assets/img/btn-right.png" alt="" />
                            </button>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                onSlideChange={(e) =>
                                    setSwiperIndex(e.activeIndex)
                                }
                                onSwiper={(swiper) => {
                                    setTimeout(() => {
                                        swiper.params.navigation.prevEl =
                                            navigationPrevRef.current
                                        swiper.params.navigation.nextEl =
                                            navigationNextRef.current
                                        swiper.navigation.destroy()
                                        swiper.navigation.init()
                                        swiper.navigation.update()
                                    })
                                }}
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                }}
                            >
                                <SwiperSlide>
                                    <h3 className="darkest-blue mb-3">
                                        {service1title}
                                    </h3>
                                    <p className="gray">
                                        {service1description}
                                    </p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <h3 className="darkest-blue mb-3">
                                        {service2title}
                                    </h3>

                                    <p className="gray">
                                        {service2description}
                                    </p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <h3 className="darkest-blue mb-3">
                                        {service3title}
                                    </h3>

                                    <p className="gray">
                                        {service3description}
                                    </p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <h3 className="darkest-blue mb-3">
                                        {service4title}
                                    </h3>

                                    <p className="gray">
                                        {service4description}
                                    </p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <h3 className="darkest-blue mb-3">
                                        {service5title}
                                    </h3>

                                    <p className="gray">
                                        {service5description}
                                    </p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="services_selector_right">
                            <img src={swiperData[swiperIndex]?.img} alt="" />
                        </div>
                    </div>

                    <div className="services_selector_cards">
                        <div className="services_selector_card active">
                            <p className="services_selector_card_title mb-5px  fs-16px weight-7">
                                /01
                            </p>
                            <p className="fs-32px weight-7 mb-10px">
                                {step1title}
                            </p>
                            <p className="fs-18px dark-gray">
                                {step1description}
                            </p>
                        </div>
                        <div className="services_selector_card">
                            <p className="services_selector_card_title mb-5px  fs-16px weight-7">
                                /02
                            </p>
                            <p className="fs-32px weight-7 mb-10px">
                                {step2title}
                            </p>
                            <p className="fs-18px dark-gray">
                                {step2description}
                            </p>
                        </div>
                        <div className="services_selector_card">
                            <p className="services_selector_card_title mb-5px  fs-16px weight-7">
                                /03
                            </p>
                            <p className="fs-32px weight-7 mb-10px">
                                {step3title}
                            </p>
                            <p className="fs-18px dark-gray">
                                {step3description}
                            </p>
                        </div>
                    </div>
                    <a href={ctalink}>
                        <button className="services_selector_btn fs-16px white weight-7">
                            {cta}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceSelect
