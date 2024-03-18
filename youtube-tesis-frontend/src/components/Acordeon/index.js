/* eslint-disable prettier/prettier */

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, TextField } from '@mui/material';

import React, { useState } from "react";
import axios from "axios";


import MKButton from "components/MKButton";

import OpenAI from "openai";
import PropTypes from 'prop-types';

ControlledAccordions.propTypes = {
    LinkVideo: PropTypes.array,
    handleChangeTexto: PropTypes.func
};

export default function ControlledAccordions({ LinkVideo = LinkVideo, handleChangeTexto = handleChangeTexto }) {

    const [expanded, setExpanded] = useState(false);
    const [tipoLectura, setlectura] = useState('');
    const [idiomaResumen, setidiomaResumen] = useState('');
    const [idiomaTraduccion, setidiomaTraduccion] = useState('');

    const handleChangelectura = (event) => {
        setlectura(event.target.value);
        console.log(event.target.value);
    };
    const handleChangeRes = (event) => {
        setidiomaResumen(event.target.value);
        console.log(event.target.value);
    };
    const handleChangeTraduccion = (event) => {
        setidiomaTraduccion(event.target.value);
        console.log(event.target.value);
    }

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

    const currenciesLectura = [
        {
            value: '',
            label: 'Seleccione que desea escuchar',
        },
        {
            value: 'traduccion',
            label: 'Traduccion',
        },
        {
            value: 'resumen',
            label: 'Resumen',
        },
    ];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const openai = new OpenAI({ apiKey: "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", dangerouslyAllowBrowser: true });

    const BotonResumir = async () => {
        if (LinkVideo[0] === "" || LinkVideo[1] === "" || LinkVideo === undefined) {
            alert("Falta un parametro");

        } else {
            try {
                const texto = await axios.get("http://localhost:8080/transcripciones/" + getIdVideo(LinkVideo[0]));

                const completion = await openai.chat.completions.create({
                    messages: [{ role: "system", content: "Necesito que me resumas el siguiente texto como un profesional y pensando en el posterior estudio de este:" + texto.data.contenido }],
                    model: "gpt-3.5-turbo",
                });
                handleChangeTexto(completion.choices[0].message.content);

                const response = await axios.post("http://localhost:8080/resumenes",
                    {
                        "contenido": completion.choices[0].message.content,
                        "longitud": 7,
                        "fecha_creacion": "enero",
                        "idioma_origen": LinkVideo[1],
                        "idioma_resumen": "string",
                        "palabras_clave": "string",
                        "url_video": getIdVideo(LinkVideo[0])
                    });

                console.log(response);

            } catch (error) {
                console.log(error);
            }
        }
    };

    const BotonMinutas = async () => {
        if (LinkVideo[0] === "" || LinkVideo[1] === "" || LinkVideo === undefined) {
            alert("Falta un parametro");
        } else {
            try {
                const texto = await axios.get("http://localhost:8080/transcripciones/" + getIdVideo(LinkVideo[0]));

                const completion = await openai.chat.completions.create({
                    messages: [{ role: "system", content: "Necesito que me crees unas minutas de el siguiente texto como un profesional y pensando en el posterior estudio de este:" + texto.data.contenido }],
                    model: "gpt-3.5-turbo",
                });
                handleChangeTexto(completion.choices[0].message.content);

            } catch (error) {
                console.log(error);
            }
        }
    };

    const BotonTraducir = async () => {
        if (LinkVideo === null || LinkVideo === undefined) {
            alert("Falta un parametro");
        }
        if (LinkVideo[0] === "" || LinkVideo[1] === "") {
            alert("Falta un parametro");
        } else {
            try {

                const Traduccion = await axios.get("http://localhost:8000/traducir/" + 'es/' + 'en');

                const response = await axios.post("http://localhost:8080/traducciones",
                    {
                        "contenido": Traduccion.data.contenido,
                        "contenido_original": "string",
                        "longitud": Traduccion.data.longitud,
                        "fecha_creacion": "enero",
                        "idioma_origen": LinkVideo[1],
                        "idioma_traducido": 'es',
                        "url_video": getIdVideo(LinkVideo[0])
                    });
                console.log(response);
                handleChangeTexto(Traduccion.data.contenido);

            } catch (error) {
                console.log(error);
            }
        }
    }

    const BotonTranscribir = async () => {
        if (LinkVideo === null || LinkVideo === undefined) {
            alert("Falta un parametro 2");
        }
        if (LinkVideo[0] === "" || LinkVideo[1] === "") {
            alert("Falta un parametro 1");
        } else {
            try {

                const Transcripcion = await axios.get("http://localhost:8000/transcribir");

                const response = await axios.post("http://localhost:8080/transcripciones",
                    {
                        "contenido": Transcripcion.data.contenido,
                        "longitud": Transcripcion.data.longitud,
                        "fecha_creacion": "enero",
                        "idioma_origen": LinkVideo[1],
                        "idioma_transcripcion": LinkVideo[1],
                        "id_video": getIdVideo(LinkVideo[0])
                    });

                console.log(response);
                handleChangeTexto(Transcripcion.data.contenido);

            } catch (error) {
                console.log(error);
            }
        }

    };

    const BotonLectura = async () => {
        if (LinkVideo === null || LinkVideo === undefined) {
            alert("Falta un parametro");
        }
        if (LinkVideo[0] === "" || LinkVideo[1] === "") {
            alert("Falta un parametro");
        } else {
            try {
                const texto = await axios.get("http://localhost:8000/lectura");
                console.log(texto.data);

            } catch (error) {
                console.log(error);
            }
        }
    };

    function getIdVideo(link) {
        let id = link.split("v=");
        console.log(id[1]);
        return id[1];
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
                        Transcripcion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <MKButton variant="gradient" color="info" fullWidth sx={{ height: "100%" }} onClick={BotonTranscribir}>
                        Transcribir
                    </MKButton>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
                        Traductor
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Container>

                        <TextField
                            id="filled-select-lenguaje-native"
                            select
                            label="Lenguaje"
                            value={idiomaTraduccion}
                            onChange={handleChangeTraduccion}
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

                    </Container>

                    <MKButton variant="gradient" color="info" fullWidth sx={{ height: "100%" }} onClick={BotonTraducir}>
                        Traducir
                    </MKButton>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>Resumen</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Container >
                        <TextField
                            id="filled-select-lenguaje-native"
                            select
                            label="Lenguaje"
                            value={idiomaResumen}
                            onChange={handleChangeRes}
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
                    </Container>
                    <MKButton variant="gradient" color="info" fullWidth sx={{ height: "100%" }} onClick={BotonResumir}>
                        Resumir
                    </MKButton>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
                        Lectura
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Container>
                        <TextField
                            id="filled-select-lenguaje-native"
                            select
                            label="Lenguaje"
                            value={tipoLectura}
                            onChange={handleChangelectura}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Selecciona la lectura"
                            variant="filled"
                        >
                            {currenciesLectura.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Container>
                    <MKButton variant="gradient" color="info" fullWidth sx={{ height: "100%" }} onClick={BotonLectura}>
                        Lectura
                    </MKButton>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>ChatGpt</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MKButton variant="gradient" color="info" fullWidth sx={{ height: "100%" }} onClick={BotonMinutas}>
                        Minutas con GPT
                    </MKButton>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}