import React from 'react';

class Header extends React.Component {
    render() {
        //style={{color:"cyan"}}これだと行ける
        var twitter_style = {
            color : "cyan",
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 'auto',
            left: 'auto',
            position: 'fixed'
        }
        return (
            <header style={{ height: 100, background: "#"}}>
                <a href="https://twitter.com/nayuta999999"><i class="fab fa-twitter fa-4x" style={twitter_style}></i></a>
            </header>
        );
    }
}

export default Header;