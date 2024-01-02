// COSITA QUE DA VUELTA

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "components/Cards/RotatingCard";
import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "components/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Sumérgete en el aprendizaje
                    <br />
                    de manera diferente
                  </>
                }
                description="Transcripcion, Traducción, Resumen y Lectura de textos."
              />
              <RotatingCardBack
                image={bgBack}
                title="A un click de distancia"
                description="Prueba todos los beneficios que te ofrece esta aplicación. Hace click en el botón de abajo para comenzar."
                action={{
                  type: "internal",
                  route: "/pages/IA",
                  label: "Comenzar",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="transcribe"
                  title="Transcripción"
                  description="Permite la transcripción de videos extraídos de YouTube, para que puedas leer en cualquier momento."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="translate"
                  title="Traducción"
                  description="Traduce la transcripcion de tus videos favoritos para que no tengas que preocuparte por el idioma."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="summarize"
                  title="Resumen"
                  description="Resume el contenido de tus videos favoritos para que puedas leerlos en cualquier momento."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="headphones"
                  title="Lectura del texto"
                  description="Permite la lectura de diferentes textos, para que puedes eschuchar en cualquier momento"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
