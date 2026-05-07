import { Seller } from "@/types/sellers.type";
import { formatCurrencyUSD } from "@/utils/masks";

type SellerCardProps = {
  seller: Seller;
};

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <article className="rounded-lg border bg-white p-4 shadow-sm">
      <p className="text-lg font-medium text-black">
        #{seller?.id}
      </p>
      <p className="mt-2 text-2xl font-semibold text-black">{seller?.name}</p>
      <p className="text-xl font-medium text-red-500">
        Total price: {formatCurrencyUSD(seller?.totalPrice || 0)}
      </p>
    </article>
  );
}
