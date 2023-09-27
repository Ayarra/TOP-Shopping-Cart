import styled from "styled-components";

// Burger Style

export const StyledBurger = styled.div<{ $isOpen: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2.5rem;
    height: 0.5rem;
    background-color: ${({ $isOpen, theme }) =>
      $isOpen ? theme.colors.accent : theme.colors.secondary};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

// Links Style

export const StyledLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.primary};

    position: fixed;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 6rem;
  }
`;

// Individual Links Style

export const StyledLink = styled.li`
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.02);
  }
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${({ theme }) => theme.colors.accent};

    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;
