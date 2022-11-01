import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import forgot from '../assets/imgs/forgot.png'

var styles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        height: '80vh'
    },
    imagem: {
        marginTop: '50px',
    }
}

class ForgotPassword extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <HeaderBack/>

                <div className='content' style={styles.content}>
                    <InputBox text='Email'/>
                    <Button name='Send code'/>
                    <img src={forgot} style={styles.imagem}></img>
                </div>
                
            </div>
        );
    }
}
 
export default ForgotPassword;