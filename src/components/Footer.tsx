import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Coffee className="w-7 h-7 text-primary" />
            <span className="font-display text-xl font-bold">The Cafe</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            Crafting the perfect cup since 2010. A place where coffee meets warmth and community.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary">Opening Hours</h4>
          <ul className="text-sm space-y-2 text-cream/80">
            <li className="flex justify-between"><span>Mon</span><span>Closed</span></li>
            <li className="flex justify-between"><span>Tue – Fri</span><span>8:00 AM – 11:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>9:00 AM – 12:00 AM</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>9:00 AM – 11:00 PM</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary">Contact</h4>
          <ul className="text-sm space-y-3 text-cream/80">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>42, MG Road, Indiranagar, Bengaluru 560038</span></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+91 98765 43210</span></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>hello@thecafe.in</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary">Follow Us</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © 2026 The Cafe. All rights reserved .
      </div>
    </footer>
  );
}
