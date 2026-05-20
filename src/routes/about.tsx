import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import cake from "@/assets/cake.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — The Cafe" },
      { name: "description", content: "Our story, our values, and the passion behind every cup." },
    ],
  }),
});

function About() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-script text-2xl text-primary">Who we are</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl font-bold mt-2">
          About <span className="text-gradient-gold">The Cafe</span>
        </motion.h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          What started as a tiny corner shop in 2010 is now a beloved neighborhood institution. We're a family of coffee nerds, pastry lovers and community builders.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src={cake} alt="Our craft" loading="lazy" width={1024} height={768} className="rounded-3xl shadow-warm" />
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-4xl font-bold">Our craft, your moment.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We source ethically. We roast in small batches. We brew with care. Every step matters, because the moment that cup reaches your hand — that's what it's all about.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "15+", l: "Years" },
              { n: "50k", l: "Cups served" },
              { n: "12", l: "Bean origins" },
            ].map((s) => (
              <div key={s.l} className="text-center p-4 rounded-2xl bg-secondary/50">
                <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
