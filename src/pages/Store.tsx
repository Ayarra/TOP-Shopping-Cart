import {
  StyledCardDisplayer,
  StyledDisplayer,
  StyledFilters,
  StyledStore,
} from "../components/styles/Store.styled";
import Items from "../data/items.json";

import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
    <>
      <div>Store</div>
      <StyledStore>
        <StyledFilters>filters</StyledFilters>
        <StyledDisplayer>
          <div>Sorter</div>
          <StyledCardDisplayer>
            {Items.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </StyledCardDisplayer>
        </StyledDisplayer>
      </StyledStore>
    </>
  );
};
export default Store;
