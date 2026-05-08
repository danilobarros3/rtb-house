"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SearchFilter } from "../search-filter/search-filter";
import { Seller } from "@/types/sellers.type";
import { Order } from "@/types/orders.type";
import { Button } from "../ui/button";

type SelectFilterProps = {
  sellers: Seller[];
  orders: Order[];
  sellerIdFilter: string;
  countryFilter: string;
  productFilter: string;
  search: string;
  onSellerIdChange: (value: string) => void;
  onCountryChange: (value: string) => void;
  onProductChange: (value: string) => void;
  onSearch: (value: string) => void;
};

export function SelectFilter({
  sellers,
  orders,
  sellerIdFilter,
  countryFilter,
  productFilter,
  search,
  onSellerIdChange,
  onCountryChange,
  onProductChange,
  onSearch,
}: SelectFilterProps) {
  
  const countryOptions = Array.from(new Set(orders.map((order) => order.country)));
  const productOptions = Array.from(new Set(orders.map((order) => order.product)));

  const onClearFilters = () => {
    onSellerIdChange("all");
    onCountryChange("all");
    onProductChange("all");
    onSearch("");
  }

  return (
    <div className="mt-6 mb-4 flex w-full flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3">
      <div className="min-w-0 w-full flex-1">
        <SearchFilter search={search} onSearch={onSearch} />
      </div>

      <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:justify-end">
        <div className="w-full sm:w-auto">
          <Select value={sellerIdFilter} onValueChange={onSellerIdChange}>
            <SelectTrigger className="w-full justify-center border-gray-300 text-center text-black shadow-sm sm:w-[170px]">
              <SelectValue placeholder="All sellers" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem className="text-black" value="all">
                All sellers
              </SelectItem>
              {sellers.map((seller) => (
                <SelectItem className="text-black" key={seller.id} value={seller.id.toString()}>
                  {seller.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-auto">
          <Select value={countryFilter} onValueChange={onCountryChange}>
            <SelectTrigger className="w-full justify-center border-gray-300 text-center text-black shadow-sm sm:w-[170px]">
              <SelectValue placeholder="All countries" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem className="text-black" value="all">
                All countries
              </SelectItem>
              {countryOptions.map((country) => (
                <SelectItem className="text-black" key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-auto">
          <Select value={productFilter} onValueChange={onProductChange}>
            <SelectTrigger className="w-full justify-center border-gray-300 text-center text-black shadow-sm sm:w-[170px]">
              <SelectValue placeholder="All products" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem className="text-black" value="all">
                All products
              </SelectItem>
              {productOptions.map((product) => (
                <SelectItem className="text-black" key={product} value={product}>
                  {product}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-auto">
        <Button onClick={onClearFilters} className="w-full hover:bg-red-600 sm:w-auto">
          Clear filters
        </Button>
        </div>
      </div>
    </div>
  );
}