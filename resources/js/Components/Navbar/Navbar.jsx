import React, { useState } from 'react'
import './Navbar.scss'
import Fade from 'react-reveal/Fade';
import logo from '../../Assets/logo.png'
import Scroll from '../Scroll/Scroll';
// import home from "../../Assets/thirds.png";

// import home from '../../Assets/Menu/Contect.svg'
// import about from '../../Assets/Menu/About.svg'
// import services from '../../Assets/Menu/Services.svg'
// import quran from '../../Assets/Menu/Quran.svg'
// import mosque from '../../Assets/Menu/Mosque.svg'
// import contact from '../../Assets/Menu/Phone.svg'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


import { AiOutlineHome } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { GiInfo } from 'react-icons/gi';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineTeam } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';



const Navbar = () => {

  //  ****** Scroll Navbar ********

  const [showNav, setShowNav] = useState(false)
  const changingNavBar = () => {
    if (window.scrollY >= 105) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }
  window.addEventListener("scroll", changingNavBar)
  const [state, setState] = React.useState({

    left: false,
  });



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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 265 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='main'>
        <Fade top>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Fade>
        <div className="nav">

          <a href='#home' className="mobile_icon" to="/Home">
            <AiOutlineHome className="icon" />
            <div>Home</div>
          </a>
          <a href='#about' className="mobile_icon" to="/Home">
            <GiInfo className="icon" />
            <div style={{ marginTop: "-10px" }}>About </div>
          </a>
          <a href='#services' className="mobile_icon" to="/Home">
            <BsGear className="icon" />
            <div style={{ marginTop: "-10px" }}>Services</div>
          </a>
          <a href='#subscribe' className="mobile_icon" to="/Home">
            <AiOutlineBell className="icon" />

            <div style={{ marginTop: "-10px" }}>Suscribe</div>
          </a>
          <a href='#team' className="mobile_icon" to="/Home">
            <AiOutlineTeam className="icon" />
            <div>Team</div>
          </a>
          <a href='#contact' className="mobile_icon" to="/Home">
            <BsTelephone className="icon" />
            <div>Contact</div>
          </a>

        </div>
      </div>

    </Box>
  );


  return (

    <>
      <div className={showNav ? "show_scroll_nav" : "scroll_nav"} >
        <Fade top>
          <Scroll />
        </Fade>
      </div>
      <div style={showNav ? { display: "none" } : {}} className="nav-container">
        <Fade top>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Fade>

        <div className="green-box">
          <Fade top>
            <div className="flex-boxes">
              <a href="#home" className="box">
                <AiOutlineHome className="icon" />
                Home</a>
              <a href="#about" className="box">
                <GiInfo className="icon" />
                About</a>

              <a href='#services' className="box">
                <BsGear className="icon" />
                Services</a>
              <a href='#subscribe' className="box">
                <AiOutlineBell className="icon" />
                Subscribe</a>
              <a href='#team' className="box">
                <AiOutlineTeam className="icon" />
                Team</a>

              <a href='#contact' className="box">
                <BsTelephone className="icon" />
                Contact</a>
            </div>
          </Fade>
        </div>
        {/* ************* Mobile menu ************ */}


        <div className="mobile-menu">
          <div className='ham_none'>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>

                <div className="menu">
                  <Fade top>
                    <MenuIcon onClick={toggleDrawer(anchor, true)} style={{ fontSize: "35px" }} />
                  </Fade>
                </div>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>


        </div>



      </div>




    </>

  )
}

export default Navbar
