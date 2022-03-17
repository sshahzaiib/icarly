import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";
import "./App.css";
import Banner from "./assets/images/banner.png";
import BannerMobile from "./assets/images/banner_mobile.png";

const BannerContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  height: "100vh",
  width: "100%",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    height: "70vh",
    paddingLeft: theme.spacing(0.2),
    paddingRight: theme.spacing(0.2),
    backgroundImage: `url(${BannerMobile})`,
  },
}));

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
                <BannerContainer id="banner__home" mt={2} px={3}>
                  <Hidden smDown>
                    <Box pt="15vw">
                      <Typography
                        variant="h1"
                        fontSize="9vw"
                        color="primary"
                        fontWeight={500}>
                        iCarly
                      </Typography>
                      <Description>
                        <Typography color="#fff" fontSize="1.3vw">
                          Carly Shay finds her previously "normal" life turned
                          upside down when her Internet show, "iCarly," becomes
                          an instant smash with young Web heads. With her
                          parents traveling abroad, Carly must rely on the help
                          of friends Sam and Freddie, and her quirky older
                          brother, Spencer, to cope with the newfound success.
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
                  </Hidden>
                  <Hidden smUp>
                    <Box
                      position="absolute"
                      bottom={0}
                      width="100%"
                      px={3}
                      sx={{
                        backgroundImage:
                          "linear-gradient(#16151c3b, #16151ce0, #16151c)",
                      }}>
                      <Typography
                        variant="h1"
                        fontSize="15vw"
                        color="primary"
                        fontWeight={500}
                        align="center"
                        sx={{textShadow: "4px 2px 8px #fec72f6b"}}>
                        iCarly
                      </Typography>
                      <Typography color="#fff" fontSize="4vw" align="center">
                        Carly Shay finds her previously "normal" life turned
                        upside down when her Internet show, "iCarly," becomes an
                        instant smash with young Web heads.
                      </Typography>
                      <Box width="100%" textAlign="center">
                        <Button
                          sx={{ fontSize: "4vw", mt: 2, width: "45%" }}
                          variant="contained">
                          Play
                        </Button>
                      </Box>
                    </Box>
                  </Hidden>
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
