import React from "react";
import { Car } from "../types/car";
import { motion } from "framer-motion";

interface Props {
  car: Car;
  onClick: () => void;
}

const formatPrice = (v: number) =>
  v.toLocaleString("en-US", { style: "currency", currency: "USD" });

export const CarCard: React.FC<Props> = ({ car, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl overflow-hidden shadow-soft border border-gray-100 flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-40 w-full">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          {car.badges?.map((b) => (
            <span
              key={b}
              className="px-2 py-0.5 text-xs font-medium rounded-md bg-emerald-600 text-white shadow-sm"
            >
              {b}
            </span>
          ))}
          {car.featured && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-brand-600 text-white shadow-sm">
              Destaque
            </span>
          )}
          {car.promoted && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-pink-600 text-white shadow-sm">
              Premium
            </span>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 leading-tight">
            {car.brand} {car.model}{" "}
            <span className="text-gray-400 font-normal">— {car.year}</span>
          </h3>
          <span className="text-sm font-semibold text-gray-900">
            {formatPrice(car.price)}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[11px] text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500" />{" "}
            {car.mileage} km
          </div>
          <div className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500" />{" "}
            {car.fuel}
          </div>
          <div className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500" />{" "}
            {car.transmission}
          </div>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2 mb-4">
          {car.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <button
            className="text-sm font-medium text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Ver Detalhes
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
          <span className="text-[11px] uppercase tracking-wide font-medium text-gray-400">
            {car.condition === "novo" ? "Novo" : "Usado"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
