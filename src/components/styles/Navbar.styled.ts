import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 20px 40px;
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledLogo = styled.div`
  img {
    height: auto;
    max-width: 3rem;
  }
`;

export const StyledSearch = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 500px;
  height: 44px;
  min-width: 150px;
  /* max-width: 220px; */

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

export const StyledUtilities = styled.div`
  display: flex;
  gap: 1.5rem;
  font-weight: 500;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledLinks = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.primary};

    position: fixed;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 6rem;
  }
`;

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

export const StyledBurger = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  /* top: 21px; */
  /* right: 90px; */
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
    background-color: ${({ isOpen, theme }) =>
      isOpen ? theme.colors.accent : theme.colors.secondary};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const StyledCart = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    fill: currentColor;
  }

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
