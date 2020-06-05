import React from 'react';

//screens
import Nav from './Nav';
import Header from './Header';
import LinksContent from './LinksContent';
import Footer from './Footer';

class Links extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Header />
                <LinksContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Links;