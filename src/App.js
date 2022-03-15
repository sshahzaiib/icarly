import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container, Grid } from "@mui/material";
import Banner from "./assets/images/banner.webp";
import BannerMobile from "./assets/images/banner-mobile.png";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item md={9} xs={12}>
                <Box
                  sx={{
                    backgroundImage: `url(${sm ? BannerMobile : Banner})`,
                    backgroundPosition: "center 10%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: 10,
                  }}
                  height={350}
                  width="100%"
                />
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
