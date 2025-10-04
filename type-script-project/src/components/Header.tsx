// import React, { useState } from 'react';
// import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import './Header.css';

// const Header: React.FC = () => {
//   const [show, setShow] = useState<boolean>(false);
//   const location = useLocation();

//   const handleClose = (): void => setShow(false);
//   const handleShow = (): void => setShow(true);

//   const isActive = (path: string): boolean => {
//     return location.pathname.startsWith(path);
//   };

//   return (
//     <>
//       <Navbar
//         bg='dark'
//         variant='dark'
//         expand='lg'
//         className='header-navbar'>
//         <Container fluid>
//           <Navbar.Brand
//             as={Link}
//             to='/'
//             className='header-brand'>
//             Blog App
//           </Navbar.Brand>

//           {/* Desktop Menu */}
//           <Nav className='d-none d-lg-flex'>
//             <Nav.Link
//               as={Link}
//               to='/posts'
//               className={isActive('/posts') ? 'active' : ''}>
//               Posts
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to='/users'
//               className={isActive('/users') ? 'active' : ''}>
//               Users
//             </Nav.Link>
//           </Nav>

//           {/* Mobile Toggle */}
//           <Navbar.Toggle
//             aria-controls='offcanvasNavbar'
//             onClick={handleShow}
//             className='d-lg-none'
//           />

//           {/* Mobile Offcanvas Menu */}
//           <Navbar.Offcanvas
//             id='offcanvasNavbar'
//             aria-labelledby='offcanvasNavbarLabel'
//             placement='end'
//             show={show}
//             onHide={handleClose}
//             className='d-lg-none'>
//             <Offcanvas.Header
//               closeButton
//               className='offcanvas-dark'>
//               <Offcanvas.Title id='offcanvasNavbarLabel'>
//                 Blog App
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body className='offcanvas-dark'>
//               <Nav className='flex-column'>
//                 <Nav.Link
//                   as={Link}
//                   to='/posts'
//                   onClick={handleClose}
//                   className='offcanvas-nav-link'>
//                   Posts
//                 </Nav.Link>
//                 <Nav.Link
//                   as={Link}
//                   to='/users'
//                   onClick={handleClose}
//                   className='offcanvas-nav-link'>
//                   Users
//                 </Nav.Link>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Header;
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    // Make the check more specific for non-root paths
    if (path !== '/') {
      return location.pathname.startsWith(path);
    }
    return location.pathname === path;
  };

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      variant='dark'
      className='header-navbar'
      sticky='top'>
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to='/'
          className='header-brand'>
          Blog App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* 'me-auto' keeps the nav aligned to the left next to the brand on desktop */}
          <Nav className='me-auto'>
            <Nav.Link
              as={Link}
              to='/posts'
              className={isActive('/posts') ? 'active' : ''}>
              Posts
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/users'
              className={isActive('/users') ? 'active' : ''}>
              Users
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
