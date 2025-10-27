import React from 'react';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-max py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="10XGrowthEdge logo" className="h-8 w-8" />
            <span className="font-bold">10XGrowthEdge</span>
          </div>
          <p className="text-sm text-slate-600 mt-3">
            Excel templates and micro‑automations to simplify, systemize, and scale your business.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Templates</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Sales & CRM</li>
            <li>Finance & Accounts</li>
            <li>Operations</li>
            <li>Manufacturing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>About</li>
            <li>Contact</li>
            <li>Refund Policy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div id="contact">
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-3 text-sm text-slate-600">
            <p><strong>Email:</strong> <a href="mailto:info@10xgrowthedge.com">info@10xgrowthedge.com</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">+91 99999 99999</a></p>
            <p className="mt-2">Business hours: Mon–Sat 9:00–18:00 IST</p>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container-max py-6 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} 10XGrowthEdge. All rights reserved.</span>
          <span>Built with ❤️ using React + Tailwind</span>
        </div>
      </div>
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999?text=Hello%2C%20I%20need%20help%20with%20my%20order"
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 z-50 rounded-full shadow-lg p-3"
        style={{ background: 'var(--brand-gradient)' }}
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.08C21 6.57 16.52 2 11 2S1 6.57 1 12.08c0 2.25.74 4.32 2.02 6.02L1 23l5.23-1.35A9.94 9.94 0 0 0 11 22c5.52 0 10-4.57 10-9.92z" fill="white" opacity="0.08"/>
          <path d="M17.22 14.03c-.3-.15-1.76-.87-2.03-.97-.26-.1-.45-.15-.64.15-.18.3-.71.97-.87 1.17-.16.2-.32.22-.62.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.32.45-.48.15-.16.2-.27.3-.45.1-.18.05-.34-.02-.5-.07-.16-.64-1.53-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.18 0-.47.07-.72.34-.26.26-1 1-1 2.43s1.03 2.82 1.17 3.02c.15.2 2.02 3.08 4.9 4.32 2.07.9 2.92.98 3.98.82 1.02-.15 1.76-.65 2.01-1.28.25-.62.25-1.15.18-1.27-.07-.12-.26-.2-.56-.35z" fill="white"/>
        </svg>
      </a>
    </footer>
  );
}
