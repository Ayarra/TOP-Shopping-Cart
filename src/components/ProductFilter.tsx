import { StyledFilters } from "./styles/Store.styled";

type FilterSectionProps = {
  shopBy: string;
  options: string[];
  filters: {
    brands: string[];
  };
  setFilters: (filters: { brands: string[] }) => void;
};

type ProductFilterProps = {
  filters: {
    brands: string[];
  };
  setFilters: (filters: { brands: string[] }) => void;
};

function FilterSection({
  shopBy,
  options,
  setFilters,
  filters,
}: FilterSectionProps) {
  const handleChange = (e: { target: HTMLInputElement }) => {
    const { value, checked } = e.target;
    const { brands } = filters;
    console.log(`${value} is ${checked} ${filters.brands}`);

    if (checked) {
      setFilters({
        brands: [...brands, value],
      });
    } else {
      setFilters({
        brands: brands.filter((e) => e !== value),
      });
    }
  };
  return (
    <div>
      <h1>Shop by {shopBy}</h1>
      {options.map((option, i) => (
        <label key={i} className="form-check-label" htmlFor="flexCheckDefault">
          <input
            type="checkbox"
            name={shopBy}
            value={option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default function ProductFilter({
  filters,
  setFilters,
}: ProductFilterProps) {
  const brand = ["Centice", "Assistix", "Roboid"];

  return (
    <StyledFilters>
      <FilterSection
        shopBy={"Brand"}
        options={brand}
        setFilters={setFilters}
        filters={filters}
      ></FilterSection>
    </StyledFilters>
  );
}
