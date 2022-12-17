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
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default NavBar
