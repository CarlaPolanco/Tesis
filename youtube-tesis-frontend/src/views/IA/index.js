/* eslint-disable prettier/prettier */

// React
import { useState } from "react";
import axios from "axios";

// Componentes
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import Navbar from "components/Navbar";
import RecVideo from "components/VideoYoutube";
import Footer from "components/Footers/SimpleFooter";
import Acordeon from "components/Acordeon";

// @mui material components
import { Container, Grid, TextField, Typography } from "@mui/material";

// Rutas
import routes from "routes";
import footerRoutes from "footer.routes";

function Pagetraslate() {

    const currencies = [
        {
            value: '',
            label: 'Seleccione el idioma del video',
        },
        {
            value: 'en',
            label: 'Ingles',
        },
        {
            value: 'es',
            label: 'Español',
        },
        {
            value: 'pt',
            label: 'Portugues',
        },
        {
            value: 'fr',
            label: 'Frances',
        },
    ];

    const [LinkVideo, setLinkVideo] = useState("");
    const [IdVideo, setIdVideo] = useState("");
    const [lenguaje, setlenguaje] = useState("");
    const [cuadroTexto, setCuadroTexto] = useState("");

    const handleChangeTexto = (texto) => {
        setCuadroTexto(texto);
    };

    const handleDescargar = () => {
        const element = document.createElement("a");
        const file = new Blob([cuadroTexto], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "Texto.txt";
        document.body.appendChild(element);
        element.click();
    };

    const fetchData = async () => {

        try {

            const descargarVideo = await axios.get("http://localhost:8000/descargar/" + IdVideo);

            const response = await axios.post("http://localhost:8080/videos",
                {
                    "url": IdVideo,
                    "titulo": descargarVideo.data.titulo,
                    "descripcion": descargarVideo.data.descripcion,
                    "duracion": descargarVideo.data.duracion,
                    "fecha_publicacion": descargarVideo.data.fecha,
                    "canal": descargarVideo.data.autor
                });

            console.log(response);

        } catch (error) {
            console.log(error);
        }
    };

    const GenerarVideo = () => {
        setIdVideo(getIdVideo(LinkVideo));
    }

    const cambiarLink = (e) => {
        const value = e.target.value;
        setLinkVideo(value);
    }

    const handleChange = (event) => {
        setlenguaje(event.target.value);
        fetchData();
    };

    return (
        <>
            <Navbar
                routes={routes}
                action={{
                    type: "internal",
                    route: "/",
                    label: "Inicio",
                    color: "info",
                }}
                sticky
            />
            <Container sx={{ border: 3, top: 100 }}>
                <Typography variant="h1" gutterBottom sx={{ textAlign: "center" }}>
                    Linkedia
                </Typography>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h1" gutterBottom sx={{ textAlign: "center" }}>
                            Título del video
                        </Typography>
                        <Grid container spacing={2} sx={{ padding: 3 }}>
                            <Grid item xs={12} sm={8}>
                                <MKInput
                                    label="Link YouTube" fullWidth
                                    name="LinkVideo"
                                    id="LinkVideo"
                                    value={LinkVideo}
                                    onChange={cambiarLink}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <MKButton variant="gradient" color="info" fullWidth sx={{ height: "100%" }} onClick={GenerarVideo}>
                                    Generar
                                </MKButton>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ padding: 2 }}>
                            <RecVideo videoId={IdVideo} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h1" gutterBottom sx={{ textAlign: "center" }}>
                            ¿Qué Quieres Hacer?
                        </Typography>
                        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", padding: 2 }}>
                            Seleccione el idioma del video
                            <Grid sx={{ padding: 2 }}>
                                <TextField
                                    id="filled-select-lenguaje-native"
                                    select
                                    label="Lenguaje"
                                    value={lenguaje}
                                    onChange={handleChange}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    helperText="Selecciona el lenguaje del video"
                                    variant="filled"
                                >
                                    {currencies.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                        </Typography>
                        <Acordeon LinkVideo={[LinkVideo, lenguaje]} handleChangeTexto={handleChangeTexto} />
                    </Grid>
                </Grid>
                <Grid container sx={{ padding: 2 }}>
                    <textarea name="InputText" rows={15} cols={800} value={cuadroTexto} />
                </Grid>
                <Grid item sx={{ padding: 1 }}>
                    <MKButton onClick={handleDescargar}
                        variant="gradient" color="info"
                        fullWidth sx={{ height: "100%" }} >
                        Descargar
                    </MKButton>
                </Grid>
                <Footer content={footerRoutes} />
            </Container >
        </>
    );
}

function getIdVideo(link) {
    let id = link.split("v=");
    console.log(id[1]);
    return id[1];
}

export default Pagetraslate;