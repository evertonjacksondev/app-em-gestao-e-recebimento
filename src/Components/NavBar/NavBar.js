import {
  Bars,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu
} from '../DesignSystem/Elements/Nav'

const NavBar = () => {
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
