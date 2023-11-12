import { StyledFilterSection } from "./styles/FilterSection.styled";
import { StyledFilters } from "./styles/Store.styled";

type filters = {
  [key: string]: string[];
  brands: string[];
  sizes: string[];
  colors: string[];
};

type FilterSectionProps = {
  shopBy: string;
  options: string[];
  filters: filters;
  setFilters: (filters: filters) => void;
};

type ProductFilterProps = {
  filters: filters;
  setFilters: (filters: filters) => void;
};

function FilterSection({
  shopBy,
  options,
  setFilters,
  filters,
}: FilterSectionProps) {
  const handleChange = (e: { target: HTMLInputElement }) => {
    const { value, checked, name } = e.target;

    if (checked) {
      setFilters({
        ...filters,
        [name]: [...filters[name], value],
      });
    } else {
      setFilters({
        ...filters,
        [name]: filters[name].filter((e) => e !== value),
      });
    }
  };

  return (
    <StyledFilterSection>
      <h1>Shop by {shopBy}</h1>
      <div>
        {options.map((option, i) => (
          <label key={i}>
            <input
              type="checkbox"
              name={shopBy}
              value={option}
              onChange={handleChange}
            />
            {shopBy === "colors" && (
              <div
                style={{
                  backgroundColor: `${option}`,
                  display: "inline-block",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  margin: "0 5px",
                }}
              ></div>
            )}
            {option}
          </label>
        ))}
      </div>
    </StyledFilterSection>
  );
}

export default function ProductFilter({
  filters,
  setFilters,
}: ProductFilterProps) {
  const brand = ["Centice", "Assistix", "Roboid"];
  const sizes = ["34", "36", "40", "44"];
  const colors = ["purple", "green", "grey", "pink", "red", "black"];
  const rating = ["0+", "1+", "2+", "3+", "4+"];

  return (
    <StyledFilters>
      <FilterSection
        shopBy={"brands"}
        options={brand}
        setFilters={setFilters}
        filters={filters}
      ></FilterSection>
      <FilterSection
        shopBy={"sizes"}
        options={sizes}
        setFilters={setFilters}
        filters={filters}
      ></FilterSection>
      <FilterSection
        shopBy={"colors"}
        options={colors}
        setFilters={setFilters}
        filters={filters}
      ></FilterSection>
      <FilterSection
        shopBy={"rating"}
        options={rating}
        setFilters={setFilters}
        filters={filters}
      ></FilterSection>
    </StyledFilters>
  );
}
