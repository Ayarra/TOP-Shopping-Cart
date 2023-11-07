import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/global";
import { ShoppingCartProvider } from "../context/shoppingCartContext";

const theme = {
  colors: {
    primary: "#FFEEF2",
    secondary: "#698996",
    accent: "#011936",
  },
  responsive: "768px",
};

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <ShoppingCartProvider>
        <>
          <GlobalStyles />
          <Navbar />
          <Container>
            <Outlet></Outlet>
          </Container>
        </>
      </ShoppingCartProvider>
    </ThemeProvider>
  );
}

export default Root;
