import { create } from 'zustand';

const usePortfolioStore = create((set) => ({
  portfolio: null,
  assets: [],

  addToPortfolio: (coin: any) => {
    set({ portfolio: coin });
  },

  addToAssets: (coin: any) => {
    set((state) => ({
      assets: [...state.assets, coin],
    }));
  },
}));

export default usePortfolioStore;
