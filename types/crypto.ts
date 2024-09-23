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
