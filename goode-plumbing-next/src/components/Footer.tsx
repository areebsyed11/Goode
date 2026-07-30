import { Phone, Mail, MapPin } from "lucide-react";
import { Droplets } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#projects", label: "Projects" },
  { href: "#before-after", label: "Before & After" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Drain Cleaning",
  "Water Heaters",
  "Leak Repair",
  "Sewer Service",
  "Emergency Plumbing",
  "Commercial Plumbing",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/8 pb-24 md:pb-0 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-[#f97316]">
                <Droplets className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white">Goode Plumbing</div>
                <div className="text-xs text-brand-300">Clovis, CA</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional plumbing services for Clovis and the Central Valley. Licensed Lic. #941110.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="tel:+15594511887" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 border border-white/10 text-slate-400 hover:text-white hover:bg-white/15 transition-colors">
                <Phone className="h-4 w-4" />
              </a>
              <a href="mailto:info@goodeplumbing.com" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 border border-white/10 text-slate-400 hover:text-white hover:bg-white/15 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://wa.me/15594511887" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 border border-white/10 text-slate-400 hover:text-white hover:bg-white/15 transition-colors">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Quick Links</div>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Services</div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Contact</div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+15594511887" className="font-semibold text-white hover:text-brand-300 transition-colors">
                  (559) 451-1887
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@goodeplumbing.com" className="font-semibold text-white hover:text-brand-300 transition-colors break-all">
                  info@goodeplumbing.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">1044 San Jose Ave Ste 102<br />Clovis, CA 93612</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {year} Goode Plumbing. All rights reserved. Licensed Lic. #941110.
          </p>
          <p className="text-sm text-slate-600">
            Serving Clovis, CA &amp; the Central Valley
          </p>
        </div>
      </div>
    </footer>
  );
}
