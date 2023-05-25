import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  function toggleHome() {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              Fancy Logo
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks>
                  <HashLink
                    className='nav-hash-link'
                    smooth
                    to='#about'
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    About
                  </HashLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <HashLink
                    className='nav-hash-link'
                    smooth
                    to='#discover'
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Discover
                  </HashLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <HashLink
                    className='nav-hash-link'
                    smooth
                    to='#services'
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Services
                  </HashLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <HashLink
                    className='nav-hash-link'
                    smooth
                    to='#signup'
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Sign up
                  </HashLink>
                </NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to='signin'>Sign in</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
