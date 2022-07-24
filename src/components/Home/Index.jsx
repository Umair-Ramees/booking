import React from "react";
import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import ReleventCollection from "./ReleventCollection";
import Whitepaper from "./Whitepaper";

export default function Home() {
    return <>
        <HeroSection />
        <Whitepaper />
        <OurTeam />
        <ReleventCollection />
    </>
}