"use client";

import { SellerCard } from "@/components/sellers-card/seller-card";
import { api } from "@/services/api";
import { Seller, SellersApiResponse } from "@/types/sellers.type";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { TableOrders } from "@/components/table-orders/table-orders";
import { Order, OrdersApiResponse } from "@/types/orders.type";

export default function Orders() {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [totalSellers, setTotalSellers] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const getAllSellers = async () => {
    setLoading(true);
    try {
      const response = await api.get<SellersApiResponse>("/sellers");
      setSellers(response?.data?.dataSellers);
      setTotalSellers(response?.data?.totalSellers);
      setTotalPrice(response?.data?.totalPrice);
    } catch (error) {
      console.error(error, "Error getting sellers");
    } finally {
      setLoading(false);
    }
  }

  const getAllOrders = async () => {
    setLoading(true);
    try {
      const response = await api.get<OrdersApiResponse>("/orders");
      setOrders(response?.data?.dataOrders);
    } catch (error) {
      console.error(error, "Error getting orders");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllSellers();
    getAllOrders();
  }, []);

  return (
    <section className="mx-auto w-full max-w-screen-2xl px-6 py-12">
      <div className="w-full">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-black">Sellers</h2>
          <span className="text-lg font-medium text-black">
            Total sellers: {totalSellers}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            <div className="flex items-center justify-center">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        ) : (
          sellers?.map((seller) => (
            <SellerCard key={seller?.id} seller={seller} />
          ))
        )}
        </div>

        <TableOrders orders={orders} />
      </div>
    </section>
  );
}
