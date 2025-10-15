import React from "react";
import { SearchBar, SearchFilters } from "./SearchBar";
import { motion } from "framer-motion";

interface Props {
  onFiltersChange?: (filters: SearchFilters) => void;
}

export const Hero: React.FC<Props> = ({ onFiltersChange }) => {
  return (
    <section className="relative pt-24 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=60"
          className="w-full h-full object-cover"
          alt="Hero cars"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-white"
        >
          <p className="uppercase tracking-wide text-sm font-medium text-white/70 mb-4">
            Compre Online. Retire Hoje.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Rápido, Simples e Fácil
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mb-10">
            Encontre o carro perfeito entre centenas de ofertas verificadas.
            Pesquise por marca, modelo, tipo e muito mais.
          </p>
        </motion.div>
        <SearchBar onChange={onFiltersChange} />
      </div>
    </section>
  );
};
