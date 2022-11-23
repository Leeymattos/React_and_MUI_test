import { Box, Container, styled, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import Navbar from "./Navbar";

export default function Hero() {

    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontsize: "64px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px"
        },
    }));

    return (
        <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
            <Container>
                <Navbar />
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Typography variant="body2" sx={
                            {
                                fontSize: "18px",
                                color: "#687690",
                                fontWeight: "500",
                                mt: 10,
                                mb: 4
                            }}
                        >
                            Welcome to Besnik Agency
                        </Typography>
                        <Title variant="h1">
                            Discover a place where you'll love to live.
                        </Title>
                        <Typography variant="body2" sx={{
                            fontSize: "18px",
                            color: "#5A6473",
                            my: 4
                        }}>
                            Be the first to get the best real estate deals before they hit the
                            mass market! Hot foreclosure deals with one simple search!
                        </Typography>
                        <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="More About Us" heroBtn={true} />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    )
}