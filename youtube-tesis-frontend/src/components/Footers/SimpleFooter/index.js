import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import typography from "assets/theme/base/typography";

function SimpleFooter({ light }) {
  const { size } = typography;

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
        >
          &copy; {new Date().getFullYear()}, Hecho con
          <MKBox fontSize={size.md} color={light ? "white" : "text"} mb={-0.5} mx={0.25}>
            <Icon color="inherit" fontSize="inherit">
              favorite
            </Icon>
          </MKBox>
          por
          <MKTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
            &nbsp; Carla P&nbsp;
          </MKTypography>
          para la USACH.
        </MKBox>
      </MKBox>
    </Container>
  );
}

SimpleFooter.propTypes = {
  light: PropTypes.bool,
};

export default SimpleFooter;
