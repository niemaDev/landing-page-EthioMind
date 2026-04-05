import React, { useState } from "react";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white font-bold text-xl">EthioMind</h1>

        <div className="hidden md:flex gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-black/90">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </div>
      )}
    </nav>
  );
}