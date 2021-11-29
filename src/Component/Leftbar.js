import { Home, Person,List, PhotoCamera, PlayCircleOutline, TabletMac, Bookmark, Storefront, Settings, ExitToApp } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyles=makeStyles((theme)=>({
    container:{
        height:'100vh', 
        color:'white',
        paddingTop:theme.spacing(10),
        position:'sticky',
        top:0,
        backgroundColor:theme.palette.primary.main,
        [theme.breakpoints.up('md')]:{
            backgroundColor:'white',
            color:'#555',
            border:'1px solid #ece7e7'
        }
    },
    item:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        cursor: 'pointer',
        marginBottom:theme.spacing(3),
        [theme.breakpoints.up("md")]:{
            marginBottom:theme.spacing(4),
            cursor:'pointer',
            justifyContent:'left',
        },
    },
    icon:{  
        marginRight:theme.spacing(1),
        fontSize:'25px',
        [theme.breakpoints.up('md')]:{
            fontSize:'20px'
        }
    },
    text:{
        fontWeight:500,
        [theme.breakpoints.down("md")]:{
            marginBottom:theme.spacing(3),
            cursor:'pointer', 
            display:'none',
        }
    }
}));
const Leftbar = () => {
    const classes=useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text} >Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text} >Friends</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon} />
                <Typography className={classes.text} >List</Typography>
            </div><div className={classes.item}>
                <PhotoCamera className={classes.icon} />
                <Typography className={classes.text} >Camera</Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.text} >Videos</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.text} >Collections</Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.text} >Apps</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon} />
                <Typography className={classes.text} >Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text} >Settings</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.text} >Log out</Typography>
            </div>
        </Container>
    );
}

export default Leftbar;
