import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import fotinha from '../assets/imgs/fotinha.png';

var styles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '10px',
        height: '80vh'
    },
    imagem: {
      height: '80%',
      width: '80%',  
      marginTop: '50px',
      marginLeft: '40px'
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
                    <a href="ForgotPassword.jsx">Forgot password?</a>
                    <p>Doesn't have account? <a href="Register.jsx">Sign In!</a></p>
                    <img src={fotinha} style={styles.imagem} />
                </div>
                
            </div>
        );
    }
}
 
export default Login;