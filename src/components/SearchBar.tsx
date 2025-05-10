export const SearchBar = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
         className=" p-2  border border-gray-300 rounded-md  px-4 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 w-200 mb-4 focus:ring-yellow-500 hover:bg-green-200"
    />
  );