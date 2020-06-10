import React from 'react';
import { NavLink } from 'react-router-dom';
class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar is-light" role="navigation" aria-label="main navigation">

            <div class="tabs is-boxed is-fullwidth">
                <div class="navbar-item">
                    <div><NavLink exact to="/">Profile</NavLink></div>
                </div>
                <div class="navbar-item">
                    <div><NavLink exact to="/Achivement">Achivement</NavLink></div>
                </div>
                <div class="navbar-item">
                    <div><NavLink exact to="/Links">Links</NavLink></div>
                </div>
            </div>
            </nav>
        );
    }
}
/*
<div class="container is-widescreen">
                <nav className="navbar-menu has-text-centered">
                        <span className="tag is-primary is-medium"><NavLink exact to="/">Profile</NavLink></span>
                        <span className="tag is-primary is-medium"><NavLink exact to="/Achivement">Achivement</NavLink></span>
                        <span className="tag is-primary is-medium"><NavLink exact to="/Links">Links</NavLink></span>
                </nav>
            </div>
*/
export default Nav;

