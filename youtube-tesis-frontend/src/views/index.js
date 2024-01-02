// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

//Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Navbar from "components/Navbar";
import Footer from "components/Footers/SimpleFooter";

// Presentation sections
import Counters from "views/Secciones/Counters";
import Information from "views/Secciones/Information";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/banner2.png";

function Presentation() {
  return (
    <>
      <Navbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/IA",
          label: "IA's",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={1} lg={7} justifyContent="center" mx="auto">
            <Card
              sx={{
                p: 5,
                borderRadius: 8,
                backgroundColor: "rgba(128, 128, 128, 0.5)",
                textAlign: "center",
              }}
            >
              <MKTypography
                variant="h1"
                color="white"
                mt={-1} // Ajusta el valor de mt aquí para bajar el texto
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Linkedia: La IA en tus manos{" "}
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
              >
                Pipeline con Inteligencia Artificial para el estudio de videos de Youtube.
              </MKTypography>
            </Card>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default Presentation;
