export type Seller = {
  id: number;
  name: string;
};

export type SellersApiResponse = {
  dataSellers: Seller[];
  totalSellers: number;
};