import { Collections, Home, Person, Videocam } from '@mui/icons-material';
import { Drawer, 
    List,
    ListItem, Typography, IconButton, Avatar, Divider, } from '@mui/material';
import React, { useState } from 'react';

export const Leftbar = ({menu, callme}) => {
    return(
        <>
            <Drawer
                variant="temporary"
                open={menu}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
                        position: 'fixed',
                        top: 50
                    }
                }}
            >
                <Typography 
                    variants='body2' 
                    color="text.secondary"
                    sx={{mt: 6, width: 'fit-content', mr:0, fontWeight: 'bold'}}
                >
                    navigation
                </Typography>

                <List>
                    <Divider 
                        sx={{
                            mb: 2,
                            alignContent: 4
                        }}
                    />
                    <ListItem sx={{mb:1}} onClick={() => callme()} >
                        <Home sx={{mr: 1}}/>
                        <Typography>
                            Home
                        </Typography>
                    </ListItem>
                    <ListItem sx={{mb:1}} onClick={() => callme()}>
                        <Person sx={{mr: 1}}/>
                        <Typography>
                            friends
                        </Typography>
                    </ListItem>
                    <ListItem sx={{mb:1}} onClick={() => callme()}>
                        <Collections sx={{mr: 1}}/>
                        <Typography>
                            Collections
                        </Typography>
                    </ListItem>
                    <ListItem  sx={{mb:1}} onClick={() => callme()}>
                        <Videocam sx={{mr: 1}}/>
                        <Typography>
                            Videos
                        </Typography>
                    </ListItem>
                </List>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {xs: 'none', md: 'block'},
                    '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
                        position: 'fixed',
                        top: 50,
                        zIndex: 1000
                    }
                }}
            >
                <Typography 
                    variants='body2' 
                    color="text.secondary"
                    sx={{mt: 6, width: 'fit-content', ml:1, fontWeight: 'bold'}}
                >
                    navigation
                </Typography>
                
                <List>
                    <Divider 
                        sx={{
                            mb: 2,
                            alignContent: 4
                        }}
                    />
                    <ListItem sx={{mb:1}} onClick={() => callme()} >
                        <Home sx={{mr: 1}}/>
                        <Typography>
                            Home
                        </Typography>
                    </ListItem>
                    <ListItem sx={{mb:1}} onClick={() => callme()}>
                        <Person sx={{mr: 1}}/>
                        <Typography>
                            friends
                        </Typography>
                    </ListItem>
                    <ListItem sx={{mb:1}} onClick={() => callme()}>
                        <Collections sx={{mr: 1}}/>
                        <Typography>
                            Collections
                        </Typography>
                    </ListItem>
                    <ListItem  sx={{mb:1}} onClick={() => callme()}>
                        <Videocam sx={{mr: 1}}/>
                        <Typography>
                            Videos
                        </Typography>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}