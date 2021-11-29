import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 450,
        // width: 350,
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            height: 150,
        }
    }
}));
const Post = () => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        image='https://wallpaperaccess.com/full/1871775.jpg'
                        title="My Post"
                    />
                    <CardContent>
                        <Typography variant='h5' gutterBottom> Spectacular Nature</Typography>
                        <Typography variant='body'>
                            Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the room where Case waited. The last Case saw of Chiba were the dark angles of the blowers and the amplified breathing of the fighters. They floated in the puppet place had been a subunit of Freeside’s security system. Light from a service hatch at the rear wall dulling the roar of the Villa bespeak a turning in, a denial of the bright void beyond the hull.

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color="primary">
                        Share
                    </Button>
                    <Button size='small' color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        image='https://lh3.googleusercontent.com/proxy/22thkZNJMymKfY3ntAp5POVwoqZhgzTYIrCSRvhsfr8FOYbNirkHh5JWfSJy4eQQLdvJlCpjTDfyGMCGQ2bRuE_AwOpwhYUblBQbS5A-Dwlf67SWn1UUrcXRVwVjzpJJW8EZ'
                        title="My Post"
                    />
                    <CardContent>
                        <Typography variant='h5' gutterBottom> Wild Sunrise</Typography>
                        <Typography variant='body'>
                            Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the room where Case waited. The last Case saw of Chiba were the dark angles of the blowers and the amplified breathing of the fighters. They floated in the puppet place had been a subunit of Freeside’s security system. Light from a service hatch at the rear wall dulling the roar of the Villa bespeak a turning in, a denial of the bright void beyond the hull.

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color="primary">
                        Share
                    </Button>
                    <Button size='small' color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        image='https://wallpaperaccess.com/full/852373.jpg'
                        title="My Post"
                    />
                    <CardContent>
                        <Typography variant='h5' gutterBottom> Leopard In Natural Habitat </Typography>
                        <Typography variant='body'>
                            Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the room where Case waited. The last Case saw of Chiba were the dark angles of the blowers and the amplified breathing of the fighters. They floated in the puppet place had been a subunit of Freeside’s security system. Light from a service hatch at the rear wall dulling the roar of the Villa bespeak a turning in, a denial of the bright void beyond the hull.

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color="primary">
                        Share
                    </Button>
                    <Button size='small' color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        image='https://wallpaperaccess.com/full/1362404.jpg'
                        title="My Post"
                    />
                    <CardContent>
                        <Typography variant='h5' gutterBottom> Winter in Switzerland</Typography>
                        <Typography variant='body'>
                            Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the room where Case waited. The last Case saw of Chiba were the dark angles of the blowers and the amplified breathing of the fighters. They floated in the puppet place had been a subunit of Freeside’s security system. Light from a service hatch at the rear wall dulling the roar of the Villa bespeak a turning in, a denial of the bright void beyond the hull.

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color="primary">
                        Share
                    </Button>
                    <Button size='small' color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>

    );
}

export default Post;




