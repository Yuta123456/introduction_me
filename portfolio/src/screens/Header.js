import React from 'react';
class Header extends React.Component {
    render() {
        
        var header_style = {
            height : 100,
            background: "#555",
            color:"3ff",
        }
        //style={{ height: 200, background: "#555", color:"3ff"}}
        return (
            <header style={header_style}>
            </header>
        );
    }
}

export default Header;