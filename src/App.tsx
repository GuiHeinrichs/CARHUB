import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CarGrid } from "./components/CarGrid";
import { SearchFilters } from "./components/SearchBar";
import { FeaturedFinance } from "./components/FeaturedFinance";
import { StatsStrip } from "./components/StatsStrip";
import { CarModal } from "./components/CarModal";
import { Car } from "./types/car";

export const App: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    brand: "",
    model: "",
    type: "",
    condition: "",
    price: "",
  });

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll para a seção de listagens
    const listingsSection = document.getElementById("listings");
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="w-screen">
        <Hero onFiltersChange={setFilters} />
        <CarGrid
          filters={filters}
          onCarClick={openModal}
          searchQuery={searchQuery}
        />
        <FeaturedFinance />
        <StatsStrip />
      </div>
      <CarModal car={selectedCar} isOpen={isModalOpen} onClose={closeModal} />
      <footer className="py-10 border-t border-gray-100 bg-white text-center text-sm text-gray-500">
        <div>
          © {new Date().getFullYear()} CarHub Marketplace. Todos os direitos
          reservados.
        </div>
      </footer>
    </>
  );
};
