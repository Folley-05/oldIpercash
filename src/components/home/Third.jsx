import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import './third.css'
import user1 from './assets/user1.png'
import receiver1 from './assets/receiver1.png'
import Bitcoin from './assets/Bitcoin.png'

function Third() {
    return (
        <div>
            <div className="text-title">
                <h2 className="">Only 3 Steps to credit a mobile mobile account</h2>
            </div>
            <div className="desktop-step">
                <div className="step">
                    <div className="step-head">
                        <h3 className="">STEP 1</h3>
                        <p className="">Create your account</p>
                        <hr />
                    </div>
                    <div className="step-body">
                        <img src={user1} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="step">
                    <div className="step-head">
                        <h3 className="">STEP 2</h3>
                        <p className="">Fill receiver information</p>
                        <hr />
                    </div>
                    <div className="step-body">
                        <img src={receiver1} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="step">
                    <div className="step-head">
                        <h3 className="">STEP 3</h3>
                        <p className="">Pay with your credit card or cryptocurrency</p>
                        <hr />
                    </div>
                    <div className="step-body">
                        <img src={Bitcoin} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            <div className="tablet-step">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className="step">
                        <div className="step-head">
                            <h3 className="">STEP 1</h3>
                            <p className="">Create your account</p>
                            <hr />
                        </div>
                        <div className="step-body">
                            <img src={user1} className="img-fluid" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step">
                        <div className="step-head">
                            <h3 className="">STEP 2</h3>
                            <p className="">Fill receiver information</p>
                            <hr />
                        </div>
                        <div className="step-body">
                            <img src={receiver1} className="img-fluid" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step">
                        <div className="step-head">
                            <h3 className="">STEP 3</h3>
                            <p className="">Pay with your credit card or cryptocurrency</p>
                            <hr />
                        </div>
                        <div className="step-body">
                            <img src={Bitcoin} className="img-fluid" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                ...
                </Swiper>
            </div>
            <div className="mobile-step">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className="step">
                        <div className="step-head">
                            <h3 className="">STEP 1</h3>
                            <p className="">Create your account</p>
                            <hr />
                        </div>
                        <div className="step-body">
                            <img src={user1} className="img-fluid" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step">
                        <div className="step-head">
                            <h3 className="">STEP 2</h3>
                            <p className="">Fill receiver information</p>
                            <hr />
                        </div>
                        <div className="step-body">
                            <img src={receiver1} className="img-fluid" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step">
                        <div className="step-head">
                            <h3 className="">STEP 3</h3>
                            <p className="">Pay with your credit card or cryptocurrency</p>
                            <hr />
                        </div>
                        <div className="step-body">
                            <img src={Bitcoin} className="img-fluid" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                ...
                </Swiper>
            </div>
        </div>
    )
}

export default Third

