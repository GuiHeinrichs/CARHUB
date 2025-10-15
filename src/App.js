import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CarGrid } from "./components/CarGrid";
import { FeaturedFinance } from "./components/FeaturedFinance";
import { StatsStrip } from "./components/StatsStrip";
import { CarModal } from "./components/CarModal";
export const App = () => {
    const [filters, setFilters] = useState({
        brand: "",
        model: "",
        type: "",
        condition: "",
        price: "",
    });
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const openModal = (car) => {
        setSelectedCar(car);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCar(null);
    };
    const handleSearch = (query) => {
        setSearchQuery(query);
        // Scroll para a seção de listagens
        const listingsSection = document.getElementById("listings");
        if (listingsSection) {
            listingsSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { onSearch: handleSearch }), _jsxs("div", { className: "w-screen", children: [_jsx(Hero, { onFiltersChange: setFilters }), _jsx(CarGrid, { filters: filters, onCarClick: openModal, searchQuery: searchQuery }), _jsx(FeaturedFinance, {}), _jsx(StatsStrip, {})] }), _jsx(CarModal, { car: selectedCar, isOpen: isModalOpen, onClose: closeModal }), _jsx("footer", { className: "py-10 border-t border-gray-100 bg-white text-center text-sm text-gray-500", children: _jsxs("div", { children: ["\u00A9 ", new Date().getFullYear(), " CarHub Marketplace. Todos os direitos reservados."] }) })] }));
};
