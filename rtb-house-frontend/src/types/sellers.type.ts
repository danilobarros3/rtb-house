export type Seller = {
  id: number;
  name: string;
  totalPrice: number;
};

export type SellersApiResponse = {
  dataSellers: Seller[];
  totalSellers: number;
  totalPrice: number;
};