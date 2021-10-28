import React from "react";
import {Typography, Box, Grid, Button} from "@material-ui/core";
import "./Home.css";

function Home(){
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#9622A8" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" style={{ color: "white", fontWeight: "bold" }}>Bem-vindo ao Blog</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}></Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://www.revistabula.com/wp/wp-content/uploads/2019/12/livros-610x350.jpg" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;