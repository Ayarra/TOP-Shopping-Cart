import { StyledLink, StyledLinks } from "./styles/Navbar.styled";
const NavLinks = ({ isOpen }) => {
  return (
    <StyledLinks isOpen={isOpen}>
      <StyledLink>Store</StyledLink>
      <StyledLink>Blogs</StyledLink>
      <StyledLink>About Us</StyledLink>
      <StyledLink>Contact Us</StyledLink>
    </StyledLinks>
  );
};
export default NavLinks;
