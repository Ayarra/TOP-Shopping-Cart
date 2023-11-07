import styled from "styled-components";

// Global Nav Style
export const StyledNavbar = styled.nav`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

// Logo Style
export const StyledLogo = styled.div`
  img {
    height: auto;
    max-width: 3rem;
  }
`;

// Searchbar Style
export const StyledSearch = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 500px;
  height: 44px;
  min-width: 150px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
  input {
    all: unset;
    font: 16px system-ui;
    color: #fff;
    height: 100%;
    width: 100%;
    padding: 6px 10px;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.7;
  }
`;

// Searchbar Button Style
export const StyledSearchButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 44px;
  height: 44px;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    fill: currentColor;
    width: 24px;
    height: 24px;
    padding: 10px;
  }
`;

// Utilities corner style
export const StyledUtilities = styled.div`
  display: flex;
  gap: 1.5rem;
  font-weight: 500;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
`;
