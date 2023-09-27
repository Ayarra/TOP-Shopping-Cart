import styled from "styled-components";

export const StyledStore = styled.div`
  display: flex;

  gap: 3rem;
  padding: 20px;
`;

export const StyledFilters = styled.div`
  background-color: green;
  /* flex: 2 1 auto; */
  width: 300px;
  height: 100%;
`;

export const StyledPicker = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledCardDisplayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const StyledCard = styled.div`
  /* border: 1px solid black; */
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  img {
    width: 250px;
    object-fit: cover;
  }
`;
