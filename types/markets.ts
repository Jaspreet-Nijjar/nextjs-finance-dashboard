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
  coin: {
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
};

export type Category = {
  category: {
    name: string;
    coins_count: number;
    data: {
      market_cap: number;
    };
  };
};

export type CategoryProps = {
  categories: Category[];
};

export type CoinInfoProps = {
  coin: {
    image: {
      large: string;
    };
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
};
