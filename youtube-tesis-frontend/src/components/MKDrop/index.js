/* eslint-disable prettier/prettier */
import { useState } from "react";

// @mui material components
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Otis Kit PRO components
import MKButton from "components/MKButton";

function DropdownAndDropup() {
    const [dropdown, setDropdown] = useState(null);

    const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
    const closeDropdown = () => setDropdown(null);

    // Styles
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
            <MKButton variant="gradient" color="info" onClick={openDropdown}>
                Lenguajes <Icon sx={dropdownIconStyles}>expand_more</Icon>
            </MKButton>
            <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
                <MenuItem onClick={closeDropdown}>Ingles</MenuItem>
                <MenuItem onClick={closeDropdown}>Frances</MenuItem>
                <MenuItem onClick={closeDropdown}>Italiano</MenuItem>
            </Menu>

        </>
    );
}

export default DropdownAndDropup;