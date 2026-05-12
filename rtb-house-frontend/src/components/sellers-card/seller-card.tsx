import { Seller } from "@/types/sellers.type";
import { Card, CardContent } from "@/components/ui/card";

type SellerCardProps = {
  seller: Seller; 
};

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <Card>
      <CardContent>
        <p className="text-2xl font-semibold text-black">Total of {seller?.name}</p>
        <p className="text-xl font-medium text-red-500">
          Total price: {seller?.totalPrice}
        </p>
      </CardContent>
    </Card>
  );
}
