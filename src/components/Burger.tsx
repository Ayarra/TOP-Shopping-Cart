import { useState } from "react";
import NavLinks from "./NavLinks";
import { StyledBurger } from "./styles/Navbar.styled";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavLinks isOpen={isOpen} />
    </>
  );
};
export default Burger;
