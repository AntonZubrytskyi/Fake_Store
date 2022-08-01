import React from "react";
import {
    AppBar,
    Badge,
    Typography,
} from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from '@mui/icons-material/Login';
import { Icons, StyledToolbar } from "./styles";



const Navbar = () => {

    return (
        <AppBar >
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