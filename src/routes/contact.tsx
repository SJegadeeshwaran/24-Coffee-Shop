import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — The Cafe" },
      { name: "description", content: "Get in touch with The Cafe — visit us, call us or send a message." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-script text-2xl text-primary">Say hello</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl font-bold">
          Get in <span className="text-gradient-gold">Touch</span>
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          {[
            { icon: MapPin, label: "Visit", value: "42, MG Road, Indiranagar, Bengaluru 560038" },
            { icon: Phone, label: "Call", value: "+91 98765 43210" },
            { icon: Mail, label: "Email", value: "hello@thecafe.in" },
            { icon: Clock, label: "Hours", value: "Tue – Sun, 8:00 AM – 11:00 PM" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 p-6 rounded-2xl bg-secondary/40 hover:bg-secondary transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                <c.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="font-display text-lg font-semibold mt-1">{c.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
          className="p-8 rounded-3xl bg-card shadow-soft space-y-4"
        >
          <h2 className="font-display text-3xl font-bold">Send us a message</h2>
          <input required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary transition-colors" />
          <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary transition-colors" />
          <textarea required placeholder="Your message" rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary transition-colors resize-none" />
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-4 rounded-full bg-primary text-primary-foreground font-medium uppercase tracking-wider text-sm shadow-warm"
          >
            {sent ? "Message sent ✓" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
