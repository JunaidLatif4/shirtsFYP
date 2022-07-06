import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa"

import logo from '../../Assets/images/navlogo.png'
import Cart from "../../Pages/Cart/Cart"

import { useSelector } from "react-redux"

import './Navbar.scss'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Navbar = () => {
  let history = useHistory()

  let userData = useSelector((state) => state.userData)
  let cartData = useSelector((state) => state.cartData)

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box

      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"

    >
      <>
        <div className="ham_nav_main">
          <AiOutlineClose style={{ color: 'white' }} className='icons' onClick={toggleDrawer(anchor, false)} />
          <div className='navbar__container'>
            <NavLink to='/' style={{ textDecoration: 'none' }}  >

              <div className='items'>Home</div>
            </NavLink>
            <div className='items'>About us</div>
            <div className='items'>Contact us</div>
            {
              userData ?
                <>

                </>
                :
                <>
                  <div className="get">
                    <button onClick={() => history.push("/signup")}>Register</button>
                  </div>
                  <NavLink to='/login' style={{ textDecoration: 'none' }}  >
                    <div className="sign">
                      <button>Sign In</button>
                    </div>
                  </NavLink>
                </>
            }

          </div>
        </div>
      </>
    </Box>
  );

  return (
    <>
      <div className='main_nav'>
        <div className="nav_main_content">
          <div className="nav_content_left">
            <NavLink to='/' style={{ textDecoration: 'none' }}  >

              <img className='nav_logo' src={logo} />
            </NavLink>
            <NavLink to='/' style={{ textDecoration: 'none' }}  >

              <div className="nav_items">Home</div>
            </NavLink>
            <div className="nav_items">About us</div>
            <div className="nav_items">Contact us</div>
          </div>
          <div className="nav_content_right">
            {
              userData ?
                <>
                  <div className="get">
                    <button onClick={() => history.push("/signup")}>Sign Out</button>
                  </div>
                  <div className="cart_nav" onClick={handleOpen}>
                    {
                      cartData && cartData.length >= 1 &&
                      <div className="count">
                        {cartData.length}
                      </div>
                    }
                    <FaShoppingCart />
                  </div>
                </>
                :
                <>
                  <div className="get">
                    <button onClick={() => history.push("/signup")}>Register</button>
                  </div>
                  <NavLink to='/login' style={{ textDecoration: 'none' }}  >
                    <div className="sign">
                      <button>Sign In</button>
                    </div>
                  </NavLink>
                </>
            }

          </div>
        </div>
        <div className='ham_nav'>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <AiOutlineMenu className='menu' onClick={toggleDrawer(anchor, true)} />
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div className="cart_model">
            <div className="heading">
              <p>Shoping Cart</p>
              <p className='icon' onClick={handleClose}> <AiOutlineClose/> </p>
            </div>
          <Cart/>
          </div>
      </Modal>
    </>
  );
}



export default Navbar