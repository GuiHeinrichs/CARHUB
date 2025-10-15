import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const formatPrice = (v) => v.toLocaleString("en-US", { style: "currency", currency: "USD" });
export const CarModal = ({ car, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Reset image index when modal opens or car changes
    useEffect(() => {
        if (isOpen && car) {
            setCurrentImageIndex(0);
        }
    }, [isOpen, car]);
    // Combinar imagem principal com galeria adicional
    const allImages = useMemo(() => {
        if (!car)
            return [];
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
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };
    const currentImage = allImages[currentImageIndex];
    if (!car)
        return null;
    return (_jsx(AnimatePresence, { children: isOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 bg-black/50 z-40", onClick: onClose }), _jsx(motion.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, className: "fixed inset-0 z-50 flex items-center justify-center p-4", onClick: onClose, children: _jsxs("div", { className: "bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: currentImage, alt: `${car.brand} ${car.model} - Imagem ${currentImageIndex + 1}`, className: "w-full h-64 object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }), hasMultipleImages && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: (e) => {
                                                    e.stopPropagation();
                                                    previousImage();
                                                }, className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }), _jsx("button", { onClick: (e) => {
                                                    e.stopPropagation();
                                                    nextImage();
                                                }, className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) }), _jsx("div", { className: "absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2", children: allImages.map((_, index) => (_jsx("button", { onClick: (e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex(index);
                                                    }, className: `w-2 h-2 rounded-full transition-colors ${index === currentImageIndex
                                                        ? "bg-white"
                                                        : "bg-white/50 hover:bg-white/75"}` }, index))) }), _jsxs("div", { className: "absolute bottom-20 right-4 px-2 py-1 bg-black/50 backdrop-blur rounded text-white text-sm", children: [currentImageIndex + 1, " / ", allImages.length] })] })), _jsx("button", { onClick: onClose, className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-gray-700 hover:text-gray-900 shadow-lg transition-colors z-10", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }), _jsxs("div", { className: "absolute top-4 left-4 flex flex-wrap gap-2", children: [car.badges?.map((badge) => (_jsx("span", { className: "px-3 py-1 text-sm font-medium rounded-lg bg-emerald-600 text-white shadow-sm", children: badge }, badge))), car.featured && (_jsx("span", { className: "px-3 py-1 text-sm font-medium rounded-lg bg-brand-600 text-white shadow-sm", children: "Destaque" })), car.promoted && (_jsx("span", { className: "px-3 py-1 text-sm font-medium rounded-lg bg-pink-600 text-white shadow-sm", children: "Premium" }))] }), _jsx("div", { className: "absolute bottom-4 left-4 right-4", children: _jsxs("div", { className: "flex items-end justify-between", children: [_jsxs("div", { children: [_jsxs("h2", { className: "text-2xl font-bold text-white mb-1", children: [car.brand, " ", car.model] }), _jsx("p", { className: "text-white/80 text-lg", children: car.year })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-3xl font-bold text-white", children: formatPrice(car.price) }), _jsx("p", { className: "text-white/80 text-sm uppercase tracking-wide", children: car.condition === "novo" ? "Novo" : "Usado" })] })] }) })] }), _jsxs("div", { className: "p-6 max-h-96 overflow-y-auto", children: [_jsxs("div", { className: "grid grid-cols-4 gap-4 mb-6", children: [_jsxs("div", { className: "text-center p-3 bg-gray-50 rounded-lg", children: [_jsx("div", { className: "text-2xl font-bold text-gray-900 mb-1", children: car.mileage.toLocaleString() }), _jsx("div", { className: "text-sm text-gray-600", children: "km" })] }), _jsxs("div", { className: "text-center p-3 bg-gray-50 rounded-lg", children: [_jsx("div", { className: "text-lg font-bold text-gray-900 mb-1", children: car.fuel }), _jsx("div", { className: "text-sm text-gray-600", children: "Combust\u00EDvel" })] }), _jsxs("div", { className: "text-center p-3 bg-gray-50 rounded-lg", children: [_jsx("div", { className: "text-lg font-bold text-gray-900 mb-1", children: car.transmission }), _jsx("div", { className: "text-sm text-gray-600", children: "C\u00E2mbio" })] }), _jsxs("div", { className: "text-center p-3 bg-gray-50 rounded-lg", children: [_jsx("div", { className: "text-lg font-bold text-gray-900 mb-1", children: car.type }), _jsx("div", { className: "text-sm text-gray-600", children: "Categoria" })] })] }), hasMultipleImages && (_jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Galeria de Fotos" }), _jsx("div", { className: "flex gap-2 overflow-x-auto pb-2", children: allImages.map((image, index) => (_jsx("button", { onClick: () => setCurrentImageIndex(index), className: `flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                                                        ? "border-brand-500 ring-2 ring-brand-200"
                                                        : "border-gray-200 hover:border-gray-300"}`, children: _jsx("img", { src: image, alt: `${car.brand} ${car.model} - Foto ${index + 1}`, className: "w-full h-full object-cover" }) }, index))) })] })), car.description && (_jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Descri\u00E7\u00E3o" }), _jsx("p", { className: "text-gray-700 leading-relaxed", children: car.description })] })), car.features && car.features.length > 0 && (_jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Caracter\u00EDsticas" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: car.features.map((feature, index) => (_jsxs("div", { className: "flex items-center gap-2 text-gray-700", children: [_jsx("svg", { className: "w-5 h-5 text-emerald-500 flex-shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }), _jsx("span", { className: "text-sm", children: feature })] }, index))) })] })), _jsxs("div", { className: "flex gap-3 pt-4 border-t", children: [_jsx("button", { className: "flex-1 bg-brand-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-700 transition-colors", children: "Entrar em Contato" }), _jsx("button", { className: "flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors", children: "Agendar Teste" })] })] })] }) })] })) }));
};
