import React from 'react'
import {Link} from 'gatsby'
import {Navbar} from "reactstrap";

const NavigationBar = class extends React.Component {

    render() {
        return (
            <Navbar color="white" light className="navbar-expand-md">
                <Link to="/" className="navbar-item" title="Logo">
                    <button className="btn btn-primary">LOGO</button>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item text-primary">
                            <Link className="nav-link" to="/biography" activeClassName="active">
                                Biography
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/research">
                                Research
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/publications">
                                Publications
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/infographics-and-maps">
                                Infographics and maps
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/teaching">
                                Teaching
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/language-skills">
                                Language Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technical-skills">
                                Technical Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/media">
                                Media
                            </Link>
                        </li>
                    </ul>
                </div>
            </Navbar>
        )
    }
}

export default NavigationBar
