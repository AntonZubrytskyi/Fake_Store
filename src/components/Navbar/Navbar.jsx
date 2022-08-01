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
import {useNavigate} from 'react-router-dom'

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