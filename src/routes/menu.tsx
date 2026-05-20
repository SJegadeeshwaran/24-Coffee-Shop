import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — The Cafe" },
      { name: "description", content: "Explore our full coffee menu — espressos, lattes, mochas and more." },
    ],
  }),
});

const menu = {
  Coffee: [
    { name: "Caffe Latte", desc: "Fresh brewed coffee and steamed milk", price: "$2.95", hot: true },
    { name: "Caffe Americano", desc: "Espresso shots and light layer of crema", price: "$3.06" },
    { name: "Cappuccino", desc: "Espresso, well-frothed layer of foam", price: "$4.00" },
    { name: "Iced Caramel Latte", desc: "Espresso, milk, ice and caramel sauce", price: "$4.75" },
    { name: "Caramel Mocchiato", desc: "Espresso, vanilla-flavored syrup and milk", price: "$2.54" },
    { name: "Espresso Macchiato", desc: "Rich espresso with milk and foam", price: "$2.98" },
  ],
  Specialty: [
    { name: "Iced Caffe Mocha", desc: "Espresso, bittersweet mocha sauce, milk and ice", price: "$2.60" },
    { name: "Vanilla Latte", desc: "Espresso, milk with vanilla and cream", price: "$3.65" },
    { name: "White Chocolate Mocha", desc: "Espresso, white chocolate, milk and cream", price: "$2.70", hot: true },
    { name: "Iced Smoked Latte", desc: "Espresso, ice, with smoked butterscotch", price: "$3.85" },
    { name: "Iced Gingerbread Latte", desc: "Espresso, milk, ice and gingerbread flavor", price: "$3.90" },
    { name: "Frappuccino", desc: "Espresso and smoothed layer of foam", price: "$3.00" },
  ],
};

function MenuPage() {
  const [tab, setTab] = useState<keyof typeof menu>("Coffee");

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-script text-2xl text-primary">What happens here</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl font-bold uppercase tracking-wide">
          Our Coffee <span className="text-gradient-gold">Menu</span>
        </motion.h1>
        <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />

        <div className="mt-12 flex justify-center gap-2 flex-wrap">
          {Object.keys(menu).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key as keyof typeof menu)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-medium transition-all ${
                tab === key ? "bg-primary text-primary-foreground shadow-warm" : "border border-border text-muted-foreground hover:text-primary"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-x-12 gap-y-6"
      >
        {menu[tab].map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="group border-b border-border pb-5 hover:border-primary transition-colors"
          >
            <div className="flex justify-between items-baseline gap-4">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wider flex items-center gap-2">
                {item.name}
                {item.hot && <span className="text-[10px] uppercase bg-accent text-accent-foreground px-2 py-0.5 rounded-full">Hot</span>}
              </h3>
              <span className="font-display text-xl text-primary font-bold">{item.price}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
