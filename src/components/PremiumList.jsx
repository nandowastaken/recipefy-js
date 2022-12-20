import React, { Component } from 'react';

var styles = {
    box: {
    }
}

class PremiumList extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.box}>
                <ul>
                    <li>{this.props.text}</li>
                </ul>
            </div>
        );
    }
}
 
export default PremiumList;