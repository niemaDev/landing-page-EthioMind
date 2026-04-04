import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TrustSection from "./components/TrustSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <Navbar />
      <Home />
      <TrustSection />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}