import { Box, Container, styled, Typography } from '@mui/material'
import logoImg from '../assets/logo.png'
import starsImg from '../assets/Star.png'
import logosImg from '../assets/logos.png'

export default function Companies() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBotton: theme.spacing(4)
    }
  }))

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      marginBotton: theme.spacing(4)
    }
  }))

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImg} alt="logo" style={{ maxWidth: "100%" }} />
          <Typography
            variant='body2'
            sx={{ color: "#7D8589", fontSize: "16px", fontWeight: "bold", mt: 2 }}
          >
            More than 45,000 trust Besnik
          </Typography>
        </CustomBox>

        <Box>
          <img src={starsImg} alt="stars" style={{ maxWidth: "100%" }} />
          <Typography
            variant='body2'
            sx={{ color: "#7D8589", fontSize: "16px", fontWeight: "bold", mt: 2 }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img src={logosImg} alt="logos" />
      </Container>
    </Box>
  )
}