import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Coffee, Award, Leaf, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-coffee.jpg";
import desserts from "@/assets/desserts.jpg";
import cake from "@/assets/cake.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "The Cafe — Just Coffee For You" },
      { name: "description", content: "Welcome to The Cafe — handcrafted coffee, fresh pastries and warm ambiance." },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.7 0.13 60 / 0.3), transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-script text-2xl text-primary mb-4">just</p>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-black leading-none text-gradient-gold">
              Coffee
            </h1>
            <p className="font-display text-3xl md:text-4xl text-espresso/80 mt-2 ml-2">for you</p>
            <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
              A cozy spot where every cup is brewed with love. Discover bold roasts, warm pastries and a friendly vibe.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/menu" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium uppercase tracking-wider text-sm shadow-warm hover:shadow-lg transition-all hover:-translate-y-0.5">
                View Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full font-medium uppercase tracking-wider text-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                Visit Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="animate-float">
              <img src={hero} alt="Cappuccino" className="rounded-full shadow-warm aspect-square object-cover" width={600} height={600} />
            </div>
            {/* Floating beans */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -inset-8 pointer-events-none">
              <div className="w-4 h-6 bg-espresso rounded-full absolute top-0 left-1/2" />
              <div className="w-3 h-4 bg-primary rounded-full absolute bottom-10 right-0" />
              <div className="w-3 h-5 bg-espresso/70 rounded-full absolute top-20 -left-2" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.img {...fadeUp} src={desserts} alt="Desserts" width={800} height={800} loading="lazy" className="rounded-3xl shadow-warm" />
          <motion.div {...fadeUp}>
            <p className="font-script text-2xl text-primary">Welcome to our</p>
            <h2 className="font-display text-5xl font-bold mt-2">coffee <span className="text-gradient-gold">cafe</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From bean to cup, we obsess over every detail. Our baristas hand-pick the finest beans from around the world and roast them with care.
            </p>
            <div className="mt-8 space-y-6">
              {[
                { icon: Coffee, title: "Roasting", desc: "Small-batch roasted weekly for peak freshness and flavor." },
                { icon: Award, title: "Grading Roasted Beans", desc: "Only specialty-grade beans make it into your cup." },
                { icon: Leaf, title: "Decaffeination", desc: "Natural Swiss water process keeps the taste, removes the caffeine." },
              ].map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BEST DAY */}
      <section className="py-24 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-5xl font-bold">The best day starts <span className="text-gradient-gold">here</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Start every morning the right way — with a warm cup, fresh-baked treats, and a smile from your favorite barista.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-accent font-medium uppercase tracking-wider text-sm group">
              Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.img {...fadeUp} src={cake} alt="Cake" width={1024} height={768} loading="lazy" className="rounded-3xl shadow-warm" />
        </div>
      </section>

      {/* AMBIANCE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p {...fadeUp} className="font-script text-2xl text-primary">What happens here</motion.p>
          <motion.h2 {...fadeUp} className="font-display text-4xl md:text-5xl font-bold tracking-wide uppercase">
            Warm & Friendly Ambiance
          </motion.h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />

          <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-10 text-left">
            {[
              { title: "Coffee To Go", desc: "Grab your favorite brew on the move — same quality, faster service." },
              { title: "Lunch", desc: "Fresh sandwiches and salads made daily with local ingredients." },
              { title: "Sweets", desc: "House-made pastries, cakes and cookies that pair perfectly with coffee." },
              { title: "Business Lunch", desc: "Quiet corners and fast WiFi — perfect for meetings or work." },
              { title: "Breakfast", desc: "All-day breakfast plates that fuel your morning right." },
              { title: "Morning Coffee", desc: "Start your day with a perfectly pulled espresso or creamy latte." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-b border-border pb-6"
              >
                <h3 className="font-display text-xl font-semibold uppercase tracking-wider text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
