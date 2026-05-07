import { Seller } from "@/types/sellers.type";
import { formatCurrencyUSD } from "@/utils/masks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SellerCardProps = {
  seller: Seller;
};

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium text-black">#{seller?.id}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold text-black">{seller?.name}</p>
        <p className="text-xl font-medium text-red-500">
          Total price: {formatCurrencyUSD(seller?.totalPrice || 0)}
        </p>
      </CardContent>
    </Card>
  );
}
