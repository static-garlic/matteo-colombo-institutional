import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Topbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }

    render() {
        return (
            <nav
                className="navbar"
                role="navigation"
                aria-label="top-navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item" title="Logo">
                            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                        </Link>
                    </div>
                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-start has-text-centered">
                            <Link className="navbar-item" to="/biography">
                                Biography
                            </Link>
                            <Link className="navbar-item" to="/research">
                                Research
                            </Link>
                            <Link className="navbar-item" to="/publications">
                                Publications
                            </Link>
                            <Link className="navbar-item" to="/infographics-and-maps">
                                Infographics and maps
                            </Link>
                            <Link className="navbar-item" to="/teaching">
                                Teaching
                            </Link>
                            <Link className="navbar-item" to="/language-skills">
                                Language Skills
                            </Link>
                            <Link className="navbar-item" to="/technical-skills">
                                Technical Skills
                            </Link>
                            <Link className="navbar-item" to="/media">
                                Media
                            </Link>
                        </div>
                        <div className="navbar-end has-text-centered">
                            <a
                                className="navbar-item"
                                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Topbar
