import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  addProduct: () => set((state, e) => ({ products: [...state.products, e] })),
  removeAllProducts: () => set({ products: [] }),
}));

export default useProductStore;
