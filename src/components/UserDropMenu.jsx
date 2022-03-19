import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { LocalMall, Login, Person } from '@mui/icons-material';
import { logout } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


export default function UserDropMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useDispatch()
    const handleLogout =()=>{
        logout(dispatch);
        return window.location.reload(false);
    }
    const currentUser = useSelector(state => state.user?.currentUser);

    return (
        <React.Fragment>
            
            <Box  sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' ,}}>
                {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
                <Tooltip  title="Account settings">
                    <IconButton 
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 0 ,backgroundColor:"#f4ffff"}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Person sx={{ width: 30, height: 30 ,}}></Person>



                       
                    </IconButton>
                </Tooltip>
              
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
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
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                
               {!currentUser?<>
                 
                <Link to="/register" style={{textDecoration:"inherit",color:"inherit"}}>
                <MenuItem>

                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Registration
                </MenuItem>
                </Link>
                 <Link to="/login" style={{textDecoration:"inherit",color:"inherit"}}>
                <MenuItem>

                    <ListItemIcon>
                        <Login fontSize="small" />
                    </ListItemIcon>
                    Login
                </MenuItem>
                </Link>
               </>
:

<>
                <Link to={"/user/"+currentUser?._id} style={{textDecoration:"inherit",color:"inherit"}}>
                <MenuItem>

                    <ListItemIcon>
                        <Person fontSize="small" />
                    </ListItemIcon>
                    My account
                </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
                </>
                }
            </Menu>
        </React.Fragment>
    );
}
