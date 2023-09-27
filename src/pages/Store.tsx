import WatchCard from "../components/WatchCard";
import {
  StyledCardDisplayer,
  StyledFilters,
  StyledPicker,
  StyledStore,
} from "../components/styles/Store.styled";
import Items from "../data/items.json";

const Store = () => {
  return (
    <>
      <div>Store</div>
      <StyledStore>
        <StyledFilters>filters</StyledFilters>
        <StyledPicker>
          <div>Sorter</div>
          <StyledCardDisplayer>
            {Items.map((item) => (
              <WatchCard key={item.id} item={item}></WatchCard>
            ))}
          </StyledCardDisplayer>
        </StyledPicker>
      </StyledStore>
    </>
  );
};
export default Store;
