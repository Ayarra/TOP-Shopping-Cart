import styled from "styled-components";

// product card
export const StyledCard = styled.div`
  border-radius: 10px 10px 0 0;
  padding: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  color: ${({ theme }) => theme.colors.secondary};

  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  h2 {
    margin-top: 10px;
  }
  h2:hover {
    text-decoration: underline;
  }

  h3 {
    margin-top: 5px;
  }
`;

export const StyledRating = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  /* justify-content: center; */
`;

export const StyledAddCartButton = styled.button`
  margin: 10px 0;
  padding: 10px 0;
  font-weight: 700;
  font-size: large;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledModifyCartButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  gap: 25px;
  margin: 10px 0;
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme.colors.primary};

  span {
    font-weight: 700;
  }

  button {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 55px;
    width: 55px;
    border: none;
    border-radius: 20px;
    font-size: 1.3rem;

    cursor: pointer;
  }

  button:hover {
    /* color: ${({ theme }) => theme.colors.primary}; */
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.03);
  }
`;
