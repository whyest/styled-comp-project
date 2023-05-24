import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-router-dom'

export const Nav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;
  height: 80px;
  margin-top: -80px;
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  font-size: 1rem;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  max-width: 1100px;
  z-index: 1;
  padding: 0 24px;
`

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-left: 24px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  border: 3px solid transparent;
  height: 100%;
  padding: 0 1rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border: none;
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #010606;
  }
`
