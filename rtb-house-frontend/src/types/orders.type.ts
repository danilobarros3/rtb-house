export type Order = {
  orderId: number;
  product: string;
  price: number;
  sellerId: number;
  country: string;
  formattedPrice: string;
};

export type OrdersApiResponse = {
  dataOrders: Order[];
  pagination: {
    page: number;
    limit: number;
    totalOrders: number;
    totalPages: number;
  };
};
