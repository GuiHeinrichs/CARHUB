import React, { useMemo } from "react";
import { cars } from "../data/cars";
import { CarCard } from "./CarCard";
import { SearchFilters } from "./SearchBar";
import { Car } from "../types/car";

interface Props {
  filters: SearchFilters;
  onCarClick: (car: Car) => void;
  searchQuery?: string;
}

export const CarGrid: React.FC<Props> = ({
  filters,
  onCarClick,
  searchQuery,
}) => {
  const filtered = useMemo(() => {
    return cars.filter((c) => {
      // Filtros existentes
      if (filters.brand && c.brand !== filters.brand) return false;
      if (filters.model && c.model !== filters.model) return false;
      if (filters.type && c.type !== filters.type) return false;
      if (filters.condition && c.condition !== filters.condition) return false;
      if (filters.price) {
        const [min, max] = filters.price.split("-").map(Number);
        if (c.price < min || c.price > max) return false;
      }

      // Busca por texto
      if (searchQuery && searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const searchableText = `${c.brand} ${c.model} ${c.type} ${c.fuel} ${
          c.transmission
        } ${c.description || ""}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }

      return true;
    });
  }, [filters, searchQuery]);

  return (
    <section className="py-14" id="listings">
      <div className="container-responsive">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              SUVs Mais Buscados
            </h2>
            <p className="text-gray-600 mt-1">
              {filtered.length}{" "}
              {filtered.length === 1
                ? "carro encontrado"
                : "carros encontrados"}
            </p>
          </div>
          <button className="text-sm font-medium text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
            Ver Todos
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
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum carro encontrado
            </h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Tente ajustar os filtros ou remover algumas seleções para ver mais
              resultados.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((c) => (
              <CarCard key={c.id} car={c} onClick={() => onCarClick(c)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
