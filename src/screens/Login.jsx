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

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <HeaderBack/>

                <div className='content' style={styles.content}>
                    <InputBox text='Email'/>
                    <InputBox text='Password'/>
                    <Button name='Log in'/>
                </div>
                
            </div>
        );
    }
}
 
export default Login;