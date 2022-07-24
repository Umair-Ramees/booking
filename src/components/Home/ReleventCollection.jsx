import React from "react";

export default function ReleventCollection() {
    return <>
        <section className="Our_Best_Relevent">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 pr-lg-0">
                        <h1 className="our_best_title"data-aos="fade-up" data-aos-duration="1000">
                            Our Best NFT Collections
                        </h1>
                        <p className="our_best_desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                        </p>
                    </div>
                    <div className="col-md-2">                
                        <div className="our_navigaation">
                            <div className="swiper-button-prevour"><i className="fa-solid fa-chevron-left"></i></div>
                            <div className="swiper-button-nextour"><i className="fa-solid fa-chevron-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="swiper ourBestswiper">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1000">
                        <div className="slides_box">
                            <a href="#!">
                                <img src="images/Our_Best_NFT_03.webp" className="w-100" alt="Tour Travelings California 3" />
                            </a>
                            <div className="content_box">   
                                <h3 className="slide_box_title">
                                    Tour Travelings California
                                </h3>
                                <ul className="slide_ul">
                                    <li>
                                        <span>Current Bid</span>
                                        <h4>3ETH ($14,147)</h4>
                                    </li>
                                    <li>
                                        <span>Time Left</span>
                                        <h4>8H 30M 21S</h4>
                                    </li>
                                </ul>
                                <a href="#!" className="mint_now">Mint Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <div className="slides_box">
                            <a href="#!">
                                <img src="images/Our_best_NFT_02.webp" alt="Tour Travelings California 1" className="w-100" />
                            </a>
                            <div className="content_box">   
                                <h3 className="slide_box_title">
                                    Tour Travelings California
                                </h3>
                                <ul className="slide_ul">
                                    <li>
                                        <span>Current Bid</span>
                                        <h4>3ETH ($14,147)</h4>
                                    </li>
                                    <li>
                                        <span>Time Left</span>
                                        <h4>8H 30M 21S</h4>
                                    </li>
                                </ul>
                                <a href="#!" className="mint_now">Mint Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        <div className="slides_box">
                            <a href="#!">
                                <img src="images/Our_Best-NFT_01.webp" alt="Tour Travelings California 1" className="w-100" />
                            </a>
                            <div className="content_box">   
                                <h3 className="slide_box_title">
                                    Tour Travelings California
                                </h3>
                                <ul className="slide_ul">
                                    <li>
                                        <span>Current Bid</span>
                                        <h4>3ETH ($14,147)</h4>
                                    </li>
                                    <li>
                                        <span>Time Left</span>
                                        <h4>8H 30M 21S</h4>
                                    </li>
                                </ul>
                                <a href="#!" className="mint_now">Mint Now</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
}