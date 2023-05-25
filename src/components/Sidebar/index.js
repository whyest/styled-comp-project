import React from 'react'
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
} from './SidebarElements'
import { HashLink } from 'react-router-hash-link'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle}>
            <HashLink
              className='nav-hash-link'
              smooth
              to='#about'
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClassName='active'
            >
              About
            </HashLink>
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            <HashLink
              className='nav-hash-link'
              smooth
              to='#discover'
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClassName='active'
            >
              Discover
            </HashLink>
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            <HashLink
              className='nav-hash-link'
              smooth
              to='#services'
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClassName='active'
            >
              Services
            </HashLink>
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            <HashLink
              className='nav-hash-link'
              smooth
              to='#signup'
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClassName='active'
            >
              Sign up
            </HashLink>
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to='signin'>Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
