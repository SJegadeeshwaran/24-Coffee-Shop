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
    { name: "Filter Coffee", desc: "Authentic South Indian degree filter coffee", price: "₹90", hot: true },
    { name: "Masala Chai", desc: "Spiced Indian tea with ginger and cardamom", price: "₹70" },
    { name: "Caffe Latte", desc: "Fresh brewed espresso and steamed milk", price: "₹220" },
    { name: "Cappuccino", desc: "Espresso with a well-frothed layer of foam", price: "₹240" },
    { name: "Iced Caramel Latte", desc: "Espresso, milk, ice and caramel sauce", price: "₹280" },
    { name: "Espresso Macchiato", desc: "Rich espresso with milk and foam", price: "₹180" },
  ],
  Specialty: [
    { name: "Iced Caffe Mocha", desc: "Espresso, bittersweet mocha sauce, milk and ice", price: "₹260" },
    { name: "Vanilla Latte", desc: "Espresso, milk with vanilla and cream", price: "₹250" },
    { name: "White Chocolate Mocha", desc: "Espresso, white chocolate, milk and cream", price: "₹290", hot: true },
    { name: "Cold Coffee with Ice Cream", desc: "Classic Indian cafe favourite with vanilla scoop", price: "₹260" },
    { name: "Rose Cardamom Latte", desc: "Espresso, milk, rose syrup and cardamom", price: "₹270" },
    { name: "Frappuccino", desc: "Blended iced coffee with cream", price: "₹300" },
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
