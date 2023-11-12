import {
  StyledDisplayer,
  StyledStore,
} from "../components/styles/Store.styled";

import { useState } from "react";
import CardDisplayer from "../components/CardDisplayer";

import ProductFilter from "../components/ProductFilter";
import Sorter from "../components/Sorter";

type Filters = {
  brands: string[];
  sizes: string[];
  colors: string[];
};

const Store = () => {
  const [sorting, setSorting] = useState("relevance");
  const [filters, setFilters] = useState<Filters>({
    brands: [],
    sizes: [],
    colors: [],
  });

  return (
    <>
      <div
        style={{
          marginLeft: "40px",
          marginTop: "40px",
          textTransform: "uppercase",
          fontSize: "25px",
          fontWeight: "500",
        }}
      >
        Products Store
      </div>
      <StyledStore>
        <ProductFilter
          filters={filters}
          setFilters={setFilters}
        ></ProductFilter>
        <StyledDisplayer>
          <Sorter sorting={sorting} setSorting={setSorting} />
          <CardDisplayer sorting={sorting} filters={filters}></CardDisplayer>
        </StyledDisplayer>
      </StyledStore>
    </>
  );
};
export default Store;
