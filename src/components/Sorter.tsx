import { StyledSorter } from "./styles/Sorter.styled";
type SorterProps = {
  sorting: string;
  setSorting: (sorting: string) => void;
};

export default function Sorter({ sorting, setSorting }: SorterProps) {
  const options = [
    "Relevance",
    "Price - Low to High",
    "Price - High to Low",
    "Avg. Customer Review",
  ];

  return (
    <StyledSorter>
      Sort by:{" "}
      <select
        name="sorter"
        value={sorting}
        onChange={(e) => {
          setSorting(e.target.value);
        }}
      >
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </StyledSorter>
  );
}
