import React, { Component } from 'react';

var styles = {
    button: {
        padding: '10px 100px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '15px',
        fontSize: '20px',
        fontWeight: '700',
        margin: '20px',
    }
}

class Button extends Component {
    state = {  } 
    render() { 
        return (
            <button style={styles.button}>
                {this.props.name}
            </button>
        );
    }
}
 
export default Button;