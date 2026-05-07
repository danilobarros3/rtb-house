import { Seller } from "@/types/sellers.type";

type SellerCardProps = {
  seller: Seller;
};

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <article className="rounded-lg border bg-white p-4 shadow-sm">
      <p className="text-xs font-medium text-red-500">
        ID: {seller?.id}
      </p>
      <p className="mt-2 text-lg font-semibold text-black">{seller?.name}</p>
    </article>
  );
}
