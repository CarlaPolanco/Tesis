//JUSTO ABAJO DE LA FOTO

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

//components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "components/Cards/CounterCards";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={10}
              suffix="M"
              title="EduTubers"
              description="El término EduTuber tuvo su origen en 2008, cuando fue usado en un sitio web francés que
              sirvió como repositorio de videos educativos creados en YouTube, con ciertas características
              como: video educativo y de alta calidad."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={15}
              suffix="+"
              title="Link"
              description="Conectate a los EduTuber de todo el mundo, derribando las barreras del idioma y la distancia."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={4}
              title="Modelos de Inteligencia Artificial"
              description="Para obtener nuestros resultados trabajamos con 4 modelos de Deep Learning,
              enfocados en la traducción, transcripcion y resumenes de textos."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
