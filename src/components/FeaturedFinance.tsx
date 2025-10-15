import React from "react";
import { motion } from "framer-motion";

export const FeaturedFinance: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container-responsive grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="relative rounded-xl overflow-hidden shadow-soft aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60"
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-gray-900 hover:bg-white transition shadow-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Financiamento Flexível para Mais Brilho
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Obtenha uma simulação sem afetar seu score de crédito. Encontre
            condições especiais com nossa rede de parceiros. Processo rápido,
            transparente e seguro para colocar você no volante.
          </p>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition shadow-soft">
            Saiba Mais
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
