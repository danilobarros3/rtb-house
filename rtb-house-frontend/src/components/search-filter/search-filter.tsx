import { Input } from "../ui/input";

type SearchFilterProps = {
  onSearch: (value: string) => void;
  search: string;
};

export function SearchFilter({ onSearch, search }: SearchFilterProps) {
  return (
    <div className="flex w-full max-w-full  gap-2">
      <Input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 rounded-lg border-gray-300 shadow-sm"
      />
    </div>
  );
} 