import React from "react";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Navbar = () => {

    return (
        <AppBar >
            <StyledToolbar>
                <Typography variant="h6">
                    Fake Store App
                </Typography>
                <Icons>
                    <Badge badgeContent={1} color="error">
                        <ShoppingBasketIcon/>
                    </Badge>
                </Icons>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar