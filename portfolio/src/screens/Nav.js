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
                <ul className="columns has-text-centered">
                    <li className="column is-size-3"><NavLink exact to="/" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>Profile</NavLink></li>
                    <li className="column is-size-3"><NavLink exact to="/Achivement" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>Achivement</NavLink></li>
                    <li className="column is-size-3"><NavLink exact to="/Links" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>Links</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;