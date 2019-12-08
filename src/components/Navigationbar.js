import React, {useState} from 'react'
import {Link} from 'gatsby'
import {Button, Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="white" light className="navbar-expand-md">
                <Link to="/" className="navbar-brand" title="Logo">
                    <Button color="primary">LOGO</Button>
                </Link>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/biography" activeClassName="text-primary">
                            Biography
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/research" activeClassName="text-primary">
                            Research
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/publications" activeClassName="text-primary">
                            Publications
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/infographics-and-maps" activeClassName="text-primary">
                            Infographics and maps
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/teaching" activeClassName="text-primary">
                            Teaching
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/language-skills" activeClassName="text-primary">
                            Language Skills
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/technical-skills" activeClassName="text-primary">
                            Technical Skills
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/media" activeClassName="text-primary">
                            Media
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default NavigationBar;