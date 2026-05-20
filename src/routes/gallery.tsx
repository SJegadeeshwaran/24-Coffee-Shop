import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import desserts from "@/assets/desserts.jpg";
import cake from "@/assets/cake.jpg";
import hero from "@/assets/hero-coffee.jpg";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — The Cafe" },
      { name: "description", content: "A peek inside our cafe — coffee, pastries and good vibes." },
    ],
  }),
});

const images = [
  { src: g1, alt: "Cafe interior" },
  { src: g2, alt: "Latte art" },
  { src: hero, alt: "Cappuccino" },
  { src: desserts, alt: "Ice cream" },
  { src: g3, alt: "Coffee beans" },
  { src: cake, alt: "Chocolate cake" },
];

function Gallery() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-script text-2xl text-primary">A glimpse of</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl font-bold">
          Our <span className="text-gradient-gold">Gallery</span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className={`overflow-hidden rounded-2xl shadow-soft group ${i % 5 === 0 ? "md:row-span-2 md:col-span-2" : ""}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
