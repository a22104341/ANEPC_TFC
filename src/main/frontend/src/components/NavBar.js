import React, {useState, useEffect} from 'react';
import {Navbar, Nav, Dropdown} from 'react-bootstrap';
import '../static/styles.css'; // Import your CSS file

function NavBar({dynamicText}) {
    const [userName, setUserName] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const isNavLinkActive = (path) => {
        return window.location.pathname === path;
    };
    /*
        // Set the UserName and then display it on the logout button
        useEffect(() => {
            fetchUserName();
        }, []);

        const fetchUserName = async () => {
            try {
                const response = await fetch('/api/getUserName');
                const data = await response.json();
                setUserName(data.userName);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
    */
    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown); // Toggle the visibility of the dropdown menu
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logout clicked');
        // Redirect to '/login' page
        window.location.href = '/login';
        // Optional: Close the dropdown after logout
        setShowDropdown(false);
    };

    const navLinkStyles = (isActive, color) => ({
        color: isActive ? color : 'var(--greySite)',
        textDecoration: isActive ? 'underline' : 'none',
    });

    const isLoginPage = window.location.pathname !== '/login';

    return (
        <Navbar className="navbar">
            <div className="topSection">
                <div className="nav-logo">
                    <Navbar.Brand>
                        <img src="../../public/images/anepc_logo_with_name.jpg" alt="Your Logo"/>
                    </Navbar.Brand>
                </div>
                {isLoginPage &&
                    <div className="main-nav">
                        <Nav.Link href="/criar_cto"
                                  style={navLinkStyles(isNavLinkActive('/criar_cto'), 'var(--greenANEPC)')}>
                            Criar CTO
                        </Nav.Link>

                        <Nav.Link href="/ctos" style={navLinkStyles(isNavLinkActive('/ctos'), 'var(--orangeANEPC)')}>
                            CTO'S
                        </Nav.Link>

                        <Nav.Link href="/estatisticas"
                                  style={navLinkStyles(isNavLinkActive('/estatisticas'), 'var(--blueANEPC)')}>
                            Consultar Estatísticas
                        </Nav.Link>
                    </div>}
            </div>
            <div className="bottom-nav">
                <div className="dynamicText">
                    <h2><Navbar.Text>{dynamicText}</Navbar.Text></h2>
                </div>
                {isLoginPage &&
                    <Dropdown className='logoutButton' show={showDropdown} onSelect={() => setShowDropdown(false)}>
                        <Dropdown.Toggle variant="outline-light" id="dropdown-basic" onClick={handleDropdownToggle}>
                            {userName ? userName : 'João Carv...'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/* Add logout option */}
                            <Dropdown.Item onClick={handleLogout}>
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
            </div>
        </Navbar>
    );
}

export default NavBar;
