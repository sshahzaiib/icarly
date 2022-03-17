import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Banner from "./assets/images/banner.png";
import { styled } from "@mui/system";

const BannerContainer = styled(Box)(({theme}) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}))

const Description = styled(Box)(({ theme }) => ({
  marginBottom: "2vh",
  width: "55%",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "1vw",
  },
}));

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <BannerContainer
                  id="banner__home"
                  mt={2}
                  px={3}
                  sx={{
                    backgroundImage: `url(${Banner})`,
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    borderRadius: 10,
                  }}
                  height="100vh"
                  width="100%">
                  <Box pt="15vw">
                    <Typography
                      variant="h1"
                      fontSize="9vw"
                      color="primary"
                      fontWeight={700}>
                      iCarly
                    </Typography>
                    <Description>
                      <Typography color="#fff" fontSize="1.3vw">
                        Carly Shay finds her previously "normal" life turned
                        upside down when her Internet show, "iCarly," becomes an
                        instant smash with young Web heads. With her parents
                        traveling abroad, Carly must rely on the help of friends
                        Sam and Freddie, and her quirky older brother, Spencer,
                        to cope with the newfound success.
                      </Typography>
                    </Description>
                    <Button
                      component={Box}
                      height="3vw"
                      width="10vw"
                      sx={{ fontSize: "1.3vw" }}
                      variant="contained">
                      Play
                    </Button>
                  </Box>
                </BannerContainer>
              </Grid>
              <Grid item sm={3}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
