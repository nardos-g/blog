import React from "react";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography,
    } from '@mui/material';
import {Person} from '@mui/icons-material';

export const Home = () => {

    return(
        <>
            <Card
                sx={{
                    mt: 2,
                    mx: 'auto',
                    maxWidth: '80ch'
                }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    // image="https:mui.com/static/images/cards/contemplative-reptile.jpg"
                    image="images/image-list/burgers.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                         Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                    
            </Card>
        </>
    )
}
