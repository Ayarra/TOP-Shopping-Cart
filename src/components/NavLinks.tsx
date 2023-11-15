import { Link } from "react-router-dom";
import { StyledLink, StyledLinks } from "./styles/Burger.styled";

type navLinksProps = {
  isOpen: boolean;
};

const NavLinks = ({ isOpen }: navLinksProps) => {
  return (
    <StyledLinks isOpen={isOpen}>
      <StyledLink>
        <Link to="/store">Store</Link>
      </StyledLink>
      <StyledLink>Blogs</StyledLink>
      <StyledLink>About Us</StyledLink>
      <StyledLink>Contact Us</StyledLink>
    </StyledLinks>
  );
};
export default NavLinks;
