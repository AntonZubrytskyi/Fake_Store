import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";



const Navbar = () => {

    return (
        <AppBar >
            <Toolbar>
                <Typography variant="h6">
                    Fake Store App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar