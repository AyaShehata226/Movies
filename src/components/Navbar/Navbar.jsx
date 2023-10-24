import React ,{useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHeart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './Navbar'
import { languageContext } from '../../contexts/language';
const NavbarFun = () => {
  const favorites = useSelector((state) => state.fav.movies);
  const {lang , setLang} = useContext(languageContext)
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav className='ms-auto'>
            <NavLink to="/" className= "nav-link">Home</NavLink>
            <NavLink to="/Movies" className="nav-link">Movies</NavLink>
            <NavLink to="/Favorites" className="nav-link">Favorites< FaHeart className={`ms-4 fs-2 me-3 ${favorites.length > 0 ? 'text-danger' : 'text-gray'}`}/>{favorites.length}</NavLink>
            <NavLink to="/login" className="nav-link">login</NavLink>
            <NavLink to="/SingUp"  className="nav-link">register</NavLink>
            <button className='btn btn-success me-2' onClick={()=>{setLang(lang==="en"?"ar":"en")}}>Language</button><span className='mt-2'>{lang}</span>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavbarFun;
