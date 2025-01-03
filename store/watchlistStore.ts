import { create } from 'zustand';

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: {
    large: string;
  };
  market_cap_rank: number;
  market_data: {
    price_change_percentage_24h: number;
    market_cap_change_percentage_24h: number;
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
  };
}

interface WatchlistStore {
  watchlist: Coin[];
  addToWatchlist: (coin: Coin) => void;
  removeFromWatchlist: (coinId: string) => void;
}

const useWatchlistStore = create<WatchlistStore>((set) => ({
  watchlist: [],

  addToWatchlist: (coin: Coin) =>
    set((state) => {
      const isAlreadyInWatchlist = state.watchlist.some(
        (c) => c.id === coin.id
      );
      if (!isAlreadyInWatchlist) {
        return { watchlist: [...state.watchlist, coin] };
      }
      return state;
    }),

  removeFromWatchlist: (coinId: string) =>
    set((state) => ({
      watchlist: state.watchlist.filter((coin) => coin.id !== coinId),
    })),
}));

export default useWatchlistStore;
