export const SearchBar = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border w-full mb-4"
    />
  );