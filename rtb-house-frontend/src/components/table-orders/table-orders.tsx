"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "../../types/orders.type";
import { Loader2 } from "lucide-react";
import { Pagination } from "@/components/pagination/pagination";

type TableOrdersProps = {
  orders: Order[];
  loading?: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function TableOrders({
  orders,
  loading = false,
  currentPage,
  totalPages,
  onPageChange,
}: TableOrdersProps) {
  return (
    <section className="mt-8 rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-center text-lg font-semibold text-black">Orders list</h3>
      <Table className="w-full border-collapse border border-gray-300 bg-white text-black">
        <TableHeader>
          <TableRow className="border-gray-300 hover:bg-transparent">
            <TableHead className="border border-gray-300 text-center text-black">Order ID</TableHead>
            <TableHead className="border border-gray-300 text-center text-black">Product</TableHead>
            <TableHead className="border border-gray-300 text-center text-black">Price</TableHead>
            <TableHead className="border border-gray-300 text-center text-black">Seller</TableHead>
            <TableHead className="border border-gray-300 text-center text-black">Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow className="bg-white hover:bg-transparent">
              <TableCell colSpan={5} className="border border-gray-300 bg-white p-12 text-center text-black">
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin text-black" />
                  <span>Loading orders…</span>
                </div>
              </TableCell>
            </TableRow>
          ) : orders.length ? (
            orders.map((order) => (
              <TableRow
                key={order.orderId}
                className="border-gray-300 hover:bg-transparent"
              >
                <TableCell className="border border-gray-300 text-center font-medium text-black">
                  {order?.orderId}
                </TableCell>
                <TableCell className="border border-gray-300 text-center text-black">{order?.product}</TableCell>
                <TableCell className="border border-gray-300 text-center text-black">
                  {order?.formattedPrice}
                </TableCell>
                <TableCell className="border border-gray-300 text-center text-black">{order?.sellerId}</TableCell>
                <TableCell className="border border-gray-300 text-center text-black">{order?.country}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="bg-white hover:bg-transparent">
              <TableCell colSpan={5} className="border border-gray-300 bg-white p-12 text-center text-black">
                No orders found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="mt-4 border-t border-gray-200 pt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
}
