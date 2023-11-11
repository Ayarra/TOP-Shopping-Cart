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
};

const Store = () => {
  const [sorting, setSorting] = useState("relevance");
  const [filters, setFilters] = useState<Filters>({
    brands: [],
  });

  return (
    <>
      <div>Products Store</div>
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
