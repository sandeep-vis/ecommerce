export const CategoryFilter = ({ categories, selected, onChange }: {
    categories: string[];
    selected: string;
    onChange: (val: string) => void;
  }) => (
    <select value={selected} onChange={(e) => onChange(e.target.value)} className="p-2 border mb-4">
      <option value="">All</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
  