import React, { useState, useMemo, useEffect } from "react";
import { Car } from "../types/car";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

const formatPrice = (v: number) =>
  v.toLocaleString("en-US", { style: "currency", currency: "USD" });

export const CarModal: React.FC<Props> = ({ car, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when modal opens or car changes
  useEffect(() => {
    if (isOpen && car) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, car]);

  // Combinar imagem principal com galeria adicional
  const allImages = useMemo(() => {
    if (!car) return [];
    const images = [car.image];
    if (car.images && car.images.length > 0) {
      // Adicionar apenas imagens que não sejam a principal
      const additionalImages = car.images.filter((img) => img !== car.image);
      images.push(...additionalImages);
    }
    return images;
  }, [car]);

  const hasMultipleImages = allImages.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const currentImage = allImages[currentImageIndex];

  if (!car) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header com Galeria de Imagens */}
              <div className="relative">
                <img
                  src={currentImage}
                  alt={`${car.brand} ${car.model} - Imagem ${
                    currentImageIndex + 1
                  }`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Navegação de imagens */}
                {hasMultipleImages && (
                  <>
                    {/* Botão anterior */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        previousImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    {/* Botão próximo */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
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

                    {/* Indicadores de imagem */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                      {allImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Contador de imagens */}
                    <div className="absolute bottom-20 right-4 px-2 py-1 bg-black/50 backdrop-blur rounded text-white text-sm">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  </>
                )}

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-gray-700 hover:text-gray-900 shadow-lg transition-colors z-10"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {car.badges?.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 text-sm font-medium rounded-lg bg-emerald-600 text-white shadow-sm"
                    >
                      {badge}
                    </span>
                  ))}
                  {car.featured && (
                    <span className="px-3 py-1 text-sm font-medium rounded-lg bg-brand-600 text-white shadow-sm">
                      Destaque
                    </span>
                  )}
                  {car.promoted && (
                    <span className="px-3 py-1 text-sm font-medium rounded-lg bg-pink-600 text-white shadow-sm">
                      Premium
                    </span>
                  )}
                </div>

                {/* Car title and price overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">
                        {car.brand} {car.model}
                      </h2>
                      <p className="text-white/80 text-lg">{car.year}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-white">
                        {formatPrice(car.price)}
                      </p>
                      <p className="text-white/80 text-sm uppercase tracking-wide">
                        {car.condition === "novo" ? "Novo" : "Usado"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-96 overflow-y-auto">
                {/* Quick specs */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {car.mileage.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">km</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {car.fuel}
                    </div>
                    <div className="text-sm text-gray-600">Combustível</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {car.transmission}
                    </div>
                    <div className="text-sm text-gray-600">Câmbio</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {car.type}
                    </div>
                    <div className="text-sm text-gray-600">Categoria</div>
                  </div>
                </div>

                {/* Galeria de Thumbnails */}
                {hasMultipleImages && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Galeria de Fotos
                    </h3>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {allImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? "border-brand-500 ring-2 ring-brand-200"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${car.brand} ${car.model} - Foto ${
                              index + 1
                            }`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {car.description && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Descrição
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {car.description}
                    </p>
                  </div>
                )}

                {/* Features */}
                {car.features && car.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Características
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {car.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-emerald-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 bg-brand-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-700 transition-colors">
                    Entrar em Contato
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Agendar Teste
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
