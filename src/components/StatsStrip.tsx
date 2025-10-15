import React from "react";

const stats = [
  { value: "120K", label: "Carros à Venda" },
  { value: "45K", label: "Reviews de Usuários" },
  { value: "5M", label: "Visitas Mensais" },
  { value: "1.2K", label: "Lojas Parceiras" },
];

export const StatsStrip: React.FC = () => {
  return (
    <section className="py-14 bg-white border-t border-b border-gray-100">
      <div className="container-responsive grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="text-2xl font-bold tracking-tight text-gray-900">
              {s.value}
            </div>
            <div className="text-[11px] uppercase tracking-wide text-gray-500 font-medium">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
