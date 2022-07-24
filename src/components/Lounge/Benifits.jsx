import React from "react";

export default function Benifits() {
    return <>
        <section className="benifits">
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-5">
                    <h1 className="title font_50 text-center" data-aos="fade-up" data-aos-duration="1000">Benifits</h1>
                    <p className="header_desc text-center margin_10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        Why we are best in the market?
                    </p>
                </div>
            </div>
            <div className="row pt-5 mt-2">
                <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                    <div className="benifits_box text-center">
                        <img src="images/wifi.png" alt="" />
                        <h3 className="benifits_title">
                            Airdrop
                        </h3>
                        <p className="desc">
                            An <span style="color:var(--color_02);"> airdrop </span> of the <span style="color:var(--color_02);"> Priority Pass NFT </span> worth <span style="color:var(--color_02);">420$ </span>Owners will be able to trade or activate the NFT on the platform to receive a Priority pass Card IRL
                        </p>
                    </div>
                </div>

                <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="benifits_box text-center">
                        <img src="images/money-bag-iso-premium.png" alt="" />
                        <h3 className="benifits_title">
                            Giveaways
                        </h3>
                        <p className="desc">
                            <span style="color:var(--color_02);">Automatically inserted</span> and considered for exclusive Real-life vacations giveaways.
                        </p>
                    </div>
                </div>

                <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="benifits_box text-center">
                        <img src="images/Staking.png" alt="" />
                        <h3 className="benifits_title">
                            Staking
                        </h3>
                        <p className="desc">
                            Stake your <span style="color:var(--color_02);"> NFT </span> to earn miles and convert them to <span style="color:var(--color_02);"> Travel Services.</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row pt-5 mt-2  justify-content-center">
                <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                    <div className="benifits_box text-center">
                        <img src="images/pool.png" alt="" />
                        <h3 className="benifits_title">
                            Pool
                        </h3>
                        <p className="desc">
                            <span style="color:var(--color_02);">20% </span> shared pool from the marketplace's service fee net income
                        </p>
                    </div>
                </div>

                <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                    <div className="benifits_box text-center">
                        <img src="images//boy-iso-premium.png" alt="Concierge" />
                        <h3 className="benifits_title">
                            Concierge
                        </h3>
                        <p className="desc">
                            Private concierge service. <span style="color:var(--color_02);"> 24/7 </span> travel assistance From shopping to restaurant to clubs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section>
    </>
}