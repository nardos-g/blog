import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { InputBase, List, ListItemText, alpha, Badge, Avatar, useTheme} from '@mui/material';
import { Mail, Notifications, Search, Menu } from '@mui/icons-material';
import { Box, palette, shape, styled } from '@mui/system';
import { grey } from '@mui/material/colors';


export const NavBar = ({callme}) => {
  const theme = useTheme();
  const [search, setSearch] = useState(false);

  const openMenu = () => {
    callme();
  }

  return (
    <AppBar sx={{ml: 'auto', position: 'fixed'}} elevation={0} color="primary">

      <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        <Typography variant="h6" sx={{ 
              display: ['none', 'none','flex', 'flex', 'flex'],
            //   [theme.breakpoints.up('md')]: {a
            //       display: 'flex'
            // },
            }}
          >
          <List sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 200,
          }}>
            <ListItemText primary='menus' />
            <ListItemText primary='Files' />
            <ListItemText onClick={openMenu} primary='Hipes' />
          </List>
        </Typography>
        <Menu 
          onClick={() => {openMenu()}}
          sx={{
            [theme.breakpoints.up('md')]:{
              display: 'none',
            }
          }}/>


        <div style={{flex: 1}}>

          <Box sx={{
            display: search ? 'flex' : ['none','none','flex','flex','flex'],
            alignItems: 'center',
            width: '60%',
            bgcolor: alpha(grey[300], .2),
            borderRadius: 2,
            ml: 'auto'
          }}>

            <Search sx={{mx:2}}/>
            <InputBase 
              placeholder='search....' 
              sx={{color: 'white', 
              width: '100%'}}
            />
          </Box>

          <Search 
            onClick={() => setSearch(true)} 
            sx={{ml: 'auto', 
            display: search ? 'none' : ['flex','flex','none','none','none']}}
          />
        </div>


        <div 
          style={{
          display: search ? 'none' : 'flex', 
          alignItems: "center"}}
        >
          
          <Badge 
            badgeContent={2}
            color='secondary' 
            sx={{ml:3, mr:1}}>
              <Mail />
          </Badge>

          <Badge 
            badgeContent={4} 
            color='secondary' 
            sx={{mx:1}}>
              <Notifications />
          </Badge>
          
          <Avatar sx={{mx:1}}>
            <img src='https://picsum.photos/id/1027/50' alt='avatar' />
          </Avatar>
        </div>
      </Toolbar>

    </AppBar>
  )
}
