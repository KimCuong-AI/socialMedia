import { Grid } from '@mui/material';
import { makeStyles, ThemeProvider } from '@mui/styles';
import React from 'react';
import Add from './Component/Add';
import Feed from './Component/Feed';
import Leftbar from './Component/Leftbar';
import Navbar from './Component/Navbar';
import Rightbar from './Component/Rightbar';
import { theme } from './Theme';
const useStyles = makeStyles((theme) => ({

}))
const App = () => {
    const classes = useStyles();
    //add new expermient
    return (
        <div>
            <ThemeProvider theme={theme} >
                <Navbar />
                <Grid container>
                    <Grid item xs={2} >
                        <Leftbar />
                    </Grid>

                    <Grid item xs={7}>
                        <Feed />
                    </Grid>
                    <Grid item xs={3}>
                        <Rightbar />
                    </Grid>
                </Grid>
                <Add/>

            </ThemeProvider>

        </div>

    );
}
export default App;
