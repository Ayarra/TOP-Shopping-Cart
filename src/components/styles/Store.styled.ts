import styled from "styled-components";

// store page
export const StyledStore = styled.div`
  display: flex;

  gap: 3rem;
  padding: 20px;
`;

// left filter
export const StyledFilters = styled.div`
  width: 300px;
  /* height: 100%; */
`;

// products displayer
export const StyledDisplayer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// card displayer
export const StyledCardDisplayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;
