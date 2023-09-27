import styled from "styled-components";

// Store Page style
export const StyledStore = styled.div`
  display: flex;

  gap: 3rem;
  padding: 20px;
`;

// Left Filter Style
export const StyledFilters = styled.div`
  background-color: green;
  /* flex: 2 1 auto; */
  width: 300px;
  height: 100%;
`;

// Watch Picker Style
export const StyledPicker = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Card Displayer Style
export const StyledCardDisplayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

// Card Style
export const StyledCard = styled.div`
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  img {
    width: 250px;
    object-fit: cover;
  }
`;

// Rating Style
export const StyledRating = styled.div`
  display: flex;
  height: 15px;
  svg {
    color: red;
    fill: currentColor;
  }
`;
