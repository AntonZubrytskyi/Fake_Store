import React from "react";
import {
    AppBar,
    Badge,
    Typography,
} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from '@mui/icons-material/Login';
import { Icons, StyledToolbar } from "./styles";



const Navbar = () => {

    const navigate = useNavigate()

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography onClick={() => navigate('/')}  variant="h6">
                    Fake Store App
                </Typography>
                <Icons>
                    <LoginIcon onClick={()=>navigate('/login')}/>
                    <Badge badgeContent={1} color="error">
                        <ShoppingBasketIcon onClick={() => navigate('/cart')} />
                    </Badge>
                </Icons>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar