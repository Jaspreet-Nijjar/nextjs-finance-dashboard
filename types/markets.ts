export interface CoinItem {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    data: {
      price: number;
    };
  };
}

export type CoinProps = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  circulating_supply: number;
  total_supply: number;
};

export type TopAssetsListProps = {
  coins: CoinProps[];
};

export type Category = {
  name: string;
  coins_count: number;
  data: {
    market_cap: number;
  };
};

export type CategoryProps = {
  categories: Category[];
};

export type CoinInfoProps = {
  image: {
    large: string;
  };
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  market_data: {
    current_price: {
      usd: number;
    };
    price_change_percentage_24h: number;
  };
};

export type CoinLinksProps = {
  coin: {
    links: {
      homepage: string;
      whitepaper: string;
      official_forum_url: string;
    };
    id: string;
  };
};

export type CoinDescriptionProps = {
  coin: {
    name: string;
    description: {
      en: string;
    };
  };
};

export type PopularCoinProps = {
  id: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  image: string;
  name: string;
  symbol?: string;
  market_cap_rank?: number;
  market_data?: {
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
};

export type CoinStatsProps = {
  market_data: {
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    fully_diluted_valuation: {
      usd: number;
    };
  };
};

export type CoinPerformanceProps = {
  name: string;
  market_data: {
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_1y: number;
  };
};

export type Asset = {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  date?: string;
  image: {
    large: string;
    small?: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap?: {
      usd: number;
    };
  };
};

export type AssetsProps = {
  assets: Asset[];
};

export type RecentTransaction = {
  name: string;
  id: string;
  date: string;
  amount: number;
  market_data: {
    current_price: {
      usd: number;
    };
  };
  image: {
    small: string;
  };
};

export type RecentTransactionsProps = Asset[];

export type WatchListCoinsProps = {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    price_change_percentage_24h: number;
    market_cap: {
      usd: number;
    };
    market_cap_change_percentage_24h: number;
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
  };
};
