import { create } from 'zustand';

const usePortfolioStore = create((set) => ({
  portfolio: null,

  addToPortfolio: (coin: any) => {
    set({ portfolio: coin });
  },
}));

export default usePortfolioStore;
