import { useState } from "react";
import NavLinks from "./NavLinks";
import { StyledBurger } from "./styles/Burger.styled";

const Burger = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <StyledBurger $isOpen={isOpen} onClick={() => setisOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavLinks $isOpen={isOpen} />
    </>
  );
};
export default Burger;
