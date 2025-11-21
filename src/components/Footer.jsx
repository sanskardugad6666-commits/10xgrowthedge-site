import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-white">
      <div className="container-max py-10 grid gap-6 md:grid-cols-4 text-sm text-slate-600">
        
        {/* Brand column */}
        <div>
          <div className="font-bold text-lg mb-2">10XGrowthEdge</div>
          <p>
            Excel templates and micro-automations to simplify, systemize,
            and scale your business.
          </p>
        </div>

        {/* Templates column */}
        <div>
          <h3 className="font-semibold mb-2">Templates</h3>
          <ul className="space-y-1">
            <li>Sales &amp; CRM</li>
            <li>Finance &amp; Accounts</li>
            <li>Operations</li>
            <li>Manufacturing</li>
          </ul>
        </div>

        {/* Company column */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>About</li>
            <li>Contact</li>
            <li>Refund Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Contact column – UPDATED */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          
          <p>
            Email:{" "}
            <a
              href="mailto:10xgrowthedge@gmail.com"
              className="text-slate-900 font-medium"
            >
              10xgrowthedge@gmail.com
            </a>
          </p>

          <p className="mt-1">
            WhatsApp:{" "}
            <a
              href="https://wa.me/918016202202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 font-medium"
            >
              +91 80162 02202
            </a>
          </p>

          <p className="mt-1">Business hours: Mon–Sat 9:00–18:00 IST</p>
        </div>
      </div>

      <div className="border-t text-xs text-slate-500 py-4">
        <div className="container-max flex flex-wrap items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} 10XGrowthEdge. All rights reserved.
          </span>
          <span>Built with ❤️ using React + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
