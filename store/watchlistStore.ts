import { create } from 'zustand';

interface Coin {
  id: string;
  name: string;
  current_price: number;
  image: {
    large: string;
  };
}

interface WatchlistStore {
  watchlist: Coin[];
  addToWatchlist: (coin: Coin) => void;
}

const useWatchlistStore = create<WatchlistStore>((set) => ({
  watchlist: [],

  addToWatchlist: (coin) =>
    set((state) => ({
      watchlist: [...state.watchlist, coin],
    })),
}));

export default useWatchlistStore;
