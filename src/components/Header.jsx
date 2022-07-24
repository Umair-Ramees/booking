import React from "react"

export default function Header () {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src="images/Logo.png" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span>Whitepaper</span></a>
                        </li>
                        <li className="nav-item text-white">
                            <a className="nav-link" href="nft_booking_roadmap.html">Roadmap</a>
                        </li>
                        <li className="nav-item text-white">
                            <a className="nav-link" href="nft_Lounge.html">NFT Lounge,</a>
                        </li>
                        <li className="nav-item text-white active_items">
                            <a className="nav-link" href="index.html#TeamGroup">Team</a>
                        </li>
                        <li className="nav-item text-white">
                            <a className="nav-link" href="#">Jobs</a>
                        </li>
                        <li className="nav-item text-white">
                            <a className="nav-link" href="#">Connect Wallet</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
