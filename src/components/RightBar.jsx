import { Avatar, AvatarGroup, Typography, ImageList, ImageListItem } from "@mui/material";
import React from "react";

export const Rightbar = () => {
    return(
       <div style={{position: 'fixed', marginRight: '20px'}}>
       <Typography
        variant="body2" color="text.secondary"
        gutterBottom
        sx={{
            mt: 1,
            fontWeight: 500
        }}
       >
           Live Friends
       </Typography>
        <AvatarGroup
            max={3}
            sx={{
                justifyContent: 'flex-end'
            }}
        >
            <Avatar>
                <img src="https://picsum.photos/30" alt="N" />
            </Avatar>
            <Avatar>
                <img src="https://picsum.photos/30" alt="N" />
            </Avatar>
            <Avatar>
                <img src="https://picsum.photos/30" alt="N" />
            </Avatar>
            <Avatar>
                <img src="https://picsum.photos/30" alt="N" />
            </Avatar>
            <Avatar>
                <img src="https://picsum.photos/30" alt="N" />
            </Avatar>
        </AvatarGroup>

        <Typography variant="body2" color="text.secondary" sx={{mt:2}}>
            Gallary
        </Typography>
        <ImageList rowHeight={130} cols={3}>
            <ImageListItem cols={1}>
                <img src="images/image-list/bike.jpg" alt="Gallary" />
            </ImageListItem>
            <ImageListItem>
                <img src="images/image-list/hats.jpg" alt="Gallary" />
            </ImageListItem>
            <ImageListItem>
                <img src="images/image-list/honey.jpg" alt="Gallary" />
            </ImageListItem>
            <ImageListItem>
                <img src="images/image-list/mushroom.jpg" alt="Gallary" />
            </ImageListItem>
            <ImageListItem>
                <img src="images/image-list/breakfast.jpg" alt="Gallary" />
            </ImageListItem>
            <ImageListItem>
                <img src="images/image-list/camera.jpg" alt="Gallary" />
            </ImageListItem>
        </ImageList>
       </div>
    )
}