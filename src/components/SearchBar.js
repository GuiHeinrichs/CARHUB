import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Select from "react-select";
import { cars } from "../data/cars";
const unique = (arr) => Array.from(new Set(arr)).sort();
const brands = unique(cars.map((c) => c.brand));
const types = unique(cars.map((c) => c.type));
export const SearchBar = ({ onChange }) => {
    const [filters, setFilters] = useState({
        brand: "",
        model: "",
        type: "",
        condition: "",
        price: "",
    });
    const models = unique(cars
        .filter((c) => !filters.brand || c.brand === filters.brand)
        .map((c) => c.model));
    // Estilos customizados para react-select
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customStyles = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        control: (provided, state) => ({
            ...provided,
            height: "48px",
            minHeight: "48px",
            border: state.isFocused ? "2px solid #3b82f6" : "1px solid #e5e7eb",
            borderRadius: "6px",
            boxShadow: state.isFocused ? "0 0 0 3px rgba(59, 130, 246, 0.1)" : "none",
            "&:hover": {
                border: "1px solid #d1d5db"
            }
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        valueContainer: (provided) => ({
            ...provided,
            height: "46px",
            padding: "0 12px"
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        input: (provided) => ({
            ...provided,
            margin: "0px",
            padding: "0px"
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        placeholder: (provided) => ({
            ...provided,
            color: "#9ca3af",
            fontSize: "14px"
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        singleValue: (provided) => ({
            ...provided,
            color: "#374151",
            fontSize: "14px"
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? "#3b82f6"
                : state.isFocused
                    ? "#eff6ff"
                    : "white",
            color: state.isSelected ? "white" : "#374151",
            fontSize: "14px",
            padding: "12px 16px",
            "&:hover": {
                backgroundColor: state.isSelected ? "#3b82f6" : "#eff6ff"
            }
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        menu: (provided) => ({
            ...provided,
            zIndex: 9999,
            borderRadius: "6px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        menuList: (provided) => ({
            ...provided,
            padding: "4px",
            borderRadius: "6px"
        })
    };
    // Opções para os selects
    const brandOptions = [
        { value: "", label: "Todas Marcas" },
        ...brands.map(brand => ({ value: brand, label: brand }))
    ];
    const modelOptions = [
        { value: "", label: "Todos Modelos" },
        ...models.map(model => ({ value: model, label: model }))
    ];
    const typeOptions = [
        { value: "", label: "Todos Tipos" },
        ...types.map(type => ({ value: type, label: type }))
    ];
    const conditionOptions = [
        { value: "", label: "Condição" },
        { value: "novo", label: "Novo" },
        { value: "usado", label: "Usado" }
    ];
    const priceOptions = [
        { value: "", label: "Todos Preços" },
        { value: "0-30000", label: "Até $30k" },
        { value: "30000-60000", label: "$30k - $60k" },
        { value: "60000-100000", label: "$60k - $100k" },
        { value: "100000-999999", label: "$100k+" }
    ];
    const update = (field, value) => {
        const updated = { ...filters, [field]: value };
        // Reset modelo quando marca mudar
        if (field === "brand") {
            updated.model = "";
        }
        setFilters(updated);
        onChange?.(updated);
    };
    const clearFilters = () => {
        const clearedFilters = {
            brand: "",
            model: "",
            type: "",
            condition: "",
            price: "",
        };
        setFilters(clearedFilters);
        onChange?.(clearedFilters);
    };
    const hasActiveFilters = Object.values(filters).some((value) => value !== "");
    return (_jsx("div", { className: "relative -mt-8", children: _jsxs("div", { className: "bg-white rounded-xl shadow-xl ring-1 ring-black/5 p-4 sm:p-6 flex flex-col sm:flex-row gap-4", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 flex-1", children: [_jsx(Select, { value: brandOptions.find(option => option.value === filters.brand), onChange: (selectedOption) => update("brand", selectedOption?.value || ""), options: brandOptions, styles: customStyles, placeholder: "Todas Marcas", isSearchable: true, className: "text-sm", menuPortalTarget: document.body, menuPosition: "fixed" }), _jsx(Select, { value: modelOptions.find(option => option.value === filters.model), onChange: (selectedOption) => update("model", selectedOption?.value || ""), options: modelOptions, styles: customStyles, placeholder: "Todos Modelos", isSearchable: true, className: "text-sm", menuPortalTarget: document.body, menuPosition: "fixed" }), _jsx(Select, { value: typeOptions.find(option => option.value === filters.type), onChange: (selectedOption) => update("type", selectedOption?.value || ""), options: typeOptions, styles: customStyles, placeholder: "Todos Tipos", isSearchable: true, className: "text-sm", menuPortalTarget: document.body, menuPosition: "fixed" }), _jsx(Select, { value: conditionOptions.find(option => option.value === filters.condition), onChange: (selectedOption) => update("condition", selectedOption?.value || ""), options: conditionOptions, styles: customStyles, placeholder: "Condi\u00E7\u00E3o", className: "text-sm", menuPortalTarget: document.body, menuPosition: "fixed" }), _jsx(Select, { value: priceOptions.find(option => option.value === filters.price), onChange: (selectedOption) => update("price", selectedOption?.value || ""), options: priceOptions, styles: customStyles, placeholder: "Todos Pre\u00E7os", className: "text-sm", menuPortalTarget: document.body, menuPosition: "fixed" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { className: "h-12 px-8 rounded-md bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition shadow-soft whitespace-nowrap", children: "Buscar" }), hasActiveFilters && (_jsx("button", { onClick: clearFilters, className: "h-12 px-4 rounded-md border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition whitespace-nowrap", children: "Limpar" }))] })] }) }));
};
