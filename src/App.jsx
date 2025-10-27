import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FeatureCard, PriceCard } from './components/Cards';
import { PRODUCTS, PRICING } from './data';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brandBlue/10 via-brandCyan/20 to-brandOrange/20" />
      <div className="container-max py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Simplify. Automate. <span className="gradient-text">Scale 10X</span>.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Ready-to-use Excel templates and micro‑automations that replace hours of manual work with clean dashboards, alerts, and workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="btn-gradient px-4 py-2 rounded-xl font-semibold">Browse Templates</a>
            <a href="#contact" className="px-4 py-2 rounded-xl font-semibold border">Contact</a>
          </div>
          <p className="mt-4 text-xs text-slate-500">Loved by 1,000+ operators</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard icon={<span>⚡</span>} title="Automations" desc="Trigger reorder, overdue follow‑ups, and daily digests automatically."/>
          <FeatureCard icon={<span>📊</span>} title="Dashboards" desc="See P&L, cash, leads, and stock in one clean view."/>
          <FeatureCard icon={<span>📦</span>} title="Templates" desc="Plug‑and‑play Excel files for sales, finance, ops, HR."/>
          <FeatureCard icon={<span>🛡</span>} title="Best Practices" desc="Built‑in formulas, checks, and SOPs to prevent mistakes."/>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="container-max py-12">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured templates</h2>
      <p className="text-slate-600 mt-1">Hand‑picked tools to kickstart your systems.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {PRODUCTS.map(p => (
          <div key={p.id} className="card p-5 flex flex-col">
            <div className="aspect-video rounded-xl bg-gradient-to-tr from-slate-100 via-white to-slate-100 grid place-items-center text-3xl">📈</div>
            <h3 className="mt-4 font-semibold">{p.name}</h3>
            <p className="text-sm text-slate-600">{p.blurb}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="font-semibold">₹{p.price.toLocaleString()}</div>
              <div className="flex gap-2">
                <a className="px-3 py-2 rounded-xl border text-sm" href="#demo">Demo</a>
                <a className="px-3 py-2 rounded-xl btn-gradient text-sm" href="https://www.instamojo.com/" target="_blank" rel="noreferrer">Buy</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="container-max py-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Simple pricing</h2>
        <p className="text-slate-600 mt-1">One‑time payments. Lifetime files. Instant download.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {PRICING.map(plan => <PriceCard key={plan.tier} {...plan} /> )}
      </div>
    </section>
  );
}

function FAQ() {
  const QAs = [
    {q: "How do I receive the templates?", a: "Immediately after purchase you get a download link and email receipt. Files are in .xlsx (and some .xlsm for macros) with setup videos."},
    {q: "Will these work with Google Sheets?", a: "Most templates work out‑of‑the‑box in Google Sheets. Advanced macro features are Excel‑only; a Sheets variant or instructions are included when possible."},
    {q: "Do I get updates?", a: "Yes. All purchases include free bug‑fixes and improvements for 6 months. All‑Access includes all new releases for 12 months."},
    {q: "Can I use these commercially?", a: "You can use them inside your company for unlimited projects. Reselling or public sharing of files is not allowed."},
  ];
  return (
    <section id="faq" className="container-max pb-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Frequently asked questions</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {QAs.map(qa => (
          <div key={qa.q} className="card p-5">
            <h3 className="font-semibold">{qa.q}</h3>
            <p className="text-sm text-slate-600 mt-1">{qa.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Products />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
