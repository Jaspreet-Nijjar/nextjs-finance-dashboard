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
  image: {
    large: string;
  };
}

interface Asset extends Coin {
  amount: number;
}

interface PortfolioStore {
  portfolio: Coin | null;
  assets: Asset[];
  addToPortfolio: (coin: Coin) => void;
  addToAssets: (asset: Asset) => void;
}

const usePortfolioStore = create<PortfolioStore>((set) => ({
  portfolio: null,
  assets: [],

  addToPortfolio: (coin) => {
    set({ portfolio: coin });
  },

  addToAssets: (asset) => {
    set((state) => ({
      assets: [...state.assets, asset],
    }));
  },
}));

export default usePortfolioStore;
