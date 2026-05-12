export type Seller = {
  id: number;
  name: string;
  totalPrice: string;
};

export type SellersApiResponse = {
  dataSellers: Seller[];
  totalSellers: number;
  totalPrice: string;
};