import {
    Box,
    styled,
    Toolbar,
} from "@mui/material";

export const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));
export const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});