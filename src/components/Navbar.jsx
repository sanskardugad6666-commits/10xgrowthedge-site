import React from 'react';

import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/90 border-b">
      <div className="container-max py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="10XGrowthEdge" className="h-9 w-9"/>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-lg">10XGrowthEdge</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#products" className="hover:text-slate-700">Templates</a>
          <a href="#pricing" className="hover:text-slate-700">Pricing</a>
          <a href="#faq" className="hover:text-slate-700">FAQ</a>
          <a href="#contact" className="hover:text-slate-700">Contact</a>
        </nav>
        <a href="#products" className="hidden md:inline-flex btn-gradient px-4 py-2 rounded-xl font-semibold">Get Started</a>
      </div>
    </header>
  );
}
