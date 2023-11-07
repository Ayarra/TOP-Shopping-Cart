import styled from "styled-components";

// Cart button Style
export const StyledShoppingCart = styled.div``;

export const StyledShoppingButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  border-radius: 50%;
  z-index: 54;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    fill: currentColor;
  }

  /* amount Indicator Style */
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(40%, 40%);
    padding: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const StyledCart = styled.div<{ isOpen: boolean }>`
  overflow-y: auto;
  display: flex;
  flex-flow: column;
  gap: 15px;
  z-index: 4;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  top: 0;
  right: 0;
  height: 100vh;
  width: 500px;
  padding-top: 6rem;
`;

export const StyledItemStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;

  img {
    width: 125px;
    height: 75px;
    object-fit: cover;
  }
  span {
    font-size: 0.75rem;
    text-transform: lowercase;
    color: ${({ theme }) => theme.colors.accent};
  }
  div > div:nth-child(2) {
    color: green;
    font-size: 0.75rem;
    text-transform: lowercase;
    color: ${({ theme }) => theme.colors.accent};
  }
  div:nth-child(3) {
    margin-left: auto;
  }
  button {
    margin-left: 6px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
