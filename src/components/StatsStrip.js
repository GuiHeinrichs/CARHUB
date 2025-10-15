import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const stats = [
    { value: "120K", label: "Carros à Venda" },
    { value: "45K", label: "Reviews de Usuários" },
    { value: "5M", label: "Visitas Mensais" },
    { value: "1.2K", label: "Lojas Parceiras" },
];
export const StatsStrip = () => {
    return (_jsx("section", { className: "py-14 bg-white border-t border-b border-gray-100", children: _jsx("div", { className: "container-responsive grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: stats.map((s) => (_jsxs("div", { className: "space-y-1", children: [_jsx("div", { className: "text-2xl font-bold tracking-tight text-gray-900", children: s.value }), _jsx("div", { className: "text-[11px] uppercase tracking-wide text-gray-500 font-medium", children: s.label })] }, s.label))) }) }));
};
