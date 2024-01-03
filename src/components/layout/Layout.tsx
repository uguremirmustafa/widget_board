import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { PageLink } from '../../types';

const LINKS: PageLink[] = [
  {
    name: 'Homepage',
    path: '/',
    icon: 'ion:home-outline',
  },
  {
    name: 'Widgets',
    path: '/widgets',
    icon: 'solar:widget-2-broken',
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: 'carbon:settings',
  },
];

const drawerWidth = 220;

function Layout(): JSX.Element {
  const navigate = useNavigate();
  const theme = useTheme();

  function openPage(item: PageLink) {
    navigate(item.path);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        open
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'absolute',
            border: 'none',
            overflowX: 'hidden',
            bgcolor: theme.palette.background.paper,
            borderRadius: 0,
            p: 1,
          },
        }}
      >
        <List>
          {LINKS.map((item) => {
            return (
              <ListItem key={item.path} disablePadding>
                <ListItemButton onClick={() => openPage(item)}>
                  <ListItemIcon>
                    <Icon icon={item.icon} fontSize={24} />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box sx={{ p: 4, flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
