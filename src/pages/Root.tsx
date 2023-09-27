import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/global";
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
      <>
        <GlobalStyles />
        <Navbar />
        <Container>
          <Outlet></Outlet>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default Root;
