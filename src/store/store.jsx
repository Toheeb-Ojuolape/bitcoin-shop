import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  addProducts: (newProducts) =>
    set((state) => ({ products: [...state.products, newProducts] })),
  removeAllProducts: () => set({ products: [] }),
  removeItem: (products) => set({ products: products }),
}));

export default useProductStore;
