import React from "react";
import {
    AppBar,
    Badge,
    Box,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from '@mui/icons-material/Login';

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
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6">
                    Fake Store App
                </Typography>
                <Icons>
                    <LoginIcon/>
                    <Badge badgeContent={1} color="error">
                        <ShoppingBasketIcon/>
                    </Badge>
                </Icons>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar