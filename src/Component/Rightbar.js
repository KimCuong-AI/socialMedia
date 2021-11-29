import { Avatar, AvatarGroup, Container, Divider, ImageList, ImageListItem, Link, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    avatarGroup: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom:theme.spacing(2),
    },
    title: {
        fontSize: '16px',
        fontWeight: 500,
        color: "#555",
    },
    link:{
        textDecoration:'none',
        marginRight:theme.spacing(3),
        color:'mediumvioletred'
    }
    
}));
const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography classes={classes.title} gutterBottom={true}> Your friends</Typography>
            <div className={classes.avatarGroup}>
                <AvatarGroup max={4} >
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                </AvatarGroup>
            </div>
            <Typography className={classes.title} gutterBottom>Gallery</Typography>
            <ImageList sx={{ width: '100%', height: 450,marginBottom:'30px' }} cols={2} rowHeight={164}>
                <ImageListItem  >
                    <img className={classes.listItem} src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format' />
                </ImageListItem>
                <ImageListItem >
                    <img className={classes.listItem} src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format' />
                </ImageListItem>
                <ImageListItem >
                    <img className={classes.listItem} src='https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format' />
                </ImageListItem>
                <ImageListItem >
                    <img className={classes.listItem} src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format' />
                </ImageListItem>
                <ImageListItem >
                    <img className={classes.listItem} src='https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format' />
                </ImageListItem>
                <ImageListItem >
                    <img className={classes.listItem} src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format' />
                </ImageListItem>
                <ImageListItem >
                    <img className={classes.listItem} src='https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format' />
                </ImageListItem>
                <ImageListItem >
                    <img className={classes.listItem} src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format' />
                </ImageListItem>
            </ImageList>
            <Typography gutterBottom>Category</Typography>
            <Link href='#' className={classes.link} variant='body2'>Sport</Link>
            <Link href='#' className={classes.link} variant='body2'>Food</Link>
            <Link href='#' className={classes.link} variant='body2'>Music</Link>
            <Divider flexItem style={{marginBottom:5,border:'none'}}/>
            <Link href='#' className={classes.link} variant='body2'>Movie</Link>
            <Link href='#' className={classes.link} variant='body2'>Book</Link>
            <Link href='#' className={classes.link} variant='body2'>Wild</Link>
           
        </Container>
    );
}
export default Rightbar;
