import React from 'react';
import { NavLink } from 'react-router-dom';
class Nav extends React.Component {
    render() {
        var text_style = {
            textAlign : 'center',
            marginLeft : 'auto',
            marginRight : 'auto',
            fontSize : 100
        }

        return (
            <nav style={{ background: "#666" }}>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li style={text_style}><NavLink exact to="/" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>Profile</NavLink></li>
                    <li style={text_style}><NavLink exact to="/Achivement" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>Achivement</NavLink></li>
                    <li style={text_style}><NavLink exact to="/Links" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>Links</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;