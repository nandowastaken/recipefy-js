import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import InputBox from '../components/InputBox';
import Button from '../components/Button';

var styles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '10px',
        height: '80vh'
    }
}

class Register extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <HeaderBack/>

                <div className='content' style={styles.content}>
                    <InputBox text='Name'/>
                    <InputBox text='Username'/>
                    <InputBox text='Email'/>
                    <InputBox text='Password'/>
                    <Button name='Register'/>
                </div>
                
            </div>
        );
    }
}
 
export default Register;