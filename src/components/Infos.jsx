import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var styles = {
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
}

class Infos extends Component {
    state = {  } 
    render() { 
        return (
            <div className='text' style={styles.text}>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
 
export default Infos;