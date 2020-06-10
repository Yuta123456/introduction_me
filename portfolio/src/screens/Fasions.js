import React from 'react';

//screens
import Nav from './Nav';
import Header from './Header';
import FasionsContent from './FasionsContent';
import Footer from './Footer';

class Fasions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Nav />
                <FasionsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Fasions;