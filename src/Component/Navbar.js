import { Notifications, Search } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, InputBase, alpha, Badge, Stack, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    toolbar: { 
        display: 'flex',
        justifyContent: 'space-between'
    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up("sm")]: {
            display: 'block',
        },
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width:'50%'
    },
    searchButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")]:{
            display:'none'
        }
    },
    input: {
        color: 'white',
    },
    stack:{
        display: 'flex',
        alignItems:'center'
    }
})) 
const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    KimCuong
                </Typography>
                <Typography variant="h6" className={classes.logoSm} >
                    LAMA
                </Typography>
                <div className={classes.search}>
                    <Search className={classes} />
                    <InputBase className={classes.input}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div >
                    <Stack spacing={2} direction="row" className={classes.stack} >
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <Notifications />
                        </Badge>
                        <Avatar alt="Remy Sharp" src="https://icdn.dantri.com.vn/thumb_w/640/2021/04/23/hot-girl-quang-ngaidocx-1619135586337.jpeg" />
                    </Stack>
                </div>
                
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
