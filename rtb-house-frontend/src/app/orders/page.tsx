"use client";

import { SellerCard } from "@/components/sellers-card/seller-card";
import { api } from "@/services/api";
import { Seller, SellersApiResponse } from "@/types/sellers.type";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { TableOrders } from "@/components/table-orders/table-orders";
import { Order, OrdersApiResponse } from "@/types/orders.type";
import { SelectFilter } from "@/components/select-filter/select-filter";
export default function Orders() {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [totalSellers, setTotalSellers] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [loadingSellers, setLoadingSellers] = useState<boolean>(true);
  const [loadingOrders, setLoadingOrders] = useState<boolean>(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [sellerIdFilter, setSellerIdFilter] = useState<string>("all");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [productFilter, setProductFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const getAllSellers = async () => {
    setLoadingSellers(true);
    try {
      const response = await api.get<SellersApiResponse>("/sellers");
      setSellers(response?.data?.dataSellers);
      setTotalSellers(response?.data?.totalSellers);
      setTotalPrice(response?.data?.totalPrice);
    } catch (error) {
      console.error(error, "Error getting sellers");
    } finally {
      setLoadingSellers(false);
    }
  }

  const getAllOrders = async () => {
    setLoadingOrders(true);
    try {
      const response = await api.get<OrdersApiResponse>("/orders", {
        params: {
          sellerId: sellerIdFilter === "all" ? undefined : Number(sellerIdFilter),
          country: countryFilter === "all" ? undefined : countryFilter,
          product: productFilter === "all" ? undefined : productFilter,
          search: search.trim() === "" ? undefined : search.trim(),
          page: 1,
          limit: 10,
        },
      });
      setOrders(response?.data?.dataOrders);
    } catch (error) {
      console.error(error, "Error getting orders");
    } finally {
      setLoadingOrders(false);
    }
  }

  useEffect(() => {
    getAllSellers();
  }, []);

  useEffect(() => {
    setLoadingOrders(true);
    const timeout = setTimeout(() => {
      getAllOrders();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [sellerIdFilter, countryFilter, productFilter, search]);

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
          {loadingSellers ? (
            <div className="flex items-center justify-center">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        ) : (
          sellers?.map((seller) => (
            <SellerCard key={seller?.id} seller={seller} />
          ))
        )}
        </div>
        <SelectFilter
          sellers={sellers}
          orders={orders}
          sellerIdFilter={sellerIdFilter}
          countryFilter={countryFilter}
          productFilter={productFilter}
          search={search}
          onSellerIdChange={setSellerIdFilter}
          onCountryChange={setCountryFilter}
          onProductChange={setProductFilter}
          onSearch={setSearch}
        />
        <TableOrders orders={orders} loading={loadingOrders} />
      </div>
    </section>
  );
}
