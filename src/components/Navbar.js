import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
const navLinks = [
    { label: "Início", href: "#", icon: "🏠" },
    { label: "Catálogo", href: "#listings", icon: "🚗" },
    { label: "Financiamento", href: "#finance", icon: "💳" },
    { label: "Contato", href: "#contact", icon: "📞" },
];
export const Navbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch?.(searchQuery);
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    return (_jsxs("header", { className: "fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100", children: [_jsxs("div", { className: "container-responsive h-16 flex items-center justify-between", children: [_jsxs(motion.div, { className: "flex items-center space-x-2 sm:space-x-3 min-w-0", whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 400, damping: 10 }, children: [_jsx("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 flex items-center justify-center text-white shadow-lg shadow-brand-200 flex-shrink-0", children: _jsx("svg", { className: "w-5 h-5 sm:w-6 sm:h-6", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" }) }) }), _jsx("h1", { className: "text-2xl sm:text-3xl font-logo font-bold tracking-tight bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 bg-clip-text text-transparent truncate", children: "CarHub" })] }), _jsx("nav", { className: "hidden md:flex items-center space-x-6", children: navLinks.map((link, index) => (_jsx(motion.a, { href: link.href, className: "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-all duration-200", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx("span", { children: link.label }) }, link.label))) }), _jsxs("div", { className: "flex items-center space-x-1 sm:space-x-2 lg:space-x-3 flex-shrink-0", children: [_jsxs(motion.form, { onSubmit: handleSearchSubmit, className: "hidden lg:flex items-center bg-gray-100 rounded-lg px-2 lg:px-3 py-2 text-sm", whileHover: { scale: 1.02 }, children: [_jsx("svg", { className: "w-4 h-4 text-gray-400 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }), _jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Buscar carros...", className: "bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 w-24 lg:w-32" })] }), _jsx(motion.button, { className: "text-xs sm:text-sm font-medium px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-all whitespace-nowrap", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "Entrar" }), _jsx(motion.button, { onClick: toggleMobileMenu, className: "md:hidden p-1.5 sm:p-2 rounded-lg text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors flex-shrink-0", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: _jsx("svg", { className: "w-4 sm:w-5 h-4 sm:h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isMobileMenuOpen ? (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })) : (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" })) }) })] })] }), _jsx(motion.div, { className: "md:hidden bg-white border-b border-gray-100", initial: { opacity: 0, height: 0 }, animate: {
                    opacity: isMobileMenuOpen ? 1 : 0,
                    height: isMobileMenuOpen ? "auto" : 0
                }, transition: { duration: 0.3, ease: "easeInOut" }, children: _jsxs("div", { className: "container-responsive py-4 space-y-4", children: [_jsx("nav", { className: "space-y-2", children: navLinks.map((link, index) => (_jsxs(motion.a, { href: link.href, onClick: closeMobileMenu, className: "flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-all duration-200", initial: { opacity: 0, x: -20 }, animate: {
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    x: isMobileMenuOpen ? 0 : -20
                                }, transition: { delay: index * 0.1 }, children: [_jsx("span", { className: "text-lg", children: link.icon }), _jsx("span", { className: "font-medium", children: link.label })] }, link.label))) }), _jsxs(motion.form, { onSubmit: handleSearchSubmit, className: "flex items-center bg-gray-100 rounded-lg px-3 py-2", initial: { opacity: 0, y: 20 }, animate: {
                                opacity: isMobileMenuOpen ? 1 : 0,
                                y: isMobileMenuOpen ? 0 : 20
                            }, transition: { delay: 0.4 }, children: [_jsx("svg", { className: "w-4 h-4 text-gray-400 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }), _jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Buscar carros...", className: "bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 flex-1" })] }), _jsx(motion.div, { className: "flex space-x-3 pt-2", initial: { opacity: 0, y: 20 }, animate: {
                                opacity: isMobileMenuOpen ? 1 : 0,
                                y: isMobileMenuOpen ? 0 : 20
                            }, transition: { delay: 0.5 }, children: _jsx("button", { className: "flex-1 text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-all", children: "Entrar" }) })] }) })] }));
};
