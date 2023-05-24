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
                    className='nav-link'
                    to='#about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass='active'
                  >
                    About
                  </HashLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <HashLink
                    className='nav-link'
                    to='#discover'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass='active'
                  >
                    Discover
                  </HashLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <HashLink
                    className='nav-link'
                    to='#services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass='active'
                  >
                    Services
                  </HashLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <HashLink
                    className='nav-link'
                    to='#signup'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass='active'
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
