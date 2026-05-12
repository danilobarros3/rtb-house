"use client";

import { SellerCard } from "@/components/sellers-card/seller-card";
import { api } from "@/services/api";
import { Seller, SellersApiResponse } from "@/types/sellers.type";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { TableOrders } from "@/components/table-orders/table-orders";
import { Order, OrdersApiResponse } from "@/types/orders.type";
import { SelectFilter } from "@/components/select-filter/select-filter";
import { toast } from "sonner";
export default function Orders() {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [totalSellers, setTotalSellers] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<string>("0");
  const [loadingSellers, setLoadingSellers] = useState<boolean>(true);
  const [loadingOrders, setLoadingOrders] = useState<boolean>(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [sellerIdFilter, setSellerIdFilter] = useState<string>("all");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [productFilter, setProductFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [paginationData, setPaginationData] = useState({
    totalPages: 1,
    page: 1,
    totalOrders: 0,
    limit: 10,
  });

  const getAllSellers = async () => {
    setLoadingSellers(true);
    try {
      const response = await api.get<SellersApiResponse>("/sellers");
      setSellers(response?.data?.dataSellers);
      setTotalSellers(response?.data?.totalSellers);
      setTotalPrice(response?.data?.totalPrice);
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "Error getting sellers, try again later";
      console.error(error, errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoadingSellers(false);
    }
  }

  const getAllOrders = async (currentPage: number) => {
    setLoadingOrders(true);
    try {
      const response = await api.get<OrdersApiResponse>("/orders", {
        params: {
          sellerId: sellerIdFilter === "all" ? undefined : Number(sellerIdFilter),
          country: countryFilter === "all" ? undefined : countryFilter,
          product: productFilter === "all" ? undefined : productFilter,
          search: search.trim() === "" ? undefined : search.trim(),
          page: currentPage,
          limit: 10,
        },
      });
      setPaginationData({
        totalPages: response?.data?.pagination?.totalPages || 1,
        page: response?.data?.pagination?.page || 1,
        totalOrders: response?.data?.pagination?.totalOrders || 0,
        limit: 10,
      });
      setPage(response?.data?.pagination?.page || 1);
      setOrders(response?.data?.dataOrders);
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "Error getting orders, try again later";
      console.error(error, errorMessage);
      toast.error(errorMessage);
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
      getAllOrders(page);
    }, 500);

    return () => clearTimeout(timeout);
  }, [sellerIdFilter, countryFilter, productFilter, search, page]);

  useEffect(() => {
    setPage(1);
  }, [sellerIdFilter, countryFilter, productFilter, search]);


  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > paginationData.totalPages) return;
    setPage(newPage);
    setPaginationData((prev) => ({ ...prev, page: newPage }));
  };

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
        <TableOrders
          orders={orders}
          loading={loadingOrders}
          currentPage={page}
          totalPages={paginationData.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
