import React from "react";
import { Navbar } from "../ui/NavBar";
import { HeroSection } from "../ui/HeroSection";
import { AboutSection } from "../ui/AboutSection";
import { Footer } from "../ui/Footer";

export const HomePage = () =>
{
    return (
        <div>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <Footer/>
        </div>
    )
}