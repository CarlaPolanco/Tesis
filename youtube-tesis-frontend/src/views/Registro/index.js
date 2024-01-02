/* eslint-disable prettier/prettier */
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Navbar from "components/Navbar";
import Footer from "components/Footers/SimpleFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/bg-coworking.jpeg";

// React
import { useState } from "react";

function Registro() {

    const [dropdown, setDropdown] = useState(null);
    const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
    const closeDropdown = () => setDropdown(null);

    const iconStyles = {
        ml: 1,
        fontWeight: "bold",
        transition: "transform 200ms ease-in-out",
    };

    const dropdownIconStyles = {
        transform: dropdown ? "rotate(180deg)" : "rotate(0)",
        ...iconStyles,
    };

    return (
        <>
            <MKBox position="fixed" top="0.5rem" width="100%">
                <Navbar
                    routes={routes}
                    action={{
                        type: "internal",
                        route: "/pages/Login",
                        label: "Iniciar Sesion",
                        color: "info",
                    }}
                />
            </MKBox>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} lg={6}>
                    <MKBox
                        display={{ xs: "none", lg: "flex" }}
                        width="calc(100% - 2rem)"
                        height="calc(100vh - 2rem)"
                        borderRadius="lg"
                        ml={2}
                        mt={2}
                        sx={{ backgroundImage: `url(${bgImage})` }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={10}
                    md={7}
                    lg={6}
                    xl={4}
                    ml={{ xs: "auto", lg: 6 }}
                    mr={{ xs: "auto", lg: 6 }}
                >
                    <MKBox
                        bgColor="white"
                        borderRadius="xl"
                        shadow="lg"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        mt={{ xs: 20, sm: 18, md: 20 }}
                        mb={{ xs: 20, sm: 18, md: 20 }}
                        mx={3}
                    >
                        <MKBox
                            variant="gradient"
                            bgColor="info"
                            coloredShadow="info"
                            borderRadius="lg"
                            p={2}
                            mx={2}
                            mt={-3}
                        >
                            <MKTypography variant="h3" color="white" textAlign="center">
                                Registrate
                            </MKTypography>
                        </MKBox>
                        <MKBox p={3}>
                            <MKBox width="100%" component="form" method="post" autoComplete="off">
                                <Grid container spacing={6}>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            variant="standard"
                                            label="Nombre"
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            variant="standard"
                                            label="Apellido"
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            variant="standard"
                                            label="Nickname"
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            variant="standard"
                                            label="Contraseña"
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <MKInput
                                            type="email"
                                            variant="standard"
                                            label="Email"
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={6} textAlign="center">
                                        <MKButton variant="gradient" color="info" onClick={openDropdown}>
                                            Lenguajes <Icon sx={dropdownIconStyles}>expand_more</Icon>
                                        </MKButton>
                                        <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
                                            <MenuItem onClick={closeDropdown}>Ingles</MenuItem>
                                            <MenuItem onClick={closeDropdown}>Español</MenuItem>
                                            <MenuItem onClick={closeDropdown}>Frances</MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                                    <MKButton type="submit" variant="gradient" color="info">
                                        Registrar
                                    </MKButton>
                                </Grid>
                            </MKBox>
                        </MKBox>
                    </MKBox>
                </Grid>
            </Grid>
            <MKBox pt={6} px={1} mt={6}>
                <Footer content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Registro;
