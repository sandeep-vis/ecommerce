// export const CategoryFilter = ({ categories, selected, onChange }: {
//     categories: string[];
//     selected: string;
//     onChange: (val: string) => void;
//   }) => (
//     <select value={selected} onChange={(e) => onChange(e.target.value)} className="p-2 border mb-4">
//       <option value="">All</option>
//       {categories.map((cat) => (
//         <option key={cat} value={cat}>{cat}</option>
//       ))}
//     </select>
//   );
  


interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selected,
  onChange,
}) => {
  return (
    <div className="w-full max-w-xs mx-auto ">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-green-200"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat[0].toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
