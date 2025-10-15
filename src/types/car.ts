export type CarCondition = "novo" | "usado";
export type CarType =
  | "SUV"
  | "Sedan"
  | "Hatchback"
  | "Coupe"
  | "Hybrid"
  | "Convertible";

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number; // em USD para exemplo
  mileage: number; // km
  fuel: string; // Gasolina, Diesel, Elétrico, Híbrido
  transmission: string; // Automático, Manual, CVT
  type: CarType;
  condition: CarCondition;
  image: string; // placeholder url (imagem principal)
  images?: string[]; // galeria de imagens adicionais
  badges?: string[]; // e.g. ["Bom Preço", "Baixa Km"]
  featured?: boolean;
  promoted?: boolean;
  features?: string[];
  description?: string;
}
