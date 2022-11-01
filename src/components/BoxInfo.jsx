import React, { Component } from 'react';
import edit from '../assets/svg/edit.svg'

var styles = {
    boxInfo: {
        margin: '30px',
        backgroundColor: '#F8F8F8',
        padding: '10px',

    },

    boxInfoHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    boxInfoEdit: {
        width: '15px',

    }
}

class BoxInfo extends Component {
    state = {  } 
    render() { 
        return (
            <div style={styles.boxInfo}>
                <div style={styles.boxInfoHeader}>
                    <h3>{this.props.name}</h3>
                    <img src={edit} style={styles.boxInfoEdit}></img>
                </div>
                        
                <p>{this.props.description}</p>
            </div>
        );
    }
}
 
export default BoxInfo;