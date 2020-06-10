import React from 'react';
import pic from './image/logo.jpg'
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className = "hero-head has-text-centered">
                    <img src = {pic} width = "50%" height = "20%"></img>
                </div>
            </header>
        );
    }
}
export default Header;