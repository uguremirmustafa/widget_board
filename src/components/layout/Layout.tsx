import {
  Box,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  useTheme,
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import React from 'react';
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

function Layout(): JSX.Element {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;
  const theme = useTheme();

  function openPage(item: PageLink) {
    navigate(item.path);
    setOpen(false);
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        sx={{ position: 'absolute', top: 1, left: 1 }}
      >
        <Icon icon="ri:menu-2-line" />
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="bottom-end"
        style={{ zIndex: theme.zIndex.drawer + 1 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{
                p: 2,
                marginLeft: 4,
                backgroundColor: theme.palette.background.paper,
                borderRadius: '0.5rem',
                border: `2px solid ${theme.palette.text.primary}`,
              }}
            >
              <List disablePadding>
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
            </Paper>
          </Fade>
        )}
      </Popper>
      <Box sx={{ p: 5 }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
