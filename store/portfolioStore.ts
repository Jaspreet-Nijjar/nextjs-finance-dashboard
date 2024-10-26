import { create } from 'zustand';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  market_data: {
    current_price: {
      usd: number;
    };
  };
  amount: number;
  image: {
    large: string;
  };
}

interface PortfolioStore {
  portfolio: Coin | null;
  assets: Coin[];
  addToPortfolio: (coin: Coin) => void;
  addToAssets: (coin: Coin) => void;
}

const usePortfolioStore = create<PortfolioStore>((set) => ({
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
