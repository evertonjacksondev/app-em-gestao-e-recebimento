import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
  const Nav = styled.nav`
    background: #2b4d5c;
    height: 55px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    justify-content: flex-start;
  `

  const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    &.active {
      color: #000000;
      box-shadow: 5px 5px 5px #aba6a2;
    }
    :hover {
      outline: none;
    }
  `

  const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  `

  const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `

  const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    justify-content: flex-end;
    width: 100vw;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `

  const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #aba6a2;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: black;
      box-shadow: 10px 5px 5px #aba6a2;
    }
  `

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/morador' activeStyle>
            Morador
          </NavLink>
          <NavLink to='/encomenda' activeStyle>
            Encomenda
          </NavLink>
          <NavLink to='/Sair' activeStyle>
            Sair
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default NavBar
