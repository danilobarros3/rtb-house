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
import { formatCurrencyUSD } from "@/utils/masks";

type TableOrdersProps = {
  orders: Order[];
};

export function TableOrders({ orders }: TableOrdersProps) {
  return (
    <section className="mt-8 rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-black">Orders list</h3>
      <Table className="bg-white text-black">
        <TableHeader className="border-y border-gray-300">
          <TableRow className="border-gray-300 hover:bg-transparent">
            <TableHead className="w-[160px] text-black">Order ID</TableHead>
            <TableHead className="text-black">Product</TableHead>
            <TableHead className="text-right text-black">Price</TableHead>
            <TableHead className="text-right text-black">Seller</TableHead>
            <TableHead className="text-right text-black">Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length ? (
            orders.map((order) => (
              <TableRow
                key={order.orderId}
                className="border-gray-200 hover:bg-transparent"
              >
                <TableCell className="font-medium text-black">{order?.orderId}</TableCell>
                <TableCell className="text-black">{order?.product}</TableCell>
                <TableCell className="text-right text-black">
                  {formatCurrencyUSD(order?.price)}
                </TableCell>
                <TableCell className="text-right text-black">{order?.sellerId}</TableCell>
                <TableCell className="text-right text-black">{order?.country}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-black p-12">
                No orders found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
}
