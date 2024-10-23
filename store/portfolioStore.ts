import { create } from 'zustand';

const usePortfolioStore = create((set) => ({
  portfolio: [],

  addToPortfolio: (coin: any) => {
    set((state) => ({ portfolio: [...state.portfolio, coin] }));
  },
}));

export default usePortfolioStore;
