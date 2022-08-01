import { styled } from "@mui/material/styles";

export const BannerImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
    height: "100%"
}));