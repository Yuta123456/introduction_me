import React from 'react';
class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.click = false;
    }
    render() {
        var content = {
            fontSize : 100,
            textAlign : 'center',
        }
        var text = {
            textAlign : 'center',
        }
        var list = {
            marginRight: 'auto',
            marginLeft: 'auto',
        }
        return (
            <div style={{ height: 1200, backgroundColor: "#ffffff" }}>
                <p style={content}>Profile</p>
                    <ul style={list}>
                        <li >日本大学文理学部情報科学科</li>
                    </ul>
                <p style={content}>Hobby</p>
                <p style={content}>Jobs</p>

            </div>

        );
    }
}
export default HomeContent;