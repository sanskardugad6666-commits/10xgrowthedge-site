import React from 'react';

export function FeatureCard({ icon, title, desc }) {
  return (
    <div className="card p-5">
      <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">{icon}</div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

export function PriceCard({ tier, price, desc, points, featured }) {
  return (
    <div className={`card p-6 ${featured ? 'border-2 border-slate-900' : ''}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">{tier}</h3>
        {featured && <span className="text-xs bg-slate-900 text-white px-2 py-1 rounded-full">Recommended</span>}
      </div>
      <p className="text-sm text-slate-600">{desc}</p>
      <div className="text-3xl font-extrabold mt-2">₹{price.toLocaleString()}</div>
      <ul className="mt-3 space-y-2 text-sm">
        {points.map(pt => <li key={pt} className="flex gap-2"><span>✔</span>{pt}</li>)}
      </ul>
      <a href="#buy" className="mt-4 inline-block btn-gradient px-4 py-2 rounded-xl font-semibold">Buy {tier}</a>
    </div>
  );
}
