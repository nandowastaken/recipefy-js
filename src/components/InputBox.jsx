import React, { Component } from 'react';

var styles = {
    box: {
        borderStyle: 'solid',
        borderWidth: '0.1px',
        borderRadius: '9px',
        margin: '15px',
        padding: '3px',
        opacity: 0.8,
        boxShadow: '0px 3px #888888',

        fontSize: '20px',
    }
}

class InputBox extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.box}>
                {this.props.text}
            </div>
        );
    }
}
 
export default InputBox;