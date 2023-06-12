import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import css
import './App.css';

// import components
import UserListing from './components/UserListing';
import Adduser from './components/AddUser';
import Updateuser from './components/UpdateUser';

// import Navbar bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App () {

    return ( 
          <BrowserRouter>
          {/* <BasicBar/> */}
            <div className='header'>
              {/* bootstrap navabr */}
            <Navbar bg="light" expand="lg">
          <Container>
        <Navbar.Brand href={'/'}>User Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={'/'}>Home</Nav.Link>
            {/* <Link to={'/'}>Home</Link> */}
            <Nav.Link href={'/user'}>User</Nav.Link>
            {/* <Link to={'/user'}>User</Link> */}
            <Nav.Link href={'/user/add'}>Add</Nav.Link>
            {/* <Link to={'/user'}>User</Link> */}
          </Nav>
        </Navbar.Collapse>
       </Container>
       </Navbar>
       </div>
       
        <Routes>
            <Route path='/user' element={<UserListing/>}></Route>
              <Route path='/user/add' element={<Adduser/>}></Route>
              <Route path='/user/edit/:code' element={<Updateuser/>}></Route>
        </Routes>
          </BrowserRouter> 
         
    )
    }
export default App;