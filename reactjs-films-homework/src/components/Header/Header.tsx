import { useStyles } from './styles';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const intl = useIntl();

  const [query, setQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && query) {
      console.log('query');
    } else return;
  };

  return (
    <AppBar position="static">
      <Container className={classes.container}>
        <Toolbar>
          <Box sx={{ flexGrow: 1.1 }}>
            <Typography
              variant="h5"
              onClick={() => navigate('/')}
              component="span"
              className={classes.logo}
            >
              ReactJS-Films
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0.9 }}>
            <Paper className={classes.paperActive}>
              <InputBase
                className={classes.input}
                value={query}
                onKeyUp={handleKeyUp}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={intl.formatMessage({ id: 'header-search-placeholder' })}
              />
              <IconButton sx={{ p: '10px' }} onClick={() => {}} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          <Box>
            <Typography className={classes.picker} onClick={handleClick}>
              EN
            </Typography>
            <Menu
              disableScrollLock={true}
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              transformOrigin={{ horizontal: 'center', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
              PaperProps={{
                elevation: 0,
                sx: {
                  border: '1px solid white',
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: -1,
                    right: 21,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    borderLeft: '1px solid white',
                    borderTop: '1px solid white',
                  },
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  setAnchorEl(null);
                }}
                disableRipple
              >
                <Typography>RU</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setAnchorEl(null);
                }}
                disableRipple
              >
                <Typography>EN</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
